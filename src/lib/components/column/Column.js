import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Column.css';

const CLASS_ROOT = 'tp-column';

export default class Column extends Component {
  render() {
    const { className, justify, align, children, ...props } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--justify-${justify}`]: justify,
        [`${CLASS_ROOT}--align-${align}`]: align
      },
      className
    );

    return (
      <div ref={ref => (this.columnRef = ref)} {...props} className={classes}>
        {children}
      </div>
    );
  }
}

Column.propTypes = {
  justify: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly'
  ]),
  align: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch'])
};

Column.defaultProps = {
  justify: 'start',
  align: 'start'
};
