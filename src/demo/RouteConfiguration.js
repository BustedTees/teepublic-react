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
    console.log(selectedPage, selectedAlbumId, selectedProductTypeName);
    return url;
  },

  cartUrl: () => {
    return '/cart';
  },

  buyProductUrl: (designId, productTypeName, storeId) => {
    return `/stores/${storeId}/designs/${designId}?product_type=${productTypeName}`;
  },

  sizechartUrl: () => {
    return 'https://www.teepublic.com/sizechart';
  }
};
