import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { noop, uniq } from 'lodash';
import PropTypes from 'prop-types';
import SideNav from './SideNav';

import AppPropTypes from '../lib/AppPropTypes';

class BrowsePage extends Component {
  static propTypes = {
    products: AppPropTypes.products.isRequired,
    filters: AppPropTypes.filters.isRequired,
    history: PropTypes.shape({}).isRequired, // eslint-disable-line react/forbid-prop-types
    actions: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeFilters: {},
    };
  }

  getFilteredProducts = () => {
    const { activeFilters } = this.state;
    const { products } = this.props;

    let filteredProducts = [...products];
    Object.keys(activeFilters).forEach((filter) => {
      const filterValues = activeFilters[filter];

      let priceRangeValues = [];
      filteredProducts = filteredProducts.filter((product) => {
        let result = false;
        if (filter === 'brand') {
          result = filterValues.includes(product[filter]);
        } else if (filter === 'price') {
          filterValues.forEach((value) => {
            priceRangeValues = [...priceRangeValues, ...value.split('-')];
          });

          priceRangeValues = priceRangeValues.sort((a, b) => {
            return parseFloat(a) - parseFloat(b);
          });

          const productPrice = product[filter];

          priceRangeValues = uniq(priceRangeValues);
          result = ((productPrice > priceRangeValues[0])
            && (productPrice < priceRangeValues[priceRangeValues.length - 1]));
        }

        return result;
      });
    });

    return filteredProducts;
  }

  handleFilterChange = (filterCategory, label, isChecked) => {
    const { activeFilters } = this.state;

    const filtersClone = Object.assign({}, activeFilters);

    if (!activeFilters[filterCategory]) {
      filtersClone[filterCategory] = [];
    }

    if (isChecked) {
      filtersClone[filterCategory].push(label);
    } else {
      const i = filtersClone[filterCategory].indexOf(label);
      filtersClone[filterCategory].splice(i, 1);

      if (!filtersClone[filterCategory].length) {
        delete filtersClone[filterCategory];
      }
    }

    this.setState({
      activeFilters: filtersClone,
    });
  }

  handleImageClick = (id) => {
    const { history } = this.props;
    history.push(`/products/${id}`);
  }

  handleClick = (productId) => {
    const { actions } = this.props;
    actions.addProductToCart(productId);
  }

  render() {
    const { filters } = this.props;
    const filteredProducts = this.getFilteredProducts();

    return (
      <div id="browse-container">
        <SideNav filters={filters} handleFilterChange={this.handleFilterChange} />
        <ul className="browse-list-items">
          {filteredProducts && filteredProducts.map((product) => {
            const imgSrc = require(`../assets/images/${product.image}`);

            return (
              <li key={product.id} role="button" className="list-item">
                <div
                  className="item-detail"
                  role="presentation"
                  onClick={() => this.handleImageClick(product.id)}
                  onKeyDown={noop}
                >
                  <Link to="/productDetail">
                    <figure>
                      <img src={imgSrc.default} alt={`product ${product.image}`} />
                      <figcaption>{product.name}</figcaption>
                    </figure>
                    <p>{product.price}</p>
                  </Link>
                </div>
                <button className="add-cart-btn" type="button" onClick={() => this.handleClick(product.id)}>Add To Cart</button>
              </li>
            );
          })
          }
        </ul>
      </div>
    );
  }
}

export default BrowsePage;
