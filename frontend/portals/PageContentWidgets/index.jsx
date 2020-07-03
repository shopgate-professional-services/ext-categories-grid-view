import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

/**
 * @returns {JSX}
 */
const PageContentWidgets = ({ id: pageId, children }) => {
  const widgets = useMemo(() => {
    let originalWidgets;
    if (children.type.name && children.type.name.match(/Widgets/)) {
      originalWidgets = children.props.widgets;
    } else {
      originalWidgets = children.props.children.props.widgets;
    }

    return originalWidgets.map((widget) => {
      if (widget.type === '@shopgate/commerce-widgets/category_list') {
        return {
          ...widget,
          type: '@shopgate-project/categories-grid-view/CategoryListWidget',
        };
      }
      return widget;
    });
  }, [children]);

  console.warn(widgets);

  if (children.type.name && children.type.name.match(/Widgets/)) {
    React.cloneElement(children, ({
      ...children.props,
      widgets,
    }));
  }

  return React.cloneElement(
    children,
    children.props,
    React.cloneElement(
      children.props.children, {
        ...children.props.children.props,
        widgets,
      }
    )
  );
};

PageContentWidgets.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
};

export default PageContentWidgets;
