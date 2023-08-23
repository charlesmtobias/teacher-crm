import React from 'react';
import './ProgressBar.scss';

export default function ProgressBar(props) {
  return(
    <div>
      <div class="progress" data-percentage={props.percentage}>
        <span class="progress-left">
          <span class="progress-bar"></span>
        </span>
        <span class="progress-right">
          <span class="progress-bar"></span>
        </span>
        <div class="progress-value">
            {props.percentage}%
        </div>
      </div>
      <p className='text-center mb-0 fw-semibold'>{props.title}</p>
    </div>
  );
}