import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CLASS_ROOT = 'tp-pagination';

export default class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.renderPages = this.renderPages.bind(this);
    this.changePage = this.changePage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  changePage(pageNumber) {
    this.props.onPageChange(pageNumber);
  }

  handleClick(event) {
    event.preventDefault();
    this.changePage(event.target.id);
  }

  render() {
    const { className } = this.props;
    const classes = classnames(className, CLASS_ROOT);

    return (
      <ul className={classes}>
        <li onClick={this.prevPage}>{'<'}</li>
        {this.renderPages()}
        <li onClick={this.nextPage}>{'>'}</li>
      </ul>
    );
  }

  renderPages() {
    const { totalPages } = this.props;

    return [...Array(totalPages).keys()].map(pageNumber => {
      let pgNum = pageNumber + 1;

      return (
        <li id={pgNum} onClick={this.handleClick} key={pgNum}>
          {pgNum}
        </li>
      );
    });
  }

  nextPage() {
    if (this.props.currentPage >= this.props.totalPages) {
      return;
    }

    let nextPage = this.props.currentPage + 1;
    this.changePage(nextPage);
  }

  prevPage() {
    if (this.props.currentPage <= 1) {
      return;
    }

    let prevPage = this.props.currentPage - 1;
    this.changePage(prevPage);
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  className: PropTypes.string
};
