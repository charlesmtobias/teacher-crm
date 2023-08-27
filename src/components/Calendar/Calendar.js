import React, {useState} from 'react';
import './Calendar.css';
import { getActiveElement } from '@testing-library/user-event/dist/utils';

export default function Calendar() {
    const [active, setActive] = useState(getCurrentDayOfWeek());
    const FIRST_DATE = getFirstDateThisWeek();
    const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    let calendar = [];
    let newDate = new Date();

    function handleClick(event, i) {
        setActive(i);
    }

    for (let i = 0; i < 7; i++) {
        calendar.push(<div className='col px-0'>
                        <h6 className='fw-bold'>{DAYS_OF_THE_WEEK[i]}</h6>
                        <button id={i} className={`btn btn-cal fw-semibold ${active == i ? 'active' : ''}`} onClick={(event) => handleClick(event, i)}>{("0" + newDate.getDate()).slice(-2)}</button>
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