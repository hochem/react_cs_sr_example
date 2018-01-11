import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withJob} from 'react-jobs';
import {Link} from 'react-router-dom';
import get from 'lodash/get';

import AsyncCart from '../../components/cart/AsyncCart';
import getProductAction from '../../actions/product/getProductAction';

class ProductDetailPage extends React.Component {
  render() {
    const product = get(this, 'props.product');

    return (
      <div>
        <h3>Product Details</h3>
        {!!product && (
          <div>
            Name: {product.name}<br/>
            Price: {product.price}<br/>
            Description: {product.description}
          </div>
        )}
        <br/>
        <AsyncCart />
        <br/>
        {!!product && <Link to={`/product/${Number(product.id) + 1}`}>Next product</Link>}
        <br/>
        <Link to="/">Back to front page</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product
});

const mapDispatchToProps = {
  getProductAction
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withJob({
    work: ({match, product, getProductAction}) => {
      const productId = get(match, 'params.productId');

      if (get(product, 'id') === productId) {
        return true;
      }

      return getProductAction(productId);
    },
    shouldWorkAgain: (prevProps, nextProps) => {
      const prevId = get(prevProps, 'match.params.productId');
      const nextId = get(nextProps, 'match.params.productId');
      return prevId !== nextId;
    }
  })
)(ProductDetailPage);

