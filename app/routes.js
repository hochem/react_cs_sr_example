import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import LandingPage from './pages/Landing';
import AccountOverview from './pages/account/AccountOverview';
import AccountPersonalData from './pages/account/AccountPersonalData';

export default function Routes({history, location}) {
  return (
    <Switch location={location}>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/account" component={AccountOverview} />
      <Route exact path="/account/personaldata" component={AccountPersonalData} />
    </Switch>
  );
}