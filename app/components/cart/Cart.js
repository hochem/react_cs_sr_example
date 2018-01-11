import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withJob} from 'react-jobs';
import getCartAction from '../../actions/cart/getCartAction';
import get from 'lodash/get';

class Cart extends React.Component {
  render() {
    const products = get(this, 'props.cart.products');

    return (
      <div>
        <h3>Your current cart</h3>
        {products && (
          <ul>
            {
              products.map(({id, name, price, amount}) => (
                <li key={id}>
                  Name: {name}<br/>
                  Price: {price}<br/>
                  Amount: {amount}
                </li>
              ))
            }
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = {
  getCartAction
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withJob({
      work: ({getCartAction}) => {
          return getCartAction();
      }
  })
)(Cart);
