import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Pagination.css';

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
    const { className, totalPages, currentPage } = this.props;
    const classes = classnames(className, CLASS_ROOT);

    const prevTag =
      currentPage > 1 ? <span onClick={this.prevPage}>{'<'}</span> : null;

    const nextTag =
      currentPage < totalPages ? (
        <span onClick={this.nextPage}>{'>'}</span>
      ) : null;

    return (
      <nav className={classes}>
        {prevTag}
        {this.renderPages()}
        {nextTag}
      </nav>
    );
  }

  renderPages() {
    const { totalPages, currentPage } = this.props;

    return [...Array(totalPages).keys()].map(pageNumber => {
      let pgNum = pageNumber + 1;

      return (
        <span
          id={pgNum}
          onClick={this.handleClick}
          key={pgNum}
          className={pgNum == currentPage ? 'on' : ''}
        >
          {pgNum}
        </span>
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
