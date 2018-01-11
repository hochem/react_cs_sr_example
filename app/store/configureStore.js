import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (rehydrateStoreState) => {
  const store = createStore(
    rootReducer,
    rehydrateStoreState,
    applyMiddleware(thunk)
  );

  return store;
}

export default configureStore;
