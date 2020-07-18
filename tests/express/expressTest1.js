const express = require("express");
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

let books = [];
// var server = http.createServer(app);
const getCurPath = () => {
    return path.join(__dirname, '/public');
}

const makeRoute = (app) => {
    app.get('/', (req, res) => startApp({req, res}));
    app.get('/testroot', (req, res) => testRootApp({req, res}));
    // app.get('/testjade', (req, res) => testJade({req, res}));
    // app.use('/profile', true, require('profile')());
    app.get('/books', (req, res) => testBook({req, res}));
    app.post('/book', (req, res) => handleBookApi({req,res}));
    app.get("*",(req, res)=> pageNotFound({req,res}));
}

(() => {
    const app = express();
    app.set('views', './tests/express/public/views');
    app.set('view engine', 'ejs');
    const port = 3000;
    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(helmet());
    app.use(cors());
    makeRoute(app);
    app.listen(port, (err) => onerror(err));
})() //start the app

const onerror = (err) => {
    console.log(err);
}

const startApp = (reqres) => {
    let {req, res} = reqres;
    let curDir = getCurPath();
    // res.sendFile(path.join(curDir, 'views/expressTest.ejs'));
    let people=['geddy', 'neil', 'alex'];
    res.render('expressTest',{people});
}
const testRootApp = (reqres) => {
    let {req, res} = reqres;
    let curDir = getCurPath();
    // res.sendFile(path.join(curDir, 'views/testroot.ejs'));
    res.render('testroot',{data:[1,2,3]});
}
const pageNotFound = (reqres) => {
    let {req, res} = reqres;
    let curDir = getCurPath();
    res.render('pageNotFound');
}
// const testJade = (reqres) => {
//     let {req, res} = reqres;
//     let curDir = getCurPath();
//     res.render('page', {title: 'devendra,first jade'})
// }
const testBook = (reqres) => {
    let {req, res} = reqres;
    let curDir = getCurPath();
    // res.sendFile(path.join(curDir, 'views/books.ejs'))
    res.render('books');
}
const handleBookApi = (reqres) => {
    let {req, res} = reqres;
    const book = req.body;
    books.push(book);
    res.json(books);
}
let myFileLoader = function (filePath) {
    return 'myFileLoader: ' + fs.readFileSync(filePath);
};
const fileLoader=()=>{
    let ejs=require('ejs');
    ejs.fileLoader = myFileLoader();
}