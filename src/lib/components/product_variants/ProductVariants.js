import React, { Component } from 'react';
import Row from '../row/Row';
import ProductHelper from '../../utils/ProductHelper';

const CLASS_ROOT = 'tp-product-variants';

export default class MoreCanvases extends Component {
  render() {
    this.productHelper = new ProductHelper();

    const variants = this.props.variants.map((variant, i) => {
      const imageUrl = this.productHelper.mockupImage(variant).url;
      const variantGroup = this.productHelper.variantGroup(
        this.props.store,
        variant
      );

      return (
        <div key={i}>
          <img key={imageUrl} src={imageUrl} />
          <h4>{variantGroup}</h4>
          <a href={variant._links.self.href} key={variant.type}>
            {variant.type}
          </a>
        </div>
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
