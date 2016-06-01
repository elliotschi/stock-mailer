import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import LandingContainer from './containers/Landing';

export default (
  <Router path="/" component={Main}>
    <IndexRoute component={LandingContainer} />
  </Router>  
);

//    <Route path="/sent" component={} />