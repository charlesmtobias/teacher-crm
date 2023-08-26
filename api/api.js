const express = require('express');
const apiRouter = express.Router();
const teachersRouter = require('./teachers');
const eventsRouter = require('./events');
const studentsRouter = require('./students');

apiRouter.use('/teachers', teachersRouter);
apiRouter.use('/events', eventsRouter);
apiRouter.use('/students', studentsRouter);

module.exports = apiRouter;