// const http = require('node:http')
const { createServer } = require('node:http');
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = createServer((req,res) =>{
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hola Mundo! Bienvenidos al Server con Node');

    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hola Mundo! Bienvenidos al Server con Node</h1>');
});

server.listen(PORT, HOSTNAME, ()=>{
    console.log(`Servidor escuchando en http://${HOSTNAME}:${PORT}`)
})