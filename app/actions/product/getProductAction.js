export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

export default (productId) => dispatch => {
  return fetch(`http://0.0.0.0:5000/api/v1/product/${productId}`)
    .then(resp => resp.json())
    .then(data => dispatch({
      type: GET_PRODUCT_SUCCESS,
      data
    }))
    .catch(error => dispatch({
      type: GET_PRODUCT_ERROR
    }))
}
