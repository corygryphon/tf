var url = require('url');
var fs = require('fs');

module.exports = {
    handleRequests: function (request, response) {

        var path = url.parse(request.url).pathname;
        console.log(path);
        switch (path) {
            case '/':
                console.log('request index');
                response.writeHead(200, {'Content-Type': 'text/html'});
                renderHTML('./index.html', response);
                break;
            case '/concepts.js':
                response.writeHead(200, {'Content-Type': 'text/html'});
                renderHTML('./concepts.js', response);
                break;
        }
    }
};

function renderHTML(path,response){
    fs.readFile(path, null, function(error, data){
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}