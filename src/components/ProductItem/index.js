import React from 'react';

import './ProductItem.css';
import PropTypes from 'prop-types';

function ProductItem({ product }) {
  return (
    <div className="product-grid">
      <div className="thumbnail">
        <a href="">
          <img src={product.image} alt="" />
        </a>
      </div>
      <a className="title" href="">{product.title}</a>
      <div className="price">
        <span>{product.price}</span>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
