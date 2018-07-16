import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

import '../assets/scss/main.scss';
class ProductDetail extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      desc: PropTypes.string,
      measurement: PropTypes.string,
      image: PropTypes.string,
    })),
    match: PropTypes.shape({
      url: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      params: PropTypes.object.isRequired,
    }),
  }

  static defaultProps = {
    match: {},
    products: [],
  }

  render() {
    const { match, products } = this.props;

    const product = products.length
      ? products.find(p => p.id === parseInt(match.params.id, 10)) : {};

    const imgSrc = require(`../assets/images/${product.image}`);
    return (
      <div className="product-detail">
        <figure className="img-section">
          <figcaption>{product.name}</figcaption>
          <img src={imgSrc.default} alt="" />
        </figure>
        <aside className="detail-section">
          <p className="measurement">{product.measurement}</p>
          <p className="price">{product.price}</p>
          <p className="description">{product.desc}</p>
        </aside>
      </div>

    );
  }
}

export default  withRouter(ProductDetail);
