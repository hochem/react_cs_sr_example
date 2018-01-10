import React from 'react';
import {renderToString} from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import {AsyncComponentProvider, createAsyncContext} from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import serialize from 'serialize-javascript';
import getClientBundleEntryAssets from './getClientBundleEntryAssets';

import Routes from '../../app/routes';

const clientEntryAssets = getClientBundleEntryAssets();

export default function expressMiddleware(req, res, next) {
  const asyncContext = createAsyncContext();
  const reactRouterContext = {};

  const app = (
    <AsyncComponentProvider asyncContext={asyncContext}>
      <StaticRouter location={req.url} context={reactRouterContext}>
        <Routes />
      </StaticRouter>
    </AsyncComponentProvider>
  );

  asyncBootstrapper(app).then(() => {
    const appString = renderToString(app);
    const asyncState = asyncContext.getState();

    const html = `
      <html>
        <head>
          <title>My App</title>
          <link href="${clientEntryAssets.client.css}" rel="stylesheet" type="text/css" />
        </head>
        <body>
          <div id="app">${appString}</div>
          <script type="text/javascript">
            window.ASYNC_COMPONENTS_STATE = ${serialize(asyncState)}
          </script>
          <script type="text/javascript" src="${clientEntryAssets.vendor.js}"></script>
          <script type="text/javascript" src="${clientEntryAssets.client.js}"></script>
        </body>
      </html>`;

    res.send(html);
  });
}
