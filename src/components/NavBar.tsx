import * as React from 'react';
import "./NavBar.scss"


export function NavBar () {
  return (
    <nav>
      <ul>
        <li className='nav-element'>Home</li>
        <li className='nav-element'>Education</li>
        <li className='nav-element'>Projects</li>
      </ul>
    </nav>
  );
}
