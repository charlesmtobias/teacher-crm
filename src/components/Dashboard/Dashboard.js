import React from 'react';
import LessonList from '../LessonList/LessonList'
import Lesson from '../Lesson/Lesson';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Dashboard.css';

export default function Dashboard() {
  return(
    <div>
      <div className='row my-3'>
        <h2 className='fw-bold'>Hello Charles! 🤗</h2>
      </div>
      <div className='row'>
        <div className='col-md-8'>
          <div className='card mb-3'>
            <div className="card-body">
              <h5>Progress</h5>
              <div className='row'>
                <div className='col'>
                  <ProgressBar title="Today" percentage="80" />
                </div>
                <div className='col'>
                  <ProgressBar title="Week" percentage="33" />
                </div>
                <div className='col'>
                  <ProgressBar title="Semester" percentage="14" />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <h5>Next Lesson</h5>
            <div className='col'>
              <Lesson name="Brad Clip" startTime={{hour: 16, min: 30}} duration={30} next="true" />
            </div>
          </div>
          <div className='row'>

          </div>
        </div>
        <div className='col overflow-auto' style={{height: "100%"}}>
          <div className={`card mb-3`}>
              <div className='card-body'>
                <div className='row align-items-center mb-3'>
                  <div className='col-md-auto'>
                    <img src={require('../../images/profpic1.jpg')} className='me-2' style={{width: "64px", borderRadius: "100%" }} />
                  </div>
                  <div className='col-md-auto gx-0'>
                    <span className="fw-bold">Charles Tobias</span>
                    <br />
                    <span className='fst-italic fw-light'>12 Students</span>
                  </div>
                </div>
                <hr />
                <LessonList title="Today's Schedule" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}