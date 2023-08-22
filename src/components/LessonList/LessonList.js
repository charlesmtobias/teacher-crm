import React from 'react';
import Lesson from '../Lesson/Lesson';
import './LessonList.css'

export default function LessonList(params) {
    const upcomingLessons = [
        {
            name: 'Tommy Smith',
            startTime: {hour: 11, min:30},
            duration: 30
        },
        {
            name: 'Harry B. Hinde',
            startTime: {hour: 12, min:0},
            duration: 30
        },
        {
            name: 'Jessica Bessica',
            startTime: {hour: 12, min:30},
            duration: 30
        },
        {
            name: 'Troy Bolton',
            startTime: {hour: 1, min:0},
            duration: 30
        },
        {
            name: 'Carlos The Baker',
            startTime: {hour: 3, min:30},
            duration: 30
        }
    ]
    const lessons = [];
    for(let i = 0; i < upcomingLessons.length; i++) {
        const lesson = upcomingLessons[i];
        lessons.push(<Lesson name={lesson.name} startTime={lesson.startTime} duration={lesson.duration} />);
    }
    return(
        <div className='lesson-list-wrapper'>
            <h5>{params.title || "Lessons"}</h5>
            {lessons}
        </div>
    );
}