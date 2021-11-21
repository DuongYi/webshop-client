import React from 'react';

import PropTypes from 'prop-types';

import './BlogItem.css';

function BlogItem({ blog }) {
  return (
    <div className="blog-grid">
      <div className="blog-thumbnail">
        <a>
          <img src={blog.image} alt={blog.title} />
        </a>
      </div>
      <div className="blog-content">
        <h3 className="content-title">
          {blog.title}
        </h3>
      </div>
    </div>
  );
}

BlogItem.propTypes = {
  blog: PropTypes.object
};

export default BlogItem;
