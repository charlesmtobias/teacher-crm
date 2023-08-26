import React from 'react';
import {Lesson, SubLesson, Event} from '../Lesson/Lesson';
import './LessonList.css'

export default function LessonList(params) {
    const lessons = [];
    if(!params.list) {
        return (<div className='lesson-list-wrapper'>No Lessons
    </div>);
    }
    if(params.type == 'lesson') {
        params.list.forEach(lesson => {
            lessons.push(<Lesson lesson={lesson} />)
        });
    }

    if(params.type == 'sub') {
        params.list.forEach(lesson => {
            lessons.push(<SubLesson lesson={lesson} />)
        });
    }

    if(params.type == 'event') {
        params.list.forEach(lesson => {
            lessons.push(<Event lesson={lesson} />)
        });
    }

    return(
        <div className='lesson-list-wrapper'>
            {lessons}
        </div>
    );
}