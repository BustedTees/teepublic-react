import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';

const CLASS_ROOT = 'tp-related-tags';

export default class RelatedTags extends Component {
  render() {
    const { className, design } = this.props;
    const tags = buildTags(design._embedded.tags);
    const relatedTags = buildTags(design._embedded.relatedTags);
    const classes = classnames(CLASS_ROOT, className);

    function buildTags(tags) {
      return <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    return (
      <div className={classes}>
        <h4>Design Tags</h4>
        {tags}
        <h4>Related Tags</h4>
        {relatedTags}
      </div>
    );
  }
}

RelatedTags.propTypes = {
  design: PropTypes.object.isRequired
};