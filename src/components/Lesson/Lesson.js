import React from 'react';

export default function Lesson({startTime, duration, next, name}) {
  const endTime = getEndTime(startTime, duration);
  return(
    <div className={`card mb-3`}>
        <div className='card-header'>
            <strong>{printTime(startTime)} - {printTime(endTime)} {timeWarning(next, startTime)}</strong>
        </div>
        <div className='card-body'>
            <strong className="card-title">{name}</strong><button className='btn py-0' style={{float: "right"}}><i className="bi bi-three-dots"></i></button>
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

function timeWarning(next, startTime) {
  const date = new Date();
  const currentTime = {
    hour: date.getHours(),
    min: date.getMinutes()
  }
  const timeRemaining = compareTime(startTime, currentTime);
  if(next && timeRemaining > 0)
    return <span class="badge bg-warning">In {timeRemaining} Minutes</span>;
  if(next && timeRemaining < 0)
    return <span class="badge bg-success">In Progress</span>;
}

function compareTime(time1, time2) {
  return ((time1.hour * 60) + time1.min) - ((time2.hour * 60) + time2.min);
}