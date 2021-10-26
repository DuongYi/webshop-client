import React from 'react';

import './TrackSlickItem.css';

import PropTypes from 'prop-types';

function TrackSlickItem({ track }) {
  return (
    <div className="track-grid">
      <div className="track-card">
        <div className="track-card-thumbnail">
          <img src={track.image} alt={track.description} />
        </div>
        <div className="track-card-content">
          <p className="track-card-content-description">
            {track.description}
          </p>
        </div>
      </div>
    </div>
  );
}

TrackSlickItem.propTypes = {
  track: PropTypes.object
};

export default TrackSlickItem;
