const http = require("http")

const PORT = process.env.PORT || 5000

const appServer = http.createServer(async (req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify({msg: 'This is api endpoint'}))
        res.end()
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({msg: 'route not found'}))
    }
})
appServer.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`)
})