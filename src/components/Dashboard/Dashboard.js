import React from 'react';
import LessonList from '../LessonList/LessonList'
import Lesson from '../Lesson/Lesson';
import ProgressBar from '../ProgressBar/ProgressBar';
import Calendar from '../Calendar/Calendar';
import './Dashboard.css';

export default function Dashboard() {
  const nextLesson = {
    name: 'Brad Prad',
    startTime: {hour: 12, min: 30},
    duration: 30,
    type: 'piano'
  }
  const todaysEvents = [{
    name: 'Adult Guitar Class',
    startTime: {hour: 19, min: 0},
    duration: 120,
    type: 'guitar'
  }]
  return(
    <div className='mt-3'>
      {/*<div className='row my-3'>
        <h2 className='fw-bold'>Hello Charles! 🤗</h2>
      </div>*/}
      <div className='row'>
        <div className='col-xl-8 col-lg-7 col-md-6 mb-3'>
          <div className='row'>
            <div className='col-lg-6 next-lesson'>
              <div>
                <h5 className="fw-semibold">Next Lesson</h5>
                <Lesson lesson={nextLesson} next="true" />
              </div>
              <div className='todays-events'>
                <h5 className="fw-semibold">Today's Events</h5>
                <Lesson lesson={todaysEvents[0]} next="true" />
              </div>
            </div>
            <div className='col-lg-6 resources'>
              <h5 className='fw-semibold'>Resources</h5>
              <div className='card mb-3'>
                <div className='card-body'></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 sub-board'>
              <h5 className='fw-semibold'>Sub Board</h5>
              <div className='card mb-3'>
                <div className='card-body'>
                  <LessonList />
                </div>
              </div>
            </div>
            <div className='col-lg-6 recital'>
              <h5 className='fw-semibold'>Recital</h5>
              <div className='card mb-3'>
                <div className='card-body'>
                  <strong>73 days away!</strong>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col' style={{height: "100%"}}>
          <div className='card mb-3'>
              <div className='card-body'>
                <div className='row align-items-center justify-content-center mb-3 text-center'>
                    <img src={require('../../images/profpic1.jpg')} className='me-2' style={{width: "128px", borderRadius: "50%" }} />
                    <span className="fw-bold">Charles Tobias</span>
                </div>
                <div className='row justify-content-center'>
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
                <hr />
                <Calendar />
                <LessonList />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}