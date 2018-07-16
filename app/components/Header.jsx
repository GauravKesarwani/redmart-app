import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    history: PropTypes.shape({}),
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      hash: PropTypes.string,
    }).isRequired,
  }

  static defaultProps = {
    history: {},
  }

  handleBrowseBtnClick = () => {
    const { history } = this.props;

    history.push('/');
  }

  handleCartBtnClick = () => {
    const { history } = this.props;

    history.push('/cart');
  }

  render() {
    const { location } = this.props;

    return (
      <div className="header">
        <div className="btn-group">
          {(location.pathname !== '/')
          && (
          <button
            type="button"
            className="btn browse-btn"
            onClick={this.handleBrowseBtnClick}
          >Browse
          </button>
          )}
          {location.pathname !== '/cart'
          && (
          <button
            type="button"
            className="btn cart-btn"
            onClick={this.handleCartBtnClick}
          >Cart
          </button>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
