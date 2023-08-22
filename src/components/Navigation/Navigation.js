import React from 'react';

export default function Lesson(props) {
  return(
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Legacy Music Studio</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className='navbar-nav'>
            <a className="nav-link active" href="/dashboard"><i class="bi bi-speedometer"></i> Dashboard</a>
            <a className="nav-link" href="/preferences"><i class="bi bi-gear"></i> Preferences</a>
            </div>
        </div>
        </div>
    </nav>
  );
}