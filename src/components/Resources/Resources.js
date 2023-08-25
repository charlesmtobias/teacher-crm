import React from "react";

let recitalDate = new Date("12/01/2023");

export default function Resources() {
    return (
        <div className='card mb-3'>
            <div className='card-body'></div>
        </div>
    );
}

export function getRecitalDate() {
    return recitalDate;
}