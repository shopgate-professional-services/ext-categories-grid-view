import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import {
  Grid, Image, Link, PlaceholderIcon,
} from '@shopgate/engage/components';
import { getCategoryRoute } from '@shopgate/engage/category';
import { showCategoriesImages, gridCardStyles } from '../../config';

const styles = {
  card: css({
    background: themeConfig.colors.light,
    border: `1px solid ${themeConfig.colors.shade7}`,
  }, gridCardStyles).toString(),
  name: css({
    padding: themeConfig.variables.gap.small,
    textAlign: 'center',
    fontSize: '0.85rem',
    fontWeight: 700,
  }),
  placeholderIcon: css({
    width: '100%',
    height: '100%',
    color: themeConfig.colors.placeholder,
  }).toString(),
};

/**
 * @returns {JSX}
 */
const CategoryCard = ({ category }) => (
  <Grid.Item className={styles.card}>
    <Link
      href={getCategoryRoute(category.id)}
      state={{ title: category.name }}
    >
      {showCategoriesImages && (
        <Fragment>
          {!category.imageUrl && (
            <div>
              <PlaceholderIcon className={styles.placeholderIcon} />
            </div>
          )}
          {category.imageUrl && <Image src={category.imageUrl} />}
        </Fragment>
      )}
      <div className={styles.name}>
        {category.name}
      </div>
    </Link>
  </Grid.Item>
);

CategoryCard.propTypes = {
  category: PropTypes.shape().isRequired,
};

export default CategoryCard;
