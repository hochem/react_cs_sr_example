export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_ERROR = 'GET_CART_ERROR';

export default () => dispatch => {
  return fetch('http://0.0.0.0:5000/api/v1/cart')
    .then(resp => resp.json())
    .then(data => dispatch({
      type: GET_CART_SUCCESS,
      data
    }))
    .catch(error => dispatch({
      type: GET_CART_ERROR
    }))
}
