"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const post_1 = require("./entity/post");
const category_1 = require("./entity/category");
const express = require("express");
const routes_1 = require("./routes");
// connection settings are in the "ormconfig.json" file
const firstTimePosts = (con) => __awaiter(void 0, void 0, void 0, function* () {
    const category1 = new category_1.Category();
    category1.name = "TypeScript";
    yield con.manager.save(category1);
    const category2 = new category_1.Category();
    category2.name = "Programming";
    yield con.manager.save(category2);
    const post = new post_1.Post();
    post.title = "Control flow based type analysis";
    post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
    post.category = [category1, category2];
    yield con.manager.save(post);
    console.log("Post has been saved: ", post);
});
typeorm_1.createConnection().then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    // firstTimePosts(connection)
    const app = express();
    app.use(express.json());
    //register routes
    routes_1.Routes.forEach(route => {
        (app)[route.method](route.route, (req, res, next) => {
            if (route.controller === undefined || route.controller === null)
                return;
            const result = (new route.controller)[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(data => res.send(data));
            }
            else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });
    app.listen(3000);
})).catch(error => console.log("Error: ", error));
