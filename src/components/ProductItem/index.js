import React from 'react';

import './ProductItem.css';
import PropTypes from 'prop-types';

function ProductItem({ product }) {
  return (
    <div className="product-grid-column">
      <div className="product-grid">
        <div className="product-thumbnail">
          <a href="/sp">
            <img src={product.image} alt="" />
          </a>
        </div>
        <a className="product-title" href="/sp">{product.title}</a>
        <div className="product-price">
          <span>{product.price}</span>
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
