const { replaceCategoryListWidget } = require('./config')

module.exports = async (context, { widgets }) => {
  if (!replaceCategoryListWidget) {
    return { widgets }
  }

  return {
    widgets: widgets.map((widget) => {
      if (widget.type === '@shopgate/commerce-widgets/category_list') {
        return {
          ...widget,
          type: '@shopgate-project/categories-grid-view/CategoryListWidget'
        }
      }
      return widget
    })
  }
}
