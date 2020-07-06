const { useBaseCategoriesImages } = require('../config')

module.exports = async (context, input) => {
  if (!useBaseCategoriesImages) {
    return input
  }

  const { imageUrl, children } = input

  return {
    imageUrl: imageUrl && imageUrl.replace('@2x', ''),
    children: children.map((category) => ({
      ...category,
      imageUrl: category.imageUrl && category.imageUrl.replace('@2x', '')
    }))
  }
}
