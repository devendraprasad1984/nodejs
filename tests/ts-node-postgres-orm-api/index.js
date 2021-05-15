var express = require('express');
var app = express();
var fs = require("fs");
var {Column, Entity} = require('typeorm')
var {Client} = require('pg')

const initDB = () => {
    return new Client({
        user: 'dpadmin',
        host: 'localhost',
        database: 'postgres',
        password: 'admin',
        port: 5432,
    });
}
const handleError = (res, err) => {
    if (err) {
        console.log(err)
        dbClient.end()
        res.end(JSON.stringify(err))
        return true
    }
    return false
}
app.get('/', function (req, res) {
    res.end('<h1>hello this test express home</h1>')
})

app.get('/users/:id', function (req, res) {
    fs.readFile(__dirname + "/data/" + "users.json", 'utf8', function (err, data) {
        let id = req.params.id
        let parseData = JSON.parse(data)
        let result = []
        if (id !== '*' && id !== '') {
            result = parseData['user' + id]
        } else {
            result = parseData
        }
        console.log('params', req.params, result)
        res.end(JSON.stringify(result));
    });
})

app.get('/getUserFromDB', function (req, res) {
    let result = []
    let sql = 'select * from test'
    let db = initDB()
    db.connect()
    db.query(sql).then(data => {
        result = data.rows || []
        if (db) db.end()
        res.end(JSON.stringify(result))
    }).catch(err => {
        if (handleError(res, err)) return
    }).finally(() => {
        if (db) db.end()
    })
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
