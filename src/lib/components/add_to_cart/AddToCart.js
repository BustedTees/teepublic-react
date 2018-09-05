import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CartHelper from '../../utils/CartHelper';

import './AddToCart.scss';

const CLASS_ROOT = 'tp-add-to-cart';

export default class AddToCart extends Component {
  handleClick = e => {
    const {
      design,
      sku,
      storeId,
      affiliateId,
      affiliateNetworkId,
      callback
    } = this.props;
    const cartHelper = new CartHelper();

    cartHelper.addToCart(
      design,
      sku,
      storeId,
      affiliateId,
      affiliateNetworkId,
      callback
    );
  };

  render() {
    const { className, design, sku } = this.props;
    const classes = classnames(CLASS_ROOT, className, 'teepublic');
    const disabled = !(design && sku);
    return (
      <button
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      >
        Add to Cart
      </button>
    );
  }
}

AddToCart.propTypes = {
  className: PropTypes.string,
  design: PropTypes.object.isRequired,
  affiliateId: PropTypes.number.isRequired,
  affiliateNetworkId: PropTypes.number.isRequired,
  storeId: PropTypes.number.isRequired,
  sku: PropTypes.object.isRequired,
  callback: PropTypes.func
};
