// Create a server using Node.js 

// 1. Import http library/module
const http = require('http');

// 2. Create Server. 
const server = http.createServer((req, res)=>{
   // Here comes the request.
   res.end('Welcome to NodeJs Server');
});

// 3. Spacify a port to listen to client's requests.
server.listen(3100, () => {
    console.log('Server is listening on port 3100');
});

// console.log('server is listening on port 3100');

