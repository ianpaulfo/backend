const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

const usersRouter = require('../users/user-router');
const authRouter = require('../auth/auth-router');
const authenticator = require('../auth/authenticator');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(dotenv.config());

server.use('/api/users', authenticator, usersRouter);
server.use('/api/auth', authRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Med Cabinet - Backend by Ian Fragoso</h1>`);
});



module.exports = server;