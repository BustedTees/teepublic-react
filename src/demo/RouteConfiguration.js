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

  buyProductUrl: (designId, productTypeName) => {
    return `designs/${designId}?product_type=${productTypeName}`;
  }
};
