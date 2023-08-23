import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';

export default function Navigation(props) {
  return(
    <nav className="navbar navbar-expand-lg" style={{borderBottom: "1px solid rgba(0, 0, 0, 0.175)"}}>
        <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Legacy Music Studio</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className='navbar-nav'>
                <NavigationItem path="/dashboard" icon="speedometer" name="Dashboard" />
                <NavigationItem path="/calendar" icon="calendar-date" name="Calendar" />
                <NavigationItem path="/recital" icon="music-note-list" name="Recital" />
                <NavigationItem path="/settings" icon="gear" name="Settings" />
            </div>
        </div>
        </div>
    </nav>
  );
}