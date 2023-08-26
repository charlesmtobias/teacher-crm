import React from 'react';
import './ProgressBar.scss';

export default function ProgressBar(props) {
  return(
    <div>
      <div className="progress" data-percentage={props.percentage}>
        <span className="progress-left">
          <span className="progress-bar"></span>
        </span>
        <span className="progress-right">
          <span className="progress-bar"></span>
        </span>
        <div className="progress-value">
            {props.percentage}%
        </div>
      </div>
      <p className='text-center mb-0 fw-semibold'>{props.title}</p>
    </div>
  );
}