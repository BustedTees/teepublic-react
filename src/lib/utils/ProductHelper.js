export default class ProductHelper {
  otherVariants(design, selectedProductIndex) {
    var products = design._embedded.products;
    return products.filter((product, i) => i !== selectedProductIndex);
  }

  variantGroup(store, variant) {
    const types = store._embedded.productTypes;
    var group;

    types.some((type, i) => {
      if (type.name === variant.type) return (group = type.group);
    });

    return group;
  }

  mockupImage(variant) {
    const defaultSku = variant._embedded.defaultSku;
    var image = defaultSku.images.filter(image => {
      return (
        image.type === 'mockup' ||
        (defaultSku.productType === 'laptop-case' && image.type === 'front') ||
        (defaultSku.productType === 'mug' && image.type === 'front')
      );
    });
    return image[0];
  }
}
