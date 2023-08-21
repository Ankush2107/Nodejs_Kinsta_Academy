const http = require('http');         // require is same as import or include used in other languages. 
const server = http.createServer((request, response) => {
    console.log(request.url);
    response.end('Hello Ankush');
})

server.listen(8080);
console.log("server running on http://localhost:8080");