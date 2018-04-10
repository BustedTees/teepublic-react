import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TagHelper from '../../utils/TagHelper';

import './RelatedTags.scss';
const CLASS_ROOT = 'tp-related-tags';
const tagHelper = new TagHelper();

export default class RelatedTags extends Component {
  render() {
    const { className, design, currentSku, tagLinkBuilder } = this.props;
    const tags = buildTags(design._embedded.tags);
    const relatedTags = buildTags(design._embedded.relatedTags);
    const classes = classnames(CLASS_ROOT, className);

    function buildTags(tags) {
      return (
        <ul className={`${CLASS_ROOT}__list`}>
          {tags.map((tag, i) => {
            return (
              <li key={tag}>
                <a href={tagLinkBuilder('t-shirts', tag)}>
                  {tagHelper.unslugify(tag)}
                </a>
                {i < tags.length - 1 ? ',' : ''}
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <div className={classes}>
        <h4 className={`${CLASS_ROOT}__h`}>Design Tags</h4>
        {tags}

        <h4 className={`${CLASS_ROOT}__h`}>Related Tags</h4>
        {relatedTags}
      </div>
    );
  }
}

RelatedTags.propTypes = {
  design: PropTypes.object.isRequired
};
