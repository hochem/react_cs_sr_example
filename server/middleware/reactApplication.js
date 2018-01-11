import React from 'react';
import {renderToString} from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import {AsyncComponentProvider, createAsyncContext} from 'react-async-component';
import {JobProvider, createJobContext} from 'react-jobs';
import {Provider} from 'react-redux';
import asyncBootstrapper from 'react-async-bootstrapper';
import serialize from 'serialize-javascript';
import getClientBundleEntryAssets from './getClientBundleEntryAssets';

import Routes from '../../app/routes';
import configureStore from '../../app/store/configureStore';

const clientEntryAssets = getClientBundleEntryAssets();

export default function expressMiddleware(req, res, next) {
  const reactRouterContext = {};
  const asyncContext = createAsyncContext();
  const jobContext = createJobContext();
  const store = configureStore();

  const app = (
    <AsyncComponentProvider asyncContext={asyncContext}>
      <JobProvider jobContext={jobContext}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={reactRouterContext}>
            <Routes />
          </StaticRouter>
        </Provider>
      </JobProvider>
    </AsyncComponentProvider>
  );

  asyncBootstrapper(app).then(() => {
    const appString = renderToString(app);
    const asyncState = asyncContext.getState();
    const jobsState = jobContext.getState();
    const storeState = store.getState();

    const html = `
      <html>
        <head>
          <title>My App</title>
          <link href="${clientEntryAssets.client.css}" rel="stylesheet" type="text/css" />
        </head>
        <body>
          <div id="app">${appString}</div>
          <script type="text/javascript">
            window.STORE_STATE=${serialize(storeState)};
            window.ASYNC_COMPONENTS_STATE = ${serialize(asyncState)};
            window.JOBS_STATE = ${serialize(jobsState)};
          </script>
          <script type="text/javascript" src="${clientEntryAssets.vendor.js}"></script>
          <script type="text/javascript" src="${clientEntryAssets.client.js}"></script>
        </body>
      </html>`;

    res.send(html);
  });
}
