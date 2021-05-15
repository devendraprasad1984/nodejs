import {createConnection} from "typeorm";
import {Post} from "./entity/post";
import {Category} from "./entity/category";
import * as express from 'express'
import {Routes} from "./routes";

// connection settings are in the "ormconfig.json" file
const firstTimePosts = async (con) => {
    const category1 = new Category();
    category1.name = "TypeScript";
    await con.manager.save(category1);

    const category2 = new Category();
    category2.name = "Programming";
    await con.manager.save(category2);

    const post = new Post();
    post.title = "Control flow based type analysis";
    post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
    post.category = [category1, category2];

    await con.manager.save(post);
    console.log("Post has been saved: ", post);

}
createConnection().then(async connection => {
    // firstTimePosts(connection)
    const app = express()
    app.use(express.json())
    //register routes
    Routes.forEach(route => {
        (app)[route.method](route.route, (req, res, next) => {
            if (route.controller === undefined || route.controller === null) return
            const result = (new route.controller)[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(data => res.send(data))
            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })
    app.listen(3000)
}).catch(error => console.log("Error: ", error));
