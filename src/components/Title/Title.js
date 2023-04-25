import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';
import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <div className='Title'>
      <header>
        <h1>SFPOPOS</h1>
        <h2><div className='Title-Subtitle' aria-label='Navigation & Title site'>San Francisco Privately Owned Public Open Spaces</div></h2>

        <nav className='navBar' role='navigation'>
          <NavLink 
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
            to="/">List</NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
            to="/about">About</NavLink>
          <RandomSpace />
        </nav>
      </header>
  </div>
  )
}

export default Title;