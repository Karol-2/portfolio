import * as React from 'react';
import "./NavBar.scss"


export function NavBar () {
  return (
    <nav className='nav-bar'>
      <ul>
        <li className='nav-element'>Home</li>
        <li className='nav-element'>Education</li>
        <li className='nav-element'>Projects</li>
        <li className='nav-element'> About Me</li>
      </ul>
    </nav>
  );
}
