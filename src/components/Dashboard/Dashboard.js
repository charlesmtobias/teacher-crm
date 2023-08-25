import React from 'react';
import LessonList from '../LessonList/LessonList'
import Lesson from '../Lesson/Lesson';
import ProgressBar from '../ProgressBar/ProgressBar';
import Calendar from '../Calendar/Calendar';
import './Dashboard.css';

const startDate = new Date("08/12/2023")
const recitalDate = new Date("12/01/2023");
const today = new Date();

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
                  <LessonList type="sub" />
                </div>
              </div>
            </div>
            <div className='col-lg-6 recital'>
              <h5 className='fw-semibold'>Recital</h5>
              <div className='card mb-3'>
                <div className='card-body'>
                <div class="alert alert-warning" role="alert">
                  {parseDaysUntilRecital(today)} away!
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col' style={{height: "100%"}}>
          <div className='card mb-3'>
              <div className='card-body'>
                <div className='row mb-3 align-items-center'>
                  <div className='col-auto'>
                    <img src={require('../../images/profpic1.jpg')} className='me-2' style={{width: "115px", borderRadius: "50%" }} />
                  </div>

                  <div className='col'>
                    <div className='row'>
                      <h4 className="fw-semibold">Charles Tobias</h4><br />
                    </div>
                    <div className='row justify-content-center'>
                      <div className='col px-0'>
                        <ProgressBar title="Today" percentage="47" />
                      </div>
                      <div className='col px-0'>
                        <ProgressBar title="Week" percentage={Math.floor((today.getDay() / 7) * 100)} />
                      </div>
                      <div className='col px-0'>
                        <ProgressBar title="Semester" percentage={100 - Math.floor((getDateDifference(today, recitalDate) / getDateDifference(startDate, recitalDate)) * 100)} />
                      </div>
                    </div>
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

function getDateDifference(date1, date2) {
  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();
      
  // To calculate the no. of days between two dates
  var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

  return Difference_In_Days;
}

function parseDaysUntilRecital(today) {
  var Difference_In_Days = getDateDifference(today, recitalDate);
  if (Difference_In_Days < 7)
    return `${Difference_In_Days} days`;
  return `${Math.floor(Difference_In_Days / 7)} weeks`;
}

