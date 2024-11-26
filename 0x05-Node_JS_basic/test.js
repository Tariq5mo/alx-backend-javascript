const { createServer } = require('http');
const http = require('http');

http.get('http://localhost:1245/students', (res) => {
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
console.log('3744');

  });
});
const host = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port, host);

module.exports = app;
