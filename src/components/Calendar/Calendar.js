import React from 'react';
import './Calendar.css';

export default function Calendar() {
    const FIRST_DATE = getFirstDateThisWeek();
    const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    let calendar = [];
    let newDate = new Date();
    for (let i = 0; i < 7; i++) {
        console.log(newDate.getDate());
        calendar.push(<div className='col px-0'>
                        <h6 className='fw-bold'>{DAYS_OF_THE_WEEK[i]}</h6>
                        <button id={i} className={`btn btn-cal fw-semibold ${getCurrentDayOfWeek() == i ? 'active' : ''}`}>{("0" + newDate.getDate()).slice(-2)}</button>
                    </div>);
        newDate.setDate(newDate.getDate() + 1);
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

    var firstday = new Date(curr.setDate(first));
    return firstday;
}

function getCurrentDayOfWeek() {
    var curr = new Date;
    return curr.getDay();
}