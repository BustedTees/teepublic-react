import React, { Component } from 'react';
import ProductHelper from '../../utils/ProductHelper';
import './ProductVariants.scss';
import classnames from 'classnames';

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

      const buyProductLink = buyProductLinkBuilder(
        design.id,
        variant.type,
        store.id
      );

      const classes = classnames(CLASS_ROOT, 'teepublic');

      return (
        <div className={classes} key={i}>
          <a href={buyProductLink}>
            <img
              key={imageUrl}
              src={imageUrl}
              alt={variant.type}
              className={`${CLASS_ROOT}__thumb`}
            />
          </a>

          <h4 className={`${CLASS_ROOT}__variant-group`}>
            {variantGroup.group}
          </h4>

          <a className={`${CLASS_ROOT}__variant-type`} href={buyProductLink}>
            {variant.type.replace(/-/g, ' ')}
          </a>
        </div>
      );
    }, this);

    return (
      <div className={CLASS_ROOT}>
        <h3 className={`${CLASS_ROOT}__h`}>
          This product is also available as:
        </h3>
        <div className={`${CLASS_ROOT}__thumbs`}>{variants}</div>
      </div>
    );
  }
}
