import './component-styles/header.css'

import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="main-header">
      
      <div className="logo-container">
        <div className="logo-ring"></div>
        <h1 className="logo">Complex</h1>
      </div>

      <nav>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/facilities">Facilities</NavLink></li>
          <li><NavLink to="/booking">Booking</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      
    </header>
  );
}