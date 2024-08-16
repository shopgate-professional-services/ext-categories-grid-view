import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'glamor';
import { fetchCategoryOrRootCategories as getCategoryAction, getCategoryChildren, getRootCategories } from '@shopgate/engage/category';
import { useWidgetSettings } from '@shopgate/engage/core';
import Grid from '../../components/Grid';
import CategoryCard from '../../components/CategoryCard';

const headline = css({
  margin: '12px 16px',
  textAlign: 'center',
  fontSize: 22,
});

/**
 * @returns {JSX}
 */
const CategoryListWidget = ({ settings, getCategory, categories }) => {
  useEffect(() => {
    if (!settings.categoryNumber) {
      return;
    }
    getCategory(settings.categoryNumber);
  }, [settings, getCategory]);
  const { columns = 2 } = useWidgetSettings('@shopgate/engage/product/ProductGrid') || {};

  if (!categories || !categories.length) {
    return null;
  }

  return (
    <Fragment>
      {(settings.headline) && (
        <h2 className={headline}>{settings.headline}</h2>
      )}
      <Grid columns={columns}>
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Grid>
    </Fragment>
  );
};

CategoryListWidget.propTypes = {
  settings: PropTypes.shape().isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()),
  getCategory: PropTypes.func,
};

CategoryListWidget.defaultProps = {
  getCategory: () => {},
  categories: null,
};

/**
 * @param {Object} state .
 * @param {Object} props .
 * @returns {{categories: any}}
 */
const mapStateToProps = (state, props) => ({
  categories: props.settings.categoryNumber
    ? getCategoryChildren(state, { categoryId: props.settings.categoryNumber })
    : getRootCategories(state),
});

export default connect(
  mapStateToProps,
  { getCategory: getCategoryAction }
)(CategoryListWidget);

