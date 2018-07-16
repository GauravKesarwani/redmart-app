import PropTypes from 'prop-types';

const products = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  desc: PropTypes.string,
  measurement: PropTypes.string,
  image: PropTypes.string,
}));

const filters = PropTypes.arrayOf({
  name: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
});

module.exports = {
  products,
  filters,
}
