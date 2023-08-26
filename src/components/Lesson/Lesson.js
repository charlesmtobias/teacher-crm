import React from 'react';
import './Lesson.css';

const icon = {
  guitar: '🎸',
  piano: '🎹',
  drums: '🥁',
  voice: '🎤',
  bass: '🎸',
  violin: '🎻',
  saxophone: '🎷'
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function Lesson({lesson}) {
  const name = lesson.name;
  const startTime = new Date(lesson.startTime);
  const duration = lesson.duration;
  const type = lesson.type;
  const endTime = new Date(getEndTime(startTime, duration));
  return(
    <div className={`card mb-3`}>
      <div className={`card-body ${lessonStatus(startTime, duration)}`}>
        <span className='fw-bold'>{printTime(startTime)} - {printTime(endTime)} {timeWarning(startTime, duration)}</span>
        <button className={`btn btn-outline-secondary py-0`} style={{float: "right"}}><i className={`bi bi-three-dots`}></i></button><br />
       {name} {icon[type]}
      </div>
    </div>
  );
}

export function SubLesson({lesson}) {
  const name = lesson.name;
  const teacherName = lesson.teacherName;
  const startTime = new Date(lesson.startTime);
  const duration = lesson.duration;
  const type = lesson.type;
  const endTime = new Date(getEndTime(startTime, duration));

  if(startTime.getTime() > new Date().getTime()) {
    return(
      <div className={`card mb-3`}>
        <div className='card-body'>
          <span className='fw-bold'>{WEEKDAYS[startTime.getDay()]}, {MONTHS[startTime.getMonth()]} {startTime.getDate()}, {printTime(startTime)} - {printTime(endTime)} {timeWarning(startTime, duration)}</span>
          <button className={`btn btn-success py-0`} style={{float: "right"}}><i className={`bi bi-check2`}></i></button><br />
          {name} {icon[type]} <span class="badge bg-danger">{teacherName}</span>
        </div>
      </div>
    );
  }
}

export function Event({lesson}) {
  const name = lesson.name;
  const startTime = new Date(lesson.startTime);
  const duration = lesson.duration;
  const type = lesson.type;
  const endTime = new Date(getEndTime(startTime, duration));

  return(
    <div className={`card mb-3`}>
      <div className={`card-body ${lessonStatus(startTime, duration)}`}>
        <span className='fw-bold'>{printTime(startTime)} - {printTime(endTime)} {timeWarning(startTime, duration)}</span>
        <button className={`btn btn-outline-secondary py-0`} style={{float: "right"}}><i className={`bi bi-three-dots`}></i></button><br />
        {name} {icon[type]}
      </div>
    </div>
  );
}

function getEndTime(startTime, duration) {
  let min = startTime.getMinutes() + duration;
  let hour = startTime.getHours() + Math.floor(min / 60);
  min %= 60;

  return `${startTime.getFullYear()}-${("0" + (startTime.getMonth()+1)).slice(-2)}-${startTime.getDate()}T${hour}:${("0" + min).slice(-2)}`;
}

function printTime(time) {
  return `${time.getHours() % 12 > 0 ? time.getHours() % 12 : '12'}:${("0" + time.getMinutes()).slice(-2)}${Math.floor(time.getHours() / 12) == 0 ? 'AM' : 'PM'}`;
}

function getTimeRemaining(startTime) {
  const time2 = new Date();
  return ((startTime.getHours() * 60) + startTime.getMinutes()) - ((time2.getHours() * 60) + time2.getMinutes());
}

function timeWarning(startTime, duration) {
  const timeRemaining = getTimeRemaining(startTime);
  if(timeRemaining > 0 && timeRemaining <= 30)
    return <span class="badge bg-warning">In {timeRemaining} Minutes</span>;
  if(timeRemaining < 0 && timeRemaining * -1 < duration)
    return <span class="badge bg-success">In Progress</span>;
}

function lessonStatus(startTime, duration) {
  const now = new Date();
  const endTime = new Date(getEndTime(startTime, duration));
  if(now.getTime() > endTime.getTime())
    return 'bg-expired';
}

function getTimeDifference(time1, time2) {
  return ((time1.hour * 60) + time1.min) - ((time2.hour * 60) + time2.min);
}