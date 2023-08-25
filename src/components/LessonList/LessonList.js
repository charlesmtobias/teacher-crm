import React from 'react';
import Lesson from '../Lesson/Lesson';
import './LessonList.css'

export default function LessonList(params) {
    const upcomingLessons = [
        {
            name: 'Harry B. Hinde',
            startTime: {hour: 12, min:0},
            duration: 30,
            type: 'bass'
        },
        {
            name: 'Jessica Bessica',
            startTime: {hour: 12, min:30},
            duration: 30,
            type: 'drums'
        },
        {
            name: 'Troy Bolton',
            startTime: {hour: 13, min:0},
            duration: 60,
            type: 'voice'
        },
        {
            name: 'K.K. Slider',
            startTime: {hour: 14, min:0},
            duration: 30,
            type: 'piano'
        },
        {
            name: 'Carlos The Baker',
            startTime: {hour: 15, min:30},
            duration: 30,
            type: 'guitar'
        }
    ]
    const lessons = [];
    for(let i = 0; i < upcomingLessons.length; i++) {
        const lesson = upcomingLessons[i];
        lessons.push(<Lesson lesson={lesson} sub={params.type} />);
    }
    return(
        <div className='lesson-list-wrapper'>
            {lessons}
        </div>
    );
}