# About
Components for rendering a TeePublic storefront.
[![test-status](https://travis-ci.org/BustedTees/teepublic-react.svg?branch=master)](https://travis-ci.org/BustedTees/teepublic-react)

# Installation
`npm install teepublic-react`
or
`yarn add teepublic-react`

# Quick Start
These components are designed for responses from the TeePublic.com API.  With an API response from  `/v1/stores/{id}`, you can use the DesignCollection component to quickly show tiles.
```
import { DesignCollection } from 'teepublic-react'

class MyStore extends React.Component {
  render () {
    const avatarUrl = this.props.store_data.avatarUrl
    const bannerUrl = this.props.store_data.bannerUrl
    const designs   = this.props.store_data._embedded.designs
    const onClickHandler   = (design, sku) => {
      console.log(design);
      console.log(sku);
    }

    return (
      <div className='homepage'>
        <img src={bannerUrl}/>
        <br/>
        <img src={avatarUrl}/>

        <DesignCollection
          designs={designs}
          tileSize="large"
          onDesignClick={ onClickHandler }
        />

      </div>
    );
  }
}
```

# Documentation
### General Concepts
**className** You can pass className as a prop to any of TeePublic component and it will get added to the parent tag of the component
```
// We have some code like this in each component
import classnames from 'classnames';
const { className } = this.props;
const classes = classnames(CLASS_ROOT, className);
```

**CLASS_ROOT:** Each component have a CLASS_ROOT defined inside it which is of `tp-[component]` form.

**PropTypes:** Every component has it's expected PropTypes defined at the bottom of the `[component].js` file with proper requirements like what kind and if it is required. It should be reliable for most parts but this shouldn't be your source of truth.

## Components
## `<AddToCart />`
This component allows you to add items to a cart easily and managed in localStorage. And when a user tries to load the cart, we read from the same localStorage object.

``<AddToCart /> -----> localStorage -------> <Cart />``

This means that you can place an AddToCart button anywhere on the screen just make sure you provide the required propTypes to this component.

We currently use this Component on `<BuyProduct />` component where user can look through product details and if they like it they can "AddToCart"

Now let's dive into individual proptypes accepted by this component
```
AddToCart.propTypes = {
  className: PropTypes.string,
  design: PropTypes.object.isRequired,
  affiliateId: PropTypes.number.isRequired,
  affiliateNetworkId: PropTypes.number.isRequired,
  storeId: PropTypes.number.isRequired,
  sku: PropTypes.object.isRequired
};
```
**design**: design object returned from TeePublic APIs, there are several APIs which return design objects, one example is this. (https://api.teepublic.com/v1/docs#/designs/getV1DesignsId)

**affiliateId**: Your Affiliate ID so that we can track the sale and credit your portion of the revenue to you account. You can find this  (https://api.teepublic.com/v1/docs#/stores/getV1StoresId)

**affiliateNetworkId**: Marcelo, Joe

**storeId**: This is your store id on TeePublic, also returned from the API (https://api.teepublic.com/v1/docs#/stores/getV1StoresId)

**sku**: Each design could be printed on different products likes tshirts, mugs, iPhone Case, etc and even for a product we can have many different variants like color, size, style, etc. Sku information could be found in design object and it's very important to send the right sku information to make sure TeePublic ships the right product to your customers.  (https://api.teepublic.com/v1/docs#/designs/getV1DesignsId)

### `<BackToProducts />`
Back to products is very basic link which lets you users to go back to store page from anywhere. We use this component on `<BuyProduct />` page. Which allows user to drill back to store page
```
BackToProducts.propTypes = {
  className: PropTypes.string,
  storeUrl: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
```
**storeUrl**: This could be potentially any URL you want but place it nicely to go back to the previous store page where user just came from. This URL is dependent on URL structure and how you decided the TeePublic Store urls. For eg. when it comes to our own website, we use 'https://teepublic.com/stores/store-slug'

**linkText**: This is the text users will see on the link. This could be "Back to Store" or "Back to [Store Name]" or just "Back"


### `<BuyProduct />`
BuyProduct component is the most important component after DesignCollection component and it uses most of the components that you will find in the package. So if you use this nicely you would not have to worry about most of the components by yourself

Components it uses internally
```
AddToCart -> Allows users to add current selected sku to the cart
ImageGallery -> As it sounds, it shows the mockups of design
BackToProducts -> This allows user to go back to store page
ProductVariants -> This shows users different product types for the same design
SkuSelector -> A design has a complex rules when a particular option is selected like size and color
RelatedTags -> This shows users related tags to the current design which are calcauted by our Graph DB
```

This is how the props looks like
```
BuyProduct.propTypes = {
  className: PropTypes.string,
  design: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  storeUrl: PropTypes.func.isRequired,
  affiliateNetworkId: PropTypes.number.isRequired,
  tagLinkBuilder: PropTypes.func.isRequired,
  buyProductLinkBuilder: PropTypes.func.isRequired,
  sizechartUrl: PropTypes.func.isRequired
};
```
**design**: design object returned from TeePublic APIs, there are several APIs which return design objects, one example is this. (https://api.teepublic.com/v1/docs#/designs/getV1DesignsId)

**store**: store object is returned by TeePublic APIs for eg this one (https://api.teepublic.com/v1/docs#/stores/getV1StoresId)

**storeUrl**: This is function which expects to pass a storeId and return your application specific store url or path. For eg. in our test application this is how this function looks like
```
(storeId) => {
  return `/stores/${storeId}`;
}
```

**affiliateNetworkId**: Marcelo, Joe

**tagLinkBuilder**: We place a component at the bottom of the page to allow users dive into other related tags. But inorder to make that happen we need a URL where we can direct them after the click. This is how our demo projects looks like.
```
tagLinkBuilder={(type, tag, affiliateId, affiliateNetworkId) => {
  var baseUrl = 'https://www.teepublic.com';
  return `${baseUrl}/${type}/${tag}?ref_id=${affiliateId}&aff_network_id=${affiliateNetworkId}`;
}}
```
For the time being you would have to use same baseUrl as mentioned above since we don't have capability to show desings for tags on white label stores.

**buyProductLinkBuilder**: On Buy Product page, we allow users to buy other products too like same designs on different products or different designs from your store. So in order to route them properly we need to understand how your BuyProduct Urls looks like. This is how our demo app looks like
```
(designId, productTypeName, storeId) => {
  return `/stores/${storeId}/designs/${designId}?product_type=${productTypeName}`;
}
```
where  designId and storeId seems pretty clear and productTypeName could also be found in design objects

**sizechartUrl**: As it sounds, this helps user to look at size chart
```
() => {
  return 'https://www.teepublic.com/sizechart';
}
```

### `<Cart />`
As explained above in `<AddToCart />` component addToCart store the data into local storage and `<Cart />` component just reads the content from local storage to populate Cart and show it to users. In otherwords, this component is responsible for showing cart contents to users where ever you place it.

```
Cart.propTypes = {
  className: PropTypes.string,
  storePathLinkBuilder: PropTypes.func.isRequired,
  buyProductLinkBuilder: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired
};
```
**storePathLinkBuilder**: This let's the cart component build your store URLs.
```
(
  storeId,
  selectedPage,
  selectedAlbumId,
  selectedProductTypeName
) => {
  let url = `/stores/${storeId}?page=${selectedPage}`;
  if (selectedAlbumId) url += `&album_id=${selectedAlbumId}`;
  if (selectedProductTypeName)
    url += `&product_type=${selectedProductTypeName}`;
  return url;
}
```
**buyProductLinkBuilder**: As is sounds, it let's users to go back to product page from the items in the cart
```
(designId, productTypeName, storeId) => {
  return `/stores/${storeId}/designs/${designId}?product_type=${productTypeName}`;
}
```
**onCheckout**: This is how we use this function internally inside the component
```
checkoutHandler = e => {
  const { onCheckout } = this.props;
  const cartItems = this.cartHelper.checkoutCartItems();
  onCheckout(cartItems);
};
```
We are gonna pass along the cartItems as it should be consumed by TeePublic Checkout API and you just need to call that with cartItems properly passed to the API.

### `<CartButton />`
Cart Button should be placed at all times on your UI. It does three things.
1. keep poling localStorage for any changes and if there is any item added to the cart from anywhere, it will just update the count
2. Allow users to click on the cart to see thier full cart and what's in it
3. Direct Checkout and skip the looking at the cart part

```
Cart.propTypes = {
  className: PropTypes.string,
  cartUrl: PropTypes.string.isRequired,
  onCheckout: PropTypes.func.isRequired
};
```
**cartUrl**: This points to the component where your application is rendering the `<Cart />` component

**onCheckout**: this is same as `<Cart />` component prop
```
checkoutHandler = e => {
  const { onCheckout } = this.props;
  const cartItems = this.cartHelper.checkoutCartItems();
  onCheckout(cartItems);
};
```
### `<CartItem />`
You don't need to worry about this as this is being used by `<Cart />` internally to show individuals cart item. So if just build the `<Cart />` properly, you don't need to worry about it
```
CartItem.propTypes = {
  className: PropTypes.string,
  cartItem: PropTypes.object.isRequired,
  buyProductLinkBuilderL PropTypes.func.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired
};
```

### `<Column />`
This is a wrapper around flex box with column layout

### `<DesignCollection />`
This component shows a collection of `<DesignTile />`. So whenever you have a list of designs that you wanna show to the users, this might be the component you wanna explore
```
DesignCollection.propTypes = {
  tileSize: PropTypes.oneOf(['small', 'medium', 'large']),
  designs: PropTypes.array.isRequired,
  buyProductLinkBuilder: PropTypes.func.isRequired,
  storeId: PropTypes.number
};
```
**tileSize**: You can choose between 3 tiles sizes and we will take care of rendering and scaling them appropriately.

**designs**: List of designs returned from TeePublic APIs. Such as this one (https://api.teepublic.com/v1/docs#/designs/getV1Designs)

**buyProductLinkBuilder**: It allows design collection to build your application specific urls to render `<BuyProduct />` pages.
```
(designId, productTypeName, storeId) => {
  return `/stores/${storeId}/designs/${designId}?product_type=${productTypeName}`;
}
```

**storeId**: This is your store id on TeePublic, also returned from the API (https://api.teepublic.com/v1/docs#/stores/getV1StoresId)

### `<DesignTile />`
This component is responsible for rendering individual design tile that you see when you render design collection.
You don't need to dive deeper into this unless you plan to use this component at some one-off place.
```
DesignTile.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  design: PropTypes.object.isRequired,
  buyProductLinkBuilder: PropTypes.func.isRequired,
  storeId: PropTypes.number.isRequired
};
```

**size**: It helps the component to decide the layour and size of different elements in the components

**design**: a single design object returned from TeePublic APIs. Such as this one (https://api.teepublic.com/v1/docs#/designs/getV1Designs)

**buyProductLinkBuilder**: It allows design tile to build your application specific urls to render `<BuyProduct />` pages.
```
(designId, productTypeName, storeId) => {
  return `/stores/${storeId}/designs/${designId}?product_type=${productTypeName}`;
}
```

**storeId**: This is your store id on TeePublic, also returned from the API (https://api.teepublic.com/v1/docs#/stores/getV1StoresId)


### `<Footer />`
This is a very basic component which only has `<TeePublicPowered />` in it

### `<ImageGallery />`
This component is being used internally by `<BuyProduct />` component, so you don't need to delve deeper into this.
```
ImageGallery.propTypes = {
  className: PropTypes.string,
  images: PropTypes.array.isRequired,
  selectedImageIndex: PropTypes.number.isRequired,
  onImageSelect: PropTypes.func.isRequired
};
```
**images**: Array if image urls that will help the component to build thumbnails below the onImageSelect

**selectedImageIndex**: Parent should pass selectedImageIndex, which is basically the image index from images props and this helps the component to choose which image to show in the preview

**onImageSelect**: Since this component doesn't maintain the selectedImageIndex, we expect a function to be passed, components fires when a user clicks on a thumbnail. For eg, if users clicks on the 3rd image in the images array, we are gonna call onImageSelect with index = 2
```
const thumbImageTags = images.map(function(image, imageIndex) {
  return (
    <img
      className={`${CLASS_ROOT}__thumb`}
      key={imageIndex}
      onClick={() => {
        onImageSelect(imageIndex);
      }}
      src={image.url}
      alt={image.type}
    />
  );
}, this);
```

### `<Pagination />`
If the number of designs are large to load in one go, your application will need to implement paging by passing proper params to this API (https://api.teepublic.com/v1/docs#/designs/getV1Designs). This component is used in `<Store />` component to manage different pages. This component is dead simple really
```
Pagination.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
};
```
**currentPage**: Currently selected page, we let parent component store the state of currentPage

**onPageChange**: on page change, we will call this function with apt page number clicked by the users

**totalPages**: Total available pages so we can render the component appropriately

### `<ProductVariants />`
Each design can be printed on different product types like t-shirt, mug or iPhone case. This helps your application to show different product variants for the same design.

```
ProductVariants.propTypes = {
  className: PropTypes.string,
  design: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  currentSku: PropTypes.object.isRequired,
  buyProductLinkBuilder: PropTypes.func.isRequired
};
```
**design**: design object for which you want to show different product variants. As received from TeePublic APIs

**store**: store object as received from the TeePublic APIs (https://api.teepublic.com/v1/docs#/stores/getV1StoresId)

**currentSku**: This helps the component show everything other than the current sku. For eg. if you say your current sku is t-shirt then this component will show product variants which are not t-shirts. this could be found in design object.

**buyProductLinkBuilder**: It allows product variants to build your application specific urls to render `<BuyProduct />` pages if users clicks on any of those product variants.
```
(designId, productTypeName, storeId) => {
  return `/stores/${storeId}/designs/${designId}?product_type=${productTypeName}`;
}
```

### `<RelatedTags />`
This component could be found at the bottom of `<BuyProduct />` component where we show other related tags for the design. So you don't need to worry about this unless you wanna use this component somewhere else in the application. Please read `<BuyProduct />` docs to understand RelatedTags PropTypes
```
RelatedTags.propTypes = {
  className: PropTypes.string,
  design: PropTypes.object.isRequired,
  tagLinkBuilder: PropTypes.func.isRequired,
  affiliateId: PropTypes.number,
  affiliateNetworkId: PropTypes.number
};
```

### `<Row />`
This is a wrapper around flex box with row layout

### `<SkuSelector />`
JOSH

### `<Store />`
This component encompasses most of the components in this package and make it one stop shop for quick teepublic store integration with your application.
Let's undersatnd each proptype one by one,
```
Store.propTypes = {
  className: PropTypes.string,
  storeData: PropTypes.object.isRequired,
  configuration: PropTypes.shape({
    storeUrl: PropTypes.func.isRequired,
    cartUrl: PropTypes.func.isRequired,
    buyProductUrl: PropTypes.func.isRequired
  }).isRequired,
  selectedAlbumId: PropTypes.number,
  selectedPage: PropTypes.number,
  selectedProductTypeName: PropTypes.string
};
```

**storeData**: It's the store object returned from https://api.teepublic.com/v1/docs#/stores/getV1StoresId

**storeUrl**: This is a store url builder specific to your application and this a demo function that we use in our demo application
```
(storeId) => {
  return `/stores/${storeId}`;
}
```

**cartUrl**: This is a cart url builder which return path to your cart as a string.

**buyProductUrl**: This is a product page URL builder where you render `<BuyProduct />` component
```
(designId, productTypeName, storeId) => {
  return `/stores/${storeId}/designs/${designId}?product_type=${productTypeName}`;
}
```

**selectedAlbumId**: Marcello

**selectedPage**: Marcello

**selectedProductTypeName**: Marcello


### `<StoreFilter />`
You can place this filter in combination with `<DesignCollection />` and when users clicks on any of these filters, you can fire a new request (Marcello) to get filtered design. We allow user to filter by product type like tshirts or mug. We also allow users to filter by album.
```
StoreFilter.propTypes = {
  className: PropTypes.string,
  albums: PropTypes.array.isRequired,
  productTypes: PropTypes.array.isRequired,
  selectedAlbumId: PropTypes.number,
  selectedProductTypeName: PropTypes.string,
  onAlbumChange: PropTypes.func.isRequired,
  onProductTypeChange: PropTypes.func.isRequired,
  filterStyle: PropTypes.oneOf(['nav', 'dropdown']),
};
```

**albums**: List of albums could be retrieved from this TeePublic API (https://api.teepublic.com/v1/docs#/stores/getV1StoresId) look for albums object and just pass it as it is

**productTypes**: List of product types could be retrieved from this TeePublic API (https://api.teepublic.com/v1/docs#/stores/getV1StoresId), look for productTypes and could be passed as it is

**selectedAlbumId**: Send selected album id to the component so we can select proper album id if selected

**selectedProductTypeName**: Same logic as selectedAlbumId

**onAlbumChange**: We call this function when a user clicks on any album to notify the parent component to make an another request to TeePublic to filter by album

**onProductTypeChange**: Same logic as onAlbumChange

**filterStyle**: We support two styles as of now. nav and dropdown. dropdown is a default style but if you want you can change the style to nav. Dropdown is for mobile and nav is for desktop

### `<TeepublicPowered />`
This is the most simple component which just let's you  drop powered by teepublic logo anywhere you want on the screen 


# Devlopment Process
Clone the repo on your dev machine
`git clone https://github.com/BustedTees/teepublic-react`

`npm install` to install all dependencies

`npm start` to run the demo project

`npm publish` to publish the package on npm. You would need to change the version number in package.json

`git push -u origin <branch-name>` & create PR and get it reviewed
