import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import Error404 from './pages/error/Error404';
import asyncComponentFactory from './utils/asyncutils';

const AsyncLandingPage = asyncComponentFactory(() =>
  System.import(/* webpackChunkName: "landing" */ './pages/Landing')
);

const AsyncAccountRoutes = asyncComponentFactory(() =>
  System.import(/* webpackChunkName: "account" */ './pages/account/AccountRoutes')
);

export default function Routes({history, location}) {
  return (
    <Switch location={location}>
      <Route exact path="/" component={AsyncLandingPage} />
      <Route path="/account" component={AsyncAccountRoutes} />
      <Route path="**/*" component={Error404} />
    </Switch>
  );
}