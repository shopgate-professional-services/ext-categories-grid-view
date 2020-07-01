import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Section } from '@shopgate/engage/a11y';
import { useWidgetSettings } from '@shopgate/engage/core';
import { getCategoryChildCount, getCategoryChildren, getRootCategories } from '@shopgate/engage/category';
import Grid from '../../components/Grid';
import CategoryCard from '../../components/CategoryCard';
import CategoryCardPlaceholder from '../../components/CategoryCardPlaceholder';

/**
 * @returns {JSX}
 */
const CategoryList = ({ categories, categoriesCount }) => {
  const { columns = 2 } = useWidgetSettings('@shopgate/engage/product/ProductGrid') || {};
  if (!categories) {
    if (categoriesCount === 0) {
      // Category  has no children
      return null;
    }

    return (
      <Grid columns={columns}>
        {[...Array(categoriesCount).fill(0).map((_, i) => i)].map(val => (
          <CategoryCardPlaceholder key={`placeholder-${val}`} />
        ))}
      </Grid>
    );
  }

  return (
    <Section title="category.sections.categories">
      <Grid columns={columns}>
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Grid>
    </Section>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape()),
  categoriesCount: PropTypes.number,
};

CategoryList.defaultProps = {
  categories: null,
  categoriesCount: null,
};

export default connect((state, { categoryId }) => ({
  categories: categoryId
    ? getCategoryChildren(state, { categoryId })
    : getRootCategories(state),
  categoriesCount: categoryId
    ? getCategoryChildCount(state, { categoryId })
    : 4,
}))(CategoryList);
