import {GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR} from '../actions/product/getProductAction';

const product = (state = null, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return action.data
    case GET_PRODUCT_ERROR:
      return null
    default:
      return state
  }
};

export default product;
