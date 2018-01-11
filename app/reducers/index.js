import {combineReducers} from 'redux';
import cart from './cartReducer';
import product from './productReducer';

const rootReducer = combineReducers({
  cart,
  product
});

export default rootReducer;
