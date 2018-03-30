import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.pageNumbers = this.pageNumbers.bind(this);
    this.renderPages = this.renderPages.bind(this);
    this.getPage = this.getPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  getPage(pageNumber) {
    this.props.onPageChange(pageNumber);
  }

  handleClick(event) {
    event.preventDefault();
    this.getPage(event.target.id);
  }

  render() {
    return (
      <ul className="pagination">
        <li onClick={this.prevPage}>{'<'}</li>
        {this.renderPages()}
        <li onClick={this.nextPage}>{'>'}</li>
      </ul>
    );
  }

  renderPages() {
    return this.pageNumbers().map(pageNumber => {
      return (
        <li id={pageNumber} onClick={this.handleClick} key={pageNumber}>
          {pageNumber}
        </li>
      );
    });
  }

  nextPage() {
    if (this.props.currentPage === this.props.totalPages) {
      return;
    }

    let nextPage = this.props.currentPage + 1;
    this.getPage(nextPage);
  }

  pageNumbers() {
    const { totalPages } = this.props;

    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }

  prevPage() {
    if (this.props.currentPage === 1) {
      return;
    }

    let prevPage = this.props.currentPage - 1;
    this.getPage(prevPage);
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
};
