import {GET_CART_SUCCESS, GET_CART_ERROR} from '../actions/cart/getCartAction';

const cart = (state = null, action) => {
  switch (action.type) {
    case GET_CART_SUCCESS:
      return action.data
    case GET_CART_ERROR:
      return null
    default:
      return state
  }
};

export default cart;
