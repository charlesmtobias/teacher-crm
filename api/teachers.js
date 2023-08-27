const express = require('express');
const teachersRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

teachersRouter.param('teacherId', (req, res, next, teacherId) => {
    db.get('SELECT * FROM Teacher WHERE Teacher.id = $teacherId',
    {
        $teacherId: teacherId
    }, (err, teacher) => {
        if(err) {
            next(err);
        } else if (teacher) {
            req.teacher = teacher;
            next();
        } else {
            res.sendStatus(404);
        }
    })
})

teachersRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM Teacher', (err, teachers) => {
        if(err) {
            next(err);
        } else {
            res.status(200).send({teachers: teachers});
        }
    })
})

teachersRouter.get('/:teacherId', (req, res, next) => {
    res.status(200).send({teacher: req.teacher});
})

teachersRouter.get('/:teacherId/lessons', (req, res, next) => {
    db.all("SELECT * FROM Event WHERE Event.teacher_id = $teacherId AND Event.event_type = 'lesson' AND Event.start_time LIKE DATE('now', 'localtime')||'%' ORDER BY Event.start_time ASC", 
    {
        $teacherId: req.teacher.id
    }, (err, lessons) => {
        if(err) {
            next(err);
        } else {
            res.status(200).send({lessons: lessons});
        }
    })
})

teachersRouter.get('/:teacherId/next_lesson', (req, res, next) => {
    db.get("SELECT * FROM Event WHERE Event.teacher_id = $teacherId AND Event.event_type = 'lesson' AND REPLACE(Event.start_time,'T',' ') > DATETIME('now', 'localtime')", 
    {
        $teacherId: req.teacher.id
    }, (err, lesson) => {
        if(err) {
            next(err);
        } else {
            res.status(200).send({lesson: lesson});
        }
    })
})

module.exports = teachersRouter;