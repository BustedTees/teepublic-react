export default class ProductHelper {
  otherVariants(design, productType) {
    var products = design._embedded.products;
    return products.filter(product => product.type !== productType);
  }

  variantGroup(store, variant) {
    const types = store._embedded.productTypes;
    return types.find(type => type.name === variant.type);
  }

  mockupImage(variant) {
    const defaultSku = variant._embedded.defaultSku;
    return defaultSku.images.find(image => {
      return (
        image.type === 'mockup' ||
        (defaultSku.productType === 'laptop-case' && image.type === 'front') ||
        (defaultSku.productType === 'mug' && image.type === 'front')
      );
    });
  }

  collectSelectorOptions(products, hierarchy, preselected = {}) {
    var selectors = [],
      softSelected = [];
    // LOOP THROUGH THE SELECTORS THAT NEED TO BE GENERATED
    hierarchy.forEach(currentSelector => {
      var selectorOptions = this.optionsForSelector(
        products,
        currentSelector,
        softSelected
      );

      selectors.push(this.sortOptions(selectorOptions));

      // DETERMINE WHICH OPTION IS SOFT SELECTED
      // IF THE VALUE PASSED IN preselected EXISTS, THAT VALUE IS SOFT SELECTED
      // IF THE PASSED VALUE DOESNT EXIST OR NO VALUE IS PASSED, THE FIRST VALUE IS SOFT SELECTED
      if (
        preselected[currentSelector['name']] &&
        selectorOptions[preselected[currentSelector['name']]]
      ) {
        softSelected.push(
          selectorOptions[preselected[currentSelector['name']]]
        );
      } else {
        softSelected.push(selectors[selectors.length - 1][0]);
      }
    });
    return selectors;
  }

  optionsForSelector(products, currentSelector, softSelected) {
    var selectorOptions = {};

    // LOOP THROUGH PRODUCTS
    products.forEach(currentProduct => {
      var currentProductAttrs = currentProduct['productOptions'];
      var currentProductAttr = this.attributeForType(
        currentProductAttrs,
        currentSelector['name']
      );

      // ADD THE OPTION IF IT MATCHES THE SOFT SELECTIONS
      if (this.matchesSoftSelections(currentProductAttrs, softSelected)) {
        selectorOptions[currentProductAttr['value']] = currentProductAttr;
      }
    });
    return selectorOptions;
  }

  matchesSoftSelections(currentProductAttrs, softSelected) {
    var shouldBeAdded = true;

    // MAKE SURE THE CURRENT PRODUCT MATCHES ALL SOFT SELECTED OPTIONS
    softSelected.forEach(softSelectedRecord => {
      if (
        softSelectedRecord['value'] !==
        this.attributeForType(currentProductAttrs, softSelectedRecord['name'])[
          'value'
        ]
      ) {
        shouldBeAdded = false;
      }
    });
    return shouldBeAdded;
  }

  sortOptions(selectorOptions) {
    return Object.values(selectorOptions).sort(function(a, b) {
      return a['displaySortOrder'] - b['displaySortOrder'];
    });
  }

  attributeForType(attributes, attr_type) {
    // GIVEN A SET OF ATTRIBUTES AND A TYPE
    // FIND THE ATTRIBUTE THAT MATCHES THAT TYPE
    // update to foreach/array methods array.some
    for (var i = 0; i < attributes.length; i++) {
      if (attributes[i]['name'] === attr_type) {
        return attributes[i];
      }
    }
  }

  currentSku(skus, selectedOptions) {
    const keys = Object.keys(selectedOptions);
    const selectedSku = skus.find(sku => {
      return keys.every(key => {
        return sku.productOptions.find(option => {
          return option.name === key && option.value === selectedOptions[key];
        });
      });
    });
    return selectedSku;
  }
}
