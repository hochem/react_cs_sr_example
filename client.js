import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {AsyncComponentProvider, createAsyncContext} from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';

import Routes from './app/routes';

const mountNode = document.getElementById('app');

const rehydrateState = window.ASYNC_COMPONENTS_STATE;

const app = (
  <AsyncComponentProvider rehydrateState={rehydrateState}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AsyncComponentProvider>
);

asyncBootstrapper(app).then(() => {
  ReactDOM.render(app, mountNode)
});
