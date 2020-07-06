const { useBaseCategoriesImages } = require('../config')

module.exports = async (context, { categories }) => {
  if (!useBaseCategoriesImages) {
    return { categories }
  }

  return {
    categories: categories.map((category) => ({
      ...category,
      imageUrl: category.imageUrl && category.imageUrl.replace('@2x', '')
    }))
  }
}
