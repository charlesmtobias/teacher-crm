import React from 'react';

export default function NavigationItem(props) {
  return(
    <a className="nav-link" href={props.path}><i className={`bi bi-${props.icon}`}></i> {props.name}</a>
  );
}