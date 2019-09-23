const express = require('express');

const server = express();

server.use(express.json());

server.get('/test', (req,res) => {
    res.json('it working!')
})




















module.exports = server;