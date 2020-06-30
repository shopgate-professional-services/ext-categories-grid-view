import React from 'react';
import { Placeholder, PlaceholderLabel, Grid } from '@shopgate/engage/components';
import { showCategoriesImages } from '../../config';

/**
 * @returns {JSX}
 */
const CategoryCardPlaceholder = () => (
  <Grid.Item>
    {showCategoriesImages && (
      <Placeholder height={100} width="100%" />
    )}
    <PlaceholderLabel ready={false} style={{ marginTop: 8 }} />
  </Grid.Item>
);

export default CategoryCardPlaceholder;
