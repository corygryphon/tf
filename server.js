var http = require('http');
var router = require('./router.js')

http.createServer(router.handleRequests).listen(8002);