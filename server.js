const express = require('express');

const welcomeRouter = require('./api/welcome/welcome-router.js');
const itemsRouter = require('./api/items/items-router.js');

const server = express();

server.use(express.json());

server.use('/api', welcomeRouter);
server.use('/api/items', itemsRouter);

module.exports = server;