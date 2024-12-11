import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import {
  Grid, Image, Link, PlaceholderIcon,
} from '@shopgate/engage/components';
import { getCategoryRoute } from '@shopgate/engage/category';
import Ellipsis from '@shopgate/pwa-common/components/Ellipsis';
import {
  showCategoriesImages, gridCardStyles, categoriesImages, imageResolution,
} from '../../config';

const styles = {
  image: css({
    background: themeConfig.colors.light,
    border: `1px solid ${themeConfig.colors.shade7}`,
  }, gridCardStyles).toString(),
  name: css({
    color: themeConfig.colors.shade6,
    padding: themeConfig.variables.gap.small,
    textAlign: 'center',
    fontSize: '0.85rem',
    fontWeight: 700,
    textTransform: 'uppercase',
  }),
  placeholder: css({
    ...imageResolution && {
      position: 'relative',
      width: '100%',
      ':before': {
        display: 'block',
        content: '""',
        width: '100%',
        paddingTop: `${100 * (imageResolution.height / imageResolution.width).toFixed(3)}%`,
      },
    },
  }).toString(),
  placeholderIcon: css({
    width: '100%',
    height: '100%',
    color: themeConfig.colors.placeholder,
    ...imageResolution && {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  }).toString(),
  ellipsis: css({
    hyphens: 'auto',
  }).toString(),
};

/**
 * @returns {JSX}
 */
const CategoryCard = ({ category }) => {
  let { [category.id]: imageUrl } = categoriesImages || {};
  if (!imageUrl) {
    ({ imageUrl } = category);
  }

  return (
    <Grid.Item>
      <Link
        href={getCategoryRoute(category.id)}
        state={{ title: category.name }}
      >
        {showCategoriesImages && (
          <Fragment>
            <div className={styles.image}>
              {!imageUrl && (
                <div className={styles.placeholder}>
                  <PlaceholderIcon className={styles.placeholderIcon} />
                </div>
              )}
              {imageUrl && (
                <Image
                  src={imageUrl}
                  {...imageResolution && { resolutions: [imageResolution] }}
                />
              )}
            </div>
          </Fragment>
        )}
        <div className={styles.name}>
          <Ellipsis rows={3} className={styles.ellipsis}>
            {category.name}
          </Ellipsis>
        </div>
      </Link>
    </Grid.Item>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape().isRequired,
};

export default CategoryCard;
