import React from 'react';

export default function Lesson(props) {
  return(
    <div className="card mb-3">
        <div className='card-header'>
            <strong>{props.startTime} - {props.endTime}</strong>
        </div>
        <div className='card-body'>
            <h5 className="card-title">{props.name}</h5>
        </div>
    </div>
  );
}