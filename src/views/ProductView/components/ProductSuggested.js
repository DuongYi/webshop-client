import React from 'react';

import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyle = makeStyles({
  pSuggested_column: {
    position: 'relative',
    boxSizing: 'border-box',
    minHeight: '1px',
    verticalAlign: 'top',
    marginLeft: '0!important',
    marginRight: '0!important',
    padding: '15px',
    width: '50%'
  },
  pSuggested_item: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '2px solid rgba(115,129,54,.08)',
    borderRadius: '5px',
    height: '100%'
  },
  pSuggested_item_thumbnail: {
    position: 'relative',
    width: '60px',
    marginRight: '15px',
    overflow: 'hidden',
    borderRadius: '15px',
    '&:before': {
      content: "''",
      display: 'block',
      paddingTop: '100%'
    },
    '& a': {
      textDecoration: 'none',
      transition: 'all ease 0.3s',
      cursor: 'pointer'
    },
    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      'object-fit': 'contain',
      transition: 'all ease 0.3s',
      '&:hover': {
        transform: 'scale(1.2)'
      }
    }
  },
  pSuggested_item_content: {
    flex: 1
  },
  pSuggested_item_title: {
    color: '#4c503d',
    fontWeight: 600,
    fontSize: '14px',
    lineBreak: '16px',
    marginBottom: '8px',
    cursor: 'pointer',
    '& a': {
      textDecoration: 'none',
      fontWeight: 'inherit'
    },
    '&:hover': {
      color: '#738136'
    }
  },
  pSuggested_item_prices: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '16px',
    '& ins': {
      color: '#738136',
      textDecoration: 'none'
    }
  }
});

function ProductSuggested({ product }) {
  const classes = useStyle();

  return (
    <Box className={classes.pSuggested_column}>
      <Box className={classes.pSuggested_item}>
        <Box className={classes.pSuggested_item_thumbnail}>
          <a href="/">
            <img src={product.image} alt={product.title} />
          </a>
        </Box>
        <Box className={classes.pSuggested_item_content}>
          <h4 className={classes.pSuggested_item_title}>{product.title}</h4>
          <Box className={classes.pSuggested_item_prices}>
            <ins>{product.price}</ins>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

ProductSuggested.propTypes = {
  product: PropTypes.object
};

export default ProductSuggested;
