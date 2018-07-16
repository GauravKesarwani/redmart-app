import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    filterCategory: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }

  toggleInputChange = () => {
    const { label, filterCategory, handleFilterChange } = this.props;

    const { isChecked } = this.state;

    this.setState({
      isChecked: !isChecked,
    });

    handleFilterChange(filterCategory, label, !isChecked);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="filter-item">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={this.toggleInputChange}
        />
        <span>{label}</span>
      </div>
    );
  }
}

export default Checkbox;
