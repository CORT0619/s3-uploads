const http = require('http');

const PORT = 3000 || process.env.PORT;

const server = http.createServer((req, res) => {
	console.log('listening on port: %d ', PORT);
});

server.listen(PORT)