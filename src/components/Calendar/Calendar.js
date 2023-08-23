import React from 'react';
import './Calendar.css';

export default function Calendar({startTime, duration, next, name}) {
    return(
        <div className='row text-center mb-3'>
            <div className='col pe-0'>
                <h6 className='fw-bold'>S</h6>
                <button className='btn btn-cal fw-semibold'>20</button>
            </div>
            <div className='col px-0'>
                <h6 className='fw-bold'>M</h6>
                <button className='btn btn-cal fw-semibold'>21</button>
            </div>
            <div className='col px-0'>
                <h6 className='fw-bold'>T</h6>
                <button className='btn btn-cal fw-semibold active'>22</button>
            </div>
            <div className='col px-0'>
                <h6 className='fw-bold'>W</h6>
                <button className='btn btn-cal fw-semibold'>23</button>
            </div>
            <div className='col px-0'>
                <h6 className='fw-bold'>T</h6>
                <button className='btn btn-cal fw-semibold'>24</button>
            </div>
            <div className='col px-0'>
                <h6 className='fw-bold'>F</h6>
                <button className='btn btn-cal fw-semibold'>25</button>
            </div>
            <div className='col ps-0'>
                <h6 className='fw-bold'>S</h6>
                <button className='btn btn-cal fw-semibold'>26</button>
            </div>
        </div>
    );

}