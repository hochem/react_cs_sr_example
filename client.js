import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Routes from './app/routes';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  mountNode
);