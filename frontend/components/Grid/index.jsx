import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { Grid as BaseGrid } from '@shopgate/engage/components';

/**
 * @param {number} columns .
 * @returns {string}
 */
const gridStyle = columns => css({
  background: themeConfig.colors.background,
  display: 'grid',
  gridGap: '12px',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  padding: 12,
}).toString();

/**
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const Grid = ({ children, columns }) => (
  <BaseGrid wrap className={gridStyle(columns)}>
    {children}
  </BaseGrid>
);

Grid.propTypes = {
  columns: PropTypes.number.isRequired,
  children: PropTypes.node,
};

Grid.defaultProps = {
  children: null,
};

export default Grid;
