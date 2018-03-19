import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BackToProducts extends Component {
  render() {
    const { storeUrl, linkText, ...props } = this.props;
    return <a href={storeUrl}>{linkText}</a>;
  }
}

BackToProducts.propTypes = {
  storeUrl: PropTypes.string
};
