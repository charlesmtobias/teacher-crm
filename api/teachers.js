const express = require('express');
const teachersRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');



module.exports = teachersRouter;