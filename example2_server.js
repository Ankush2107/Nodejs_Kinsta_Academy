const http = require('http');
const server = http.createServer((request, response) => {

    if(request.url == '/about') 
        response.end('This is about Page');

    else if(request.url == '/login') 
        response.end('Log in !');

    else if(request.url == '/logout')
        response.end('Logout !!');

    else {
        response.writeHead(404);
        response.end('Page not found');
    }
});

server.listen(8080);
console.log("Listening on port 8080");