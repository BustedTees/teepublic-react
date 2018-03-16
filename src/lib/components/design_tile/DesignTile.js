import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Column from '../column/Column';
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
    const { className, design, size, onClick } = this.props;

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
      <a className={`${CLASS_ROOT}__title`}>{design.title}</a>
    );
    const designPrice = (
      <p className={`${CLASS_ROOT}__price`}>
        {new MoneyHelper(price, 'USD').commaSeprated()}
      </p>
    );
    const ownerName = (
      <p className={`${CLASS_ROOT}__owner`}>{owner.username}</p>
    );
    const buyButton = <button>Buy</button>;

    return (
      <Column
        onClick={() => onClick()}
        className={classes}
        justify="start"
        align="center"
      >
        {designImage}
        <Row
          className={`${CLASS_ROOT}__details`}
          justify="between"
          align="start"
        >
          <Column
            className={`${CLASS_ROOT}__title-owner`}
            justify="start"
            align="start"
          >
            {designTitle}
            {ownerName}
            {designPrice}
          </Column>
          {buyButton}
        </Row>
      </Column>
    );
  }
}

DesignTile.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  design: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

DesignTile.defaultProps = {
  size: 'large'
};
