import React, { Component } from 'react';
import Row from '../row/Row';
import ProductHelper from '../../utils/ProductHelper';

const CLASS_ROOT = 'tp-product-variants';

export default class ProductVariants extends Component {
  render() {
    this.productHelper = new ProductHelper();
    const { store, design, currentSku, buyProductLinkBuilder } = this.props;
    const otherVariants = this.productHelper.otherVariants(
      design,
      currentSku.productType
    );

    const variants = otherVariants.map((variant, i) => {
      const imageUrl = this.productHelper.mockupImage(variant).url;
      const variantGroup = this.productHelper.variantGroup(store, variant);

      const buyProductLink = buyProductLinkBuilder(design.id, variant.type);

      return (
        <a href={buyProductLink} key={i}>
          <img key={imageUrl} src={imageUrl} />
          <h4>{variantGroup.group}</h4>
          {variant.type}
        </a>
      );
    }, this);

    return (
      <div style={{ textAlign: 'center' }}>
        <h3>This product is also available as:</h3>
        <Row justify="center">{variants}</Row>
      </div>
    );
  }
}
