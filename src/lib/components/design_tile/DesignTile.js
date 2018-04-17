import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MoneyHelper from '../../utils/MoneyHelper';
import _ from 'underscore';

import './DesignTile.scss';

const CLASS_ROOT = 'tp-design-tile';

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
      className,
      'teepublic'
    );

    const sku = design._embedded.defaultProduct._embedded.defaultSku;
    const { images, price } = sku;

    var skuMockupImage = _.find(images, function(image) {
      return image.type === 'mockup';
    });

    const designImage = (
      <a href={buyProductLink} className={`${CLASS_ROOT}__image-link`}>
        <img
          className={`${CLASS_ROOT}__image`}
          src={skuMockupImage.url}
          alt={skuMockupImage.type}
        />
      </a>
    );

    const designTitle = (
      <p className={`${CLASS_ROOT}__title`}>
        <a href={buyProductLink}>{design.title}</a>
      </p>
    );

    const designPrice = (
      <p className={`${CLASS_ROOT}__price`}>
        {new MoneyHelper(Number(price).toFixed(2), 'USD').commaSeprated()}
      </p>
    );

    const buyButton = (
      <button
        className={`${CLASS_ROOT}__buy-btn`}
        onClick={() => (window.location = buyProductLink)}
      >
        Buy
      </button>
    );

    return (
      <div className={classes}>
        {designImage}

        <div className={`${CLASS_ROOT}__details`}>
          {designTitle}
          {buyButton}
        </div>

        {designPrice}
      </div>
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
