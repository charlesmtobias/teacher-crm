import React from 'react';

export default function Lesson(props) {
  return(
    <div className={`card mb-3 ${props.bg}`}>
        <div className='card-header'>
            <strong>{props.startTime} - {props.endTime} {props.next ? <span class="badge bg-danger">In 10 Minutes</span> : ''}</strong>
        </div>
        <div className='card-body'>
            <strong className="card-title">{props.name}</strong>
        </div>
    </div>
  );
}