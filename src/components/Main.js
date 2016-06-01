import React from 'react';
import NavBar from './NavBar';

const Main = ({ children }) => (
  <div className="container-fluid">
    <NavBar />
    <div>
      {children}
    </div>
  </div>
);

export default Main;