import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {AsyncComponentProvider} from 'react-async-component';
import {JobProvider} from 'react-jobs';
import asyncBootstrapper from 'react-async-bootstrapper';

import configureStore from './store/configureStore';
import Routes from './routes';

const mountNode = document.getElementById('app');

const rehydrateStoreState = window.STORE_STATE;
const rehydrateAsyncComponentState = window.ASYNC_COMPONENTS_STATE;
const rehydrateJobState = window.JOBS_STATE;

const store = configureStore(rehydrateStoreState);

const app = (
  <AsyncComponentProvider rehydrateState={rehydrateAsyncComponentState}>
    <JobProvider rehydrateState={rehydrateJobState}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </JobProvider>
  </AsyncComponentProvider>
);

asyncBootstrapper(app).then(() => {
  render(app, mountNode);
});
