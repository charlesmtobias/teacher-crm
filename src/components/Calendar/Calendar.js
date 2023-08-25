import React from 'react';
import './Calendar.css';

export default function Calendar() {
    const FIRST_DATE = getFirstDateThisWeek();
    const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    let calendar = [];

    for (let i = 0; i < 7; i++) {
        calendar.push(<div className='col pe-0'>
                        <h6 className='fw-bold'>{DAYS_OF_THE_WEEK[i]}</h6>
                        <button id={i} className={`btn btn-cal fw-semibold ${getCurrentDayOfWeek() == i ? 'active' : ''}`}>{FIRST_DATE + i}</button>
                    </div>);
    }
    
    return(
        <div className='row text-center mb-3'>
            {calendar}
        </div>
    );

}

function getFirstDateThisWeek() {
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

    var firstday = new Date(curr.setDate(first)).getDate();
    return firstday;
}

function getCurrentDayOfWeek() {
    var curr = new Date;
    return curr.getDay();
}