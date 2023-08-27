import React, { useEffect, useState } from 'react';
import LessonList from '../LessonList/LessonList'
import {Lesson} from '../Lesson/Lesson';
import ProgressBar from '../ProgressBar/ProgressBar';
import Calendar from '../Calendar/Calendar';
import Resources from '../Resources/Resources';
import './Dashboard.css';

const startDate = new Date("08/12/2023")
const recitalDate = new Date("12/01/2023");
const today = new Date();
const MY_ID = 1;

//ORDER BY hour DESC, min

const todaysEvents = [{
  name: 'Adult Guitar Class',
  startTime: '2023-08-25T19:00',
  duration: 120,
  type: 'guitar'
}];

export default function Dashboard() {
  
  const [teacher, setTeacher] = useState({});
  const [lessons, setLessons] = useState([]);
  const [nextLesson, setNextLesson] = useState({});
  const [subLessons, setSubLessons] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/teachers/${MY_ID}`).then(response => {
      response.json().then(jsonResponse => {
        const teacher = jsonResponse.teacher;
        return setTeacher(teacher);
      });
    });

    fetch(`http://localhost:4000/api/teachers/${MY_ID}/lessons`).then(response => {
      response.json().then(jsonResponse => {
        const lessons = jsonResponse.lessons;
        setLessons(lessons);
      });
    });

    fetch(`http://localhost:4000/api/teachers/${MY_ID}/next_lesson`).then(response => {
      response.json().then(jsonResponse => {
        const lesson = jsonResponse.lesson;
        setNextLesson(lesson);
      });
    });
  }, []);

  return(
    <div className='mt-3'>
      <div className='row'>
        <div className='col-xl-8 col-lg-7 col-md-6 mb-3'>
          <div className='row'>
            <div className='col-lg-6 next-lesson'>
              <div>
                <h5 className="fw-semibold">Next Lesson</h5>
                {nextLesson ? <Lesson lesson={nextLesson} /> : 
                  <div className={`card mb-3`}>
                    <div className={`card-body`}>
                      <span className='fw-bold'>No Upcoming Lessons</span>
                    </div>
                  </div>
                }
              </div>
              <div className='todays-events'>
                <h5 className="fw-semibold">Today's Events</h5>
                <LessonList list={todaysEvents} type="event" />
              </div>
            </div>
            <div className='col-lg-6 resources'>
              <h5 className='fw-semibold'>Resources</h5>
              <Resources />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 sub-board'>
              <h5 className='fw-semibold'>Sub Board</h5>
              <div className='card mb-3'>
                <div className='card-body'>
                  {subLessons.length > 0 ? <LessonList list={subLessons} type="sub" /> : <span className='fw-bold'>No Subs Needed</span>}
                </div>
              </div>
            </div>
            <div className='col-lg-6 recital'>
              <h5 className='fw-semibold'>Recital</h5>
              <div className='card mb-3'>
                <div className='card-body'>
                <div className="alert alert-warning" role="alert">
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
                  <div className='col-auto pe-0'>
                    <img src={teacher.profile_picture_url || `https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.668xw:1.00xh;0.119xw,0&resize=1200:*`} className='rounded' style={{width: "115px" }} />
                  </div>

                  <div className='col'>
                    <div className='row'>
                      <h4 className="fw-semibold">{teacher.name}</h4><br />
                    </div>
                    <div className='row justify-content-center'>
                      <div className='col px-0'>
                        <ProgressBar title="Today" percentage="47" />
                      </div>
                      <div className='col px-0'>
                        <ProgressBar title="Week" percentage={Math.floor((today.getDay() / 7) * 100)} />
                      </div>
                      <div className='col ps-0'>
                        <ProgressBar title="Semester" percentage={100 - Math.floor((getDateDifference(today, recitalDate) / getDateDifference(startDate, recitalDate)) * 100)} />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <Calendar />
                <LessonList list={lessons} type="lesson" />
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

