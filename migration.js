const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

db.run('CREATE TABLE IF NOT EXISTS Teacher (' +
    'id INTEGER NOT NULL PRIMARY KEY, ' +
    'name TEXT NOT NULL, ' +
    'is_current_teacher INTEGER DEFAULT 1)');

db.run('CREATE TABLE IF NOT EXISTS Student (' +
    'id INTEGER NOT NULL PRIMARY KEY, ' +
    'name TEXT NOT NULL, ' +
    'is_current_student INTEGER DEFAULT 1)');

db.run('CREATE TABLE IF NOT EXISTS Event (' +
    'id INTEGER NOT NULL PRIMARY KEY, ' +
    'type TEXT DEFAULT lesson, ' +
    //Start Time as 'YYYY-MM-DDTHH:MM'
    'start_time TEXT NOT NULL, ' +
    'duration INTEGER DEFAULT 30, ' +
    'need_sub INTEGER DEFAULT 0, ' +
    'student_id INTEGER NOT NULL, ' +
    'teacher_id INTEGER NOT NULL, ' +
    'FOREIGN KEY(student_id) REFERENCES Student(id), ' +
    'FOREIGN KEY (teacher_id) REFERENCES Teacher(id))');