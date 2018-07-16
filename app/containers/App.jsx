import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Browse from '../components/Browse';
import Header from '../components/Header';
import Cart from './CartContainer';
import ProductDetail from '../components/ProductDetail';
import AppPropTypes from '../lib/AppPropTypes';

import { fetchProducts } from '../actions/products';
import { fetchFilters } from '../actions/filters';

import { addProductToCart } from '../actions/cart';

class HomePage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    products: AppPropTypes.products.isRequired,
    filters: AppPropTypes.filters.isRequired,
  }

  constructor(props) {
    super(props);
    const { actions } = this.props;
    actions.fetchProducts();
    actions.fetchFilters();
  }

  render() {
    const { products, actions, filters } = this.props;
    return (
      <Fragment>
        <Router>
          <div>
            <Route path="/" component={Header} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Browse
                    products={products}
                    filters={filters}
                    actions={actions}
                    {...props}
                  />)
                }
              />
              {products.length &&
                <Route path="/products/:id" render={() => <ProductDetail products={products} />} />}
              <Route path="/cart" render={() => <Cart />} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  const actionCreators = {
    fetchProducts,
    fetchFilters,
    addProductToCart,
  };

  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
