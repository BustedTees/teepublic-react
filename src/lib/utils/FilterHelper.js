export default class FilterHelper {
  groupProducts(products) {
    var groupedProducts = {};

    products.forEach(product => {
      if (!groupedProducts[product.group]) {
        groupedProducts[product.group] = [];
      }

      groupedProducts[product.group].push(product);
    });

    return groupedProducts;
  }
}
