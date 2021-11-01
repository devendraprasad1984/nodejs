import express from 'express'
import getUsersFromDB from "./getUsersFromDB";
import getUsersFromORM from "./getUsersFromOrm";
import getUsersFromFile from "./getUsersFromFile";
import typeorm from "typeorm";

//express node app connect to postgress server using noraml sql query and typeOrm based object also

typeorm.createConnection().then(async connection=>{
    const app = express();
    app.get('/', function (req, res) {
        res.end('<h1>hello this test express home</h1>')
    })

    app.get('/users/:id', getUsersFromFile)
    app.get('/getUserFromDB', getUsersFromDB)
    app.get('/getUserFromORM', (req,res)=> getUsersFromORM(req,res,connection))


    const server = app.listen(8081, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Example app listening at http://%s:%s", host, port)
    })
})
