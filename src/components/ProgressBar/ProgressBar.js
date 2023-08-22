import React from 'react';

export default function ProgressBar(params) {
  return(
    <div>
    <span className='fw-bold'>{params.title}</span>
    <span style={{float: "right"}}>{params.percentage}%</span>
    <div className="progress mb-2" role="progressbar" ariaLabel="Basic example" ariaValuenow={params.percentage} ariaValuemin="0" ariaValuemax="100">
        <div className="progress-bar bg-info" style={{width: `${params.percentage}%`}}></div>
    </div>
    </div>
  );
}