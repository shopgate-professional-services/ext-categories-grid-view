import React from 'react';
import PropTypes from 'prop-types';

/**
 * @params {string[]} productIds Product id collection.
 * @params {bool} showMore Whether to show more button (products.length > totalCount)
 * @returns {JSX}
 */
const CategoryListWidget = (props) => {
  console.warn('@@ CategoryListWidget @', props);
  return null;
};

CategoryListWidget.propTypes = {
  settings: PropTypes.shape().isRequired,
  getCategory: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape()),
};

CategoryListWidget.defaultProps = {
  getCategory: () => {},
  items: null,
};

export default CategoryListWidget;

