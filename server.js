const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use(logger)
server.use('/api/schemes', SchemeRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'serverrr upppp'})
})

function logger(req, res, next) {
    console.log(`a ${req.method} request was made to ${req.url}`)
    next()
}

module.exports = server;