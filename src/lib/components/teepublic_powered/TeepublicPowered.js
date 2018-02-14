import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import tpLogo from '../tp-logo.png';

import Row from '../row/Row';
import Column from '../column/Column';

import './TeepublicPowered.css';

const CLASS_ROOT = 'tp-powered';

export default class TeepublicPowered extends Component {
  render() {
    const { className, layout, ...props } = this.props;

    const classes = classnames(CLASS_ROOT, className);

    const text = <p className={`${CLASS_ROOT}__text`}>Powered By </p>;
    const logo = (
      <a
        className={`${CLASS_ROOT}__logo`}
        href="https://www.teepublic.com"
        target="_blank"
      >
        <img src={tpLogo} alt="TeePubic logo" height="15" />
      </a>
    );
    let content = (
      <Row justify="center" align="center">
        {text}
        {logo}
      </Row>
    );

    if (layout == 'column') {
      content = (
        <Column justify="center" align="center">
          {text}
          {logo}
        </Column>
      );
    }
    return content;
  }
}

TeepublicPowered.propTypes = {
  layout: PropTypes.oneOf(['row', 'column'])
};

TeepublicPowered.defaultProps = {
  size: 'medium',
  layout: 'row'
};
