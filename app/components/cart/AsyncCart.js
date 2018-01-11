import React from 'react';
import {asyncComponent} from 'react-async-component';

export default asyncComponent({
  resolve: () => import(/* webpackChunkName: "asynccart" */ './Cart'),
  LoadingComponent: () => <h2>Cart...</h2>,
  ErrorComponent: ({error}) => <div>{error.message}</div>,
  serverMode: 'defer'
});
