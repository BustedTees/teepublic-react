export const ROUTE_CONFIGURATION = {
  storeUrl: (
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
  },

  cartUrl: () => {
    return '/cart';
  },

  buyProductUrl: (designId, productTypeName, storeId) => {
    return `/stores/${storeId}/designs/${designId}?product_type=${productTypeName}`;
  },

  onCheckout: cartItems => {
    console.log(cartItems);
  },

  sizechartUrl: () => {
    return 'https://www.teepublic.com/sizechart';
  },

  cartAddCallback: () => {
    window.location = '/cart';
  }
};
