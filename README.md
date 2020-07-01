# Shopgate Engage - categories grid view

Show categories in grid view.

## Configuration

Set the following value in your Shopgate Connect Admin:

* showCategoriesImages (boolean) - show categories images
* categoriesImages (json) - override categories images as map `{ id: image }`
* gridCardStyles (json) - styles for grid card in glamor format

## Config example
```json
{
  "showCategoriesImages": true,
  "categoriesImages": {
    "sale": "https://picsum.photos/300",
    "5": "https://picsum.photos/300/300"
  },
  "gridCardStyles": {
    "textTransform": "none"
  }
}
```


## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License
See the [LICENSE](./LICENSE.md) file for more information.
