// let initDB = require("./initDB");
// let handleError = require("./handleError");
import initDB from "./initDB";
import handleError from "./handleError";


const getUsersFromORM = (req, res)=> {
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
}
// module.exports = getUsersFromORM
export default getUsersFromORM
