//run in below format
// http://127.0.0.1:3000/add/4/2
var myNodeServer=require('./nodeSimpleWebService')
console.log('node server from other module')
myNodeServer.simpleNodeServer()
console.log('test successful')
