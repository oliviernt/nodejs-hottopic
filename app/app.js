var http = require('http'),
url = require('url');
var serverCallback = function (request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.write(url.parse(request.url).path);
  response.write('\n');
  response.end('Hello World!');
};
var server = http.createServer(serverCallback);
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');