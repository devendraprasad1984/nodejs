// npm install mysql
var mysql = require("mysql")
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin1234',
    database: 'dptests'
})
console.log('trying to connect')
var objData = [
    {
        name: 'devendra prasad',
        age: 24,
        marks: 45,
        subjects: 'hindi'
    }
    ,{
        name: 'ABC',
        age: 12,
        marks: 65,
        subjects: 'maths'
    }
    ,{
        name: 'raj',
        age: 36,
        marks: 90,
        subjects: 'english'
    }
]

conn.connect()
console.log('connected to mysql')
if(false) {
    for (k in objData) {
        // console.log(objData)
        console.log("inserting " + k, objData[k]);
        var qur = conn.query('insert into table1 set ?', objData[k], function (err, res) {
            if (err) {
                console.log(err)
            } else {
                console.log(res, qur.sql)
            }
        });
    }
}
//selecting what has been loaded
var selQur='select * from table1';
qur=conn.query(selQur,function (err,res) {
    console.log(res,res[0].name)
    for (k in res){
        console.log(res[k]['name'],res[k]['age'],res[k]['marks'],res[k]['subjects'])
    }
})
conn.end()
console.log('closed')
