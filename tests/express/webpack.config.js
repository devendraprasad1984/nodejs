const path=require('path');
module.exports={
    entry: './tests/express/expressTest1.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: "expressTest1.bundle.js"
    }, target: "node"
}