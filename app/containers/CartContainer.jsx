import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getProductsInCart } from '../selectors/index';
import { fetchProducts } from '../actions/products';
import { fetchUserCart } from '../actions/cart';
import AppPropTypes from '../lib/AppPropTypes';

class Cart extends Component {
  static propTypes = {
    products: AppPropTypes.products,
    actions: PropTypes.shape({
      fetchProducts: PropTypes.func.isRequired,
      fetchUserCart: PropTypes.func.isRequired,
    }),
  }

  static defaultProps = {
    products: [],
    actions: {},
  }

  constructor(props) {
    super(props);
    const { actions } = this.props;
    actions.fetchProducts()
      .then(() => actions.fetchUserCart());
  }

  render() {
    const { products } = this.props;

    return (
      <ul className="cart-container">
        {products.length > 0 && products.map((product) => {
          const imgSrc = require(`../assets/images/${product.image}`);

          return (
            <li className="cart-item">
              <figure>
                <img src={imgSrc.default} alt={`product ${product.image}`} />
                <figcaption>{product.name}</figcaption>
              </figure>
              <p>{product.price}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: getProductsInCart(state),
  };
}

function mapDispatchToProps(dispatch) {
  const actionCreators = {
    fetchProducts,
    fetchUserCart,
  };

  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
