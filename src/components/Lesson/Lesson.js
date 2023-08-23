import React from 'react';
import './Lesson.css';

export default function Lesson({lesson, next}) {
  const name = lesson.name;
  const startTime = lesson.startTime;
  const duration = lesson.duration;
  const type = lesson.type;
  const sub = lesson.sub;
  const endTime = getEndTime(startTime, duration);

  const icon = {
    guitar: '🎸',
    piano: '🎹',
    drums: '🥁',
    voice: '🎤',
    bass: '🎸',
    violin: '🎻',
    saxophone: '🎷'
  }
  return(
    <div className={`card mb-3`}>
      <div className={`card-body ${lessonStatus(startTime, duration)}`}>
        <span className='fw-bold'>{printTime(startTime)} - {printTime(endTime)} {timeWarning(startTime, duration)}</span>
        <button className={`btn ${sub ? 'btn-success' : 'btn-outline-secondary'} py-0`} style={{float: "right"}}><i className={`bi bi-${sub ? 'check2' : 'three-dots'}`}></i></button><br />
        <div className="card-title">{name} <span>{icon[type]}</span></div>
      </div>
    </div>
  );
}

function getEndTime(startTime, duration) {
  let min = startTime.min + duration;
  let hour = startTime.hour + Math.floor(min / 60);
  min %= 60;

  return {hour: hour, min: min};
}

function printTime(time) {
  return `${time.hour % 12 > 0 ? time.hour % 12 : '12'}:${("0" + time.min).slice(-2)}${Math.floor(time.hour / 12) == 0 ? 'AM' : 'PM'}`;
}

function getTimeRemaining(startTime) {
  const date = new Date();
  const currentTime = {
    hour: date.getHours(),
    min: date.getMinutes()
  }
  return compareTime(startTime, currentTime)
}

function timeWarning(startTime, duration) {
  const timeRemaining = getTimeRemaining(startTime);
  if(timeRemaining > 0 && timeRemaining <= 30)
    return <span class="badge bg-warning">In {timeRemaining} Minutes</span>;
  if(timeRemaining < 0 && timeRemaining * -1 < duration)
    return <span class="badge bg-success">In Progress</span>;
}

function lessonStatus(startTime, duration) {
  const timeRemaining = getTimeRemaining(startTime);
  if(timeRemaining < 0 && timeRemaining * -1 > duration)
    return 'bg-expired';
}

function compareTime(time1, time2) {
  return ((time1.hour * 60) + time1.min) - ((time2.hour * 60) + time2.min);
}