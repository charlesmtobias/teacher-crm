import React from 'react';
import Lesson from '../Lesson/Lesson';
import './LessonList.css'

export default function LessonList() {
    const names = ["Tommy Smith", "Jeremy Floobert", "Keith Keitherson", "Jessica Bessica", "Harry B. Hind"]
    const lessons = [];
    for(let i = 0; i < 5; i++) {
        lessons.push(<Lesson name={names[i]} startTime="12:00" endTime="12:30" />);
    }
    return(
        <div className='lesson-list-wrapper'>
            <h3>Today's Lessons</h3>
            {lessons}
        </div>
    );
}