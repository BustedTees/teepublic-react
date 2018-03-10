import _ from 'underscore';

export default class SelectorHelper {
  constructor(products, attribute_types) {
    this.products = products;
    this.attributeTypes = attribute_types;
  }

  optionsFor(attributeType, product_set = this.products) {
    return _.uniq(_.pluck(product_set, attributeType));
  }

  productsWithAttributes(attributes = {}, product_set = this.products) {
    return _.filter(product_set, attributes);
  }

  optionSets(selectedAttributes) {
    var groupedOptionSets = [];
    var recursiveProductGroup = this.products;

    _.each(this.attributeTypes, attributeType => {
      var selectedAttribute = selectedAttributes[attributeType];
      var attributeFilter = {};
      attributeFilter[attributeType] = selectedAttribute;

      if (selectedAttribute) {
        recursiveProductGroup = this.productsWithAttributes(
          attributeFilter,
          recursiveProductGroup
        );
        groupedOptionSets.push(this.optionsFor(attributeType));
      } else {
        groupedOptionSets.push(
          this.optionsFor(attributeType, recursiveProductGroup)
        );
      }
    });

    return groupedOptionSets;
  }
}
