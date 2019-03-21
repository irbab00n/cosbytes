import React from 'react';
import { isMobile } from 'react-device-detect';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <header className="navbar-wrapper cosbytes-background">
        <div className="navbar-inner-wrapper">
          <div className="logo"><a href="/">COSBYTES</a></div>
          <ul className="links">
            <li>
              <a href="/projects"><i className="fas fa-laptop-code"></i>&nbsp;{isMobile ? '' : 'Projects'}</a>
            </li>
            <li>
              <a href="/blog"><i className="fas fa-blog"></i>&nbsp;{isMobile ? '' : 'Blog'}</a>
            </li>
          </ul>
        </div>
      </header>

    );

  }
}

export default Navbar;