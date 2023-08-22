import React from 'react';

export default function NavigationItem(props) {
  return(
    <a className="nav-link" href={props.path}><i class={`bi bi-${props.icon}`}></i> {props.name}</a>
  );
}