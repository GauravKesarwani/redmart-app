import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Checkbox from './Checkbox';
import AppPropTypes from '../lib/AppPropTypes';

class SideNav extends Component {
  static propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    filters: AppPropTypes.filters.isRequired,
  }

  render() {
    const { handleFilterChange, filters } = this.props;

    return (
      <div className="side-nav">
        {filters.map((filter) => {
          return (
            <Fragment key={filter.name}>
              <div className="filter-title">{filter.name}</div>
              <div className="filter-section">{filter.values.map(value => (
                <Checkbox
                  toggleInput={this.toggleInput}
                  filterCategory={filter.name}
                  key={value}
                  label={value}
                  handleFilterChange={handleFilterChange}
                />))}
              </div>
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default SideNav;
