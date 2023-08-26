const express = require('express');
const studentsRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

studentsRouter.param('studentId', (req, res, next, studentId) => {
    db.get('SELECT * FROM Student WHERE Student.id = $studentId',
    {
        $studentId: studentId
    }, (err, student) => {
        if(err) {
            next(err);
        } else if (student) {
            req.student = student;
            next();
        } else {
            res.sendStatus(404);
        }
    })
})

studentsRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM Student', (err, students) => {
        if(err) {
            next(err);
        } else {
            res.status(200).send({students: students});
        }
    })
})

studentsRouter.get('/:studentId', (req, res, next) => {
    res.status(200).send({student: req.student});
})

module.exports = studentsRouter;