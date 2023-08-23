import React from 'react';

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
      <div className='card-body'>
        <span className='fw-semibold'>{printTime(startTime)} - {printTime(endTime)} {timeWarning(next, startTime, duration)}</span>
        <button className={`btn ${sub && 'btn-success'} py-0`} style={{float: "right"}}><i className={`bi bi-${sub ? 'check2' : 'three-dots'}`}></i></button><br />
        <strong className="card-title">{name}</strong> <span>{icon[type]}</span>
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

function timeWarning(next, startTime, duration) {
  const date = new Date();
  const currentTime = {
    hour: date.getHours(),
    min: date.getMinutes()
  }
  const timeRemaining = compareTime(startTime, currentTime);
  if(next && timeRemaining > 0 && timeRemaining <= 30)
    return <span class="badge bg-warning">In {timeRemaining} Minutes</span>;
  if(next && timeRemaining < 0 && timeRemaining * -1 <= duration)
    return <span class="badge bg-success">In Progress</span>;
}

function compareTime(time1, time2) {
  return ((time1.hour * 60) + time1.min) - ((time2.hour * 60) + time2.min);
}