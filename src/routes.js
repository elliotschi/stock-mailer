import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import LandingContainer from './containers/Landing';
import Success from './containers/Success';

export default (
  <Router path="/" component={Main}>
    <IndexRoute component={LandingContainer} />
    <Route path="/success" component={Success} />
  </Router>  
);
