var http = require("https");

var options = {
    "method": "GET",
    "hostname": "bloomberg-market-and-financial-news.p.rapidapi.com",
    "port": null,
    "path": "/market/get-compact?id=adsmi%253Aind%252Caex%253Aind%252Cco1%253Acom%252Cgc1%253Acom",
    "headers": {
        "x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com",
        "x-rapidapi-key": "53f8428418msh6be97643ba409e5p1a583djsn3bf38edbf00a",
        "useQueryString": true
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();
