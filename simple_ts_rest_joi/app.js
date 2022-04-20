const http = require("http")
const todosController = require('./controller')
const {getReqData} = require("./utils")
const enums = require('./enums')


const PORT = process.env.PORT || 5000
const appServer = http.createServer(async (req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(enums.statusCode200, enums.contentTypeJson)
        res.write(JSON.stringify({msg: 'This is api endpoint'}))
        res.end()
    } else if (req.url === '/api/todos' && req.method === 'GET') {
        let todos = await new todosController().getTodos()
        res.writeHead(enums.statusCode200, enums.contentTypeJson)
        res.end(JSON.stringify(todos))
    } else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === 'GET') {
        try {
            let id = req.url.split('/')[3]
            let todo = await new todosController().getSingleTodo(id)
            res.writeHead(enums.statusCode200, enums.contentTypeJson)
            res.end(JSON.stringify(todo))
        } catch (err) {
            res.end(JSON.stringify({msg: err}))
        }
    } else {
        res.writeHead(enums.statusCode404, enums.contentTypeJson)
        res.end(JSON.stringify({msg: 'route not found'}))
    }
})
appServer.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})