const express = require('express');
const app = express();

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

app.get('/', (req,res) => {
    res.send('<h1>Hola Mundo! Bienvenidos al Server con Express</h1>')
})

app.listen(PORT, HOSTNAME, function () {
    console.log(`Servidor iniciado en http://${HOSTNAME}:${PORT}`);
})