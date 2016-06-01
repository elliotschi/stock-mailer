import React from 'react';

const NavBar = props => (
  <nav className="green">
    <div className="row">
      <a href="/" className="brand-logo center">stock mailer</a>
      
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li> <a href="https://www.github.com/elliotschi/stock-mailer">source</a></li>
      </ul>

    </div>
  </nav>
);
  
export default NavBar;