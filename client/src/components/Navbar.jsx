import React from 'react';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar-wrapper cosbytes-background">
    <div className="navbar-inner-wrapper">
      <div className="logo"><a href="/">COSBYTES</a></div>
      <ul className="links">
        <li>
          <Link to="/projects"><i className="fas fa-laptop-code"></i>&nbsp;{isMobile ? '' : 'Projects'}</Link>
        </li>
        <li>
          <Link to="/blog"><i className="fas fa-blog"></i>&nbsp;{isMobile ? '' : 'Blog'}</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Navbar;