import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import Footer from 'src/components/Footer';
import Page from 'src/components/Page';

import ProductDetail from './ProductDetail';

const useStyles = makeStyles((theme) => ({
  product_policy: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 0',
    borderBottom: '1px solid #49856e38'
  },
  product_policy_item: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 15px',
    fontWeight: 600,
    fontSize: '15px',
    lineHeight: '21px',
    color: '#6a6a69',
    textDecoration: 'none',
    transition: 'all ease 0.3s'
  },
  product_policy_icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 50px',
    maxWidth: '50px',
    width: '100%',
    height: '50px',
    border: '1px dashed #49856e',
    borderRadius: '100px',
    '& img': {
      textIndent: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      verticalAlign: 'middle',
      margin: 0,
      maxWidth: '100%'
    }
  },
  product_policy_content: {
    padding: '0 20px',
    whiteSpace: 'nowrap'
  },
  product_policy_description: {
    display: 'block',
    overflow: 'hidden'
  },
  product_policy_title: {
    fontFamily: 'Yeseva One,Helvetica,Arial,sans-serif',
    fontSize: '28px',
    lineHeight: '32px'
  },
  [theme.breakpoints.down('sm')]: {
    container_product_policy: {
      display: 'none'
    }
  },
}));

function ProductView3() {
  const classes = useStyles();

  return (
    <Page style={{ background: '#f2f2f2' }}>
      <Container className={classes.container_product_policy} maxWidth="lg">
        <Box className={classes.product_policy}>
          <a href="/" className={classes.product_policy_item}>
            <Box
              className={classes.product_policy_icon}
              style={{ border: '1px dashed #de8d1e' }}
            >
              <img src="static/images/icon-phone.svg" alt="Miễn phí vận chuyển" />
            </Box>
            <Box className={classes.product_policy_content}>
              <span
                className={classes.product_policy_description}
                style={{ color: '#de8d1e' }}
              >
                Hotline mua hàng
              </span>
              <span
                className={classes.product_policy_title}
                style={{ color: '#de8d1e' }}
              >
                1800.646.890
              </span>
            </Box>
          </a>
          <a href="/" className={classes.product_policy_item}>
            <Box className={classes.product_policy_icon}>
              <img src="static/images/icon-location.svg" alt="Miễn phí vận chuyển" />
            </Box>
            <Box className={classes.product_policy_content}>
              <span className={classes.product_policy_description}>Hệ thống cửa hàng</span>
            </Box>
          </a>
          <a href="/" className={classes.product_policy_item}>
            <Box className={classes.product_policy_icon}>
              <img src="static/images/icon-tutorial.svg" alt="Miễn phí vận chuyển" />
            </Box>
            <Box className={classes.product_policy_content}>
              <span className={classes.product_policy_description}>Hướng dẫn mua hàng</span>
            </Box>
          </a>
        </Box>
      </Container>
      <ProductDetail />
      <Footer />
    </Page>
  );
}

export default ProductView3;
