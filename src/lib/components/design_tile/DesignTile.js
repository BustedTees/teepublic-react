import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MoneyHelper from '../../utils/MoneyHelper';
import _ from 'underscore';

import './DesignTile.css';

const CLASS_ROOT = 'tp-design-tile';

const DESIGN_IMAGE = {
  small: 200,
  medium: 300,
  large: 400
};

export default class DesignTile extends Component {
  render() {
    const {
      className,
      design,
      size,
      buyProductLinkBuilder,
      storeId
    } = this.props;
    const designSku = design._embedded.defaultProduct._embedded.defaultSku;
    const buyProductLink = buyProductLinkBuilder(
      design.id,
      designSku.productType,
      storeId
    );

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--${size}`]: size
      },
      className
    );
    const owner = design._embedded.owner;
    const sku = design._embedded.defaultProduct._embedded.defaultSku;
    const { images, price } = sku;

    var skuMockupImage = _.find(images, function(image) {
      return image.type === 'mockup';
    });

    const designImage = (
      <img
        className={`${CLASS_ROOT}__image`}
        src={skuMockupImage.url}
        alt={skuMockupImage.type}
        height={DESIGN_IMAGE[size]}
      />
    );

    const designTitle = (
      <p className={`${CLASS_ROOT}__title`}>{design.title}</p>
    );

    const designPrice = (
      <p className={`${CLASS_ROOT}__price`}>
        {new MoneyHelper(price, 'USD').commaSeprated()}
      </p>
    );

    const buyButton = <button>Buy</button>;

    return (
      <a className={classes} href={buyProductLink}>
        <div>
          {designImage}
          <div className={`${CLASS_ROOT}__details`}>
            <div className={`${CLASS_ROOT}__title-owner`}>
              {designTitle}
              {designPrice}
            </div>
            {buyButton}
          </div>
        </div>
      </a>
    );
  }
}

DesignTile.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  design: PropTypes.object.isRequired,
  buyProductLinkBuilder: PropTypes.func.isRequired,
  storeId: PropTypes.number
};

DesignTile.defaultProps = {
  size: 'large'
};
