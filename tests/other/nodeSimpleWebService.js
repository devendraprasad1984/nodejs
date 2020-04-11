//run in below format
// http://127.0.0.1:3000/add/4/2
var sys = require('sys'),
    http = require('http');

mySimpleNodeServer=function(){
    http.createServer(function (req, res) {
        var parts = req.url.split('/')
        // sys.puts(sys.inspect(req))
        sys.puts(sys.inspect(parts))
        var op = operations[parts[1]],
            a = parseInt(parts[2],10),
            b = parseInt(parts[3],10),
            ans = op(a,b);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Hello World, this is Devendra Prasad</h1>")
        res.write("<h2>this is end</h2>")
        res.write("<h2>The math answere is: " + ans + "</h2>")
        res.write('');
    }).listen(3000, "127.0.0.1");
}

var operations={
    add: function (a,b) {return a+b;}
    ,sub: function (a,b) {return a-b;}
    ,mul: function (a,b) {return a*b;}
    ,div: function (a,b) {return a/b;}
}

sys.puts("server running at http://127.0.0.1:3000/")

exports.simpleNodeServer=mySimpleNodeServer