import React from 'react';

import './TestCard.css';
import PropTypes from 'prop-types';

function TestCard({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt="" />
      <h4>{item.title}</h4>
      <span>{item.price}</span>
    </div>
  );
}

TestCard.propTypes = {
  item: PropTypes.object
};

export default TestCard;
