const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };

http.createServer((req, res) => {
  const requested = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, requested);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': types[path.extname(filePath)] || 'text/plain' });
    res.end(content);
  });
}).listen(port, () => console.log(`Portfolio running at http://localhost:${port}`));
