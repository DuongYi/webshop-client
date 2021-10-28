import React from 'react';

import './ResourceItem.css';
import PropTypes from 'prop-types';

function ResourceItem({ resource }) {
  return (
    <div className="resource-item">
      <a className={resource.class} href="/">
        <div className="resource-thumbnail">
          <img className={resource.imgbottom} src={resource.image} alt={resource.title} />
        </div>
        <div className="resource-content">
          <h3 className="resource-title">{resource.title}</h3>
          <p className="resource-description">{resource.description}</p>
        </div>
      </a>
    </div>
  );
}

ResourceItem.propTypes = {
  resource: PropTypes.object,
};

export default ResourceItem;
