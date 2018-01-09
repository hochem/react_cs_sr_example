import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import Error404 from '../error/Error404';

import AccountOverview from './AccountOverview';
import AccountPersonalData from './AccountPersonalData';

const AccountRoutes = ({location}) => (
  <Switch location={location}>
      <Route exact path="/account" component={AccountOverview} />
      <Route exact path="/account/personaldata" component={AccountPersonalData} />
      <Route path="*" component={Error404} />
  </Switch>
);

AccountRoutes.propTypes = {
  location: PropTypes.object
};

export default AccountRoutes;
