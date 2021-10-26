import React from 'react';

import './NewsItem.css';
import PropTypes from 'prop-types';

function NewsItem({ news }) {
  return (
    <div className="news-grid">
      <div className="news-item">
        <a href="/">
          <img src={news.image} alt={news.title} />
        </a>
      </div>
    </div>
  );
}

NewsItem.propTypes = {
  news: PropTypes.object
};

export default NewsItem;
