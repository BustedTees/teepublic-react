import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BackToProducts.scss';

const CLASS_ROOT = 'tp-back-products';

export default class BackToProducts extends Component {
  render() {
    const { storeUrl, linkText } = this.props;
    return (
      <a className={CLASS_ROOT} href={storeUrl}>
        {linkText}
      </a>
    );
  }
}

BackToProducts.propTypes = {
  storeUrl: PropTypes.string
};
