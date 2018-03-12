import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Button.css';
const CLASS_ROOT = 'tp-button';

export default class Button extends Component {
  render() {
    const { className, style, size, children, ...props } = this.props;
    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--${style}`]: style
      },
      className
    );
    return (
      <button disabled className={classes} {...props}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.oneOf([
    'fill',
    'pulse',
    'close',
    'raise',
    'up',
    'slide',
    'offset'
  ])
};

Button.defaultProps = {
  size: 'medium',
  style: 'fill'
};
