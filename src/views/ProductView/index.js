import React from 'react';

import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import CarouselSlick from 'src/components/CarouselSlick';
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';

const useStyles = makeStyles(() => ({
  product_policy: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 0',
    borderBottom: '1px solid #e7edd7'
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
    border: '1px dashed #738136',
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
    flex: '0 0 100%',
    padding: '0 20px'
  },
  product_policy_description: {
    display: 'block'
  },
  product_policy_title: {
    fontFamily: 'Yeseva One,Helvetica,Arial,sans-serif',
    fontSize: '28px',
    lineHeight: '32px'
  },
  product_review_grid: {
    backgroundColor: '#fafbf7',
    paddingTop: '60px',
    paddingBottom: '50px'
  },
  review_button: {
    background: "#738136",
    '&:hover': {
      background: "#636e33"
    }
  },
  product_related_grid: {
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '50%',
      backgroundColor: '#fafbf7',
    }
  },
  product_related: {
    position: 'relative',
    padding: '70px 0 60px',
    backgroundImage: `url(${'static/images/collections-bg.png'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '10px'
  },
  pDetail_title: {
    fontFamily: 'Yeseva One, sans-serif',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '28px',
    color: '#fff',
    marginBottom: '45px'
  }
}));

function ProductView() {
  const classes = useStyles();

  const productList = [
    {
      title: "Son kem Nhung (Lì mượt không silicon)",
      image: "static/images/sp1.jpg",
      price: "150.000đ"
    },
    {
      title: "Sữa tắm hương HOA SỮA Hà Nội và Em (Giới hạn 2000 chai duy nhất)",
      image: "static/images/sp2.jpg",
      price: "150.000đ"
    },
    {
      title: "Nước hoa Unisex Dreamer",
      image: "static/images/sp3.jpg",
      price: "350.000đ"
    },
    {
      title: "Kem Chống Nắng Hây Hây",
      image: "static/images/sp4.jpg",
      price: "260.000đ"
    },
    {
      title: "Dầu gội thảo dược Tóc Mây",
      image: "static/images/sp5.jpg",
      price: "325.000đ"
    },
    {
      title: "Son Lụa không chì",
      image: "static/images/sp6.jpg",
      price: "180.000đ"
    },
    {
      title: "Bột khử mùi Wings Up - Khô thoáng tuyệt đối",
      image: "static/images/sp7.jpg",
      price: "115.000đ"
    },
    {
      title: "Serum dưỡng da ban đêm Hoàng Lan",
      image: "static/images/sp8.jpg",
      price: "180.000đ"
    },
  ];

  return (
    <Page>
      <Container maxWidth="lg">
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
      <Box className={classes.product_review_grid}>
        <Container maxWidth="lg">
          <Box className={classes.product_reviews}>
            <Grid
              container
              display="flex"
              justifyContent="center"
            >
              <Typography
                style={{ color: "#000" }}
                className={classes.pDetail_title}
              >
                Đánh giá sản phẩm
              </Typography>
            </Grid>
            <Grid container display="flex" justifyContent="space-between">
              <Grid item style={{ width: '100%', borderRightWidth: '1px solid #ccc' }}>
                4.9
                Theo 600 đánh giá
              </Grid>
              <Grid item>
                Sao
              </Grid>
              <Grid item>
                Ảnh
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.review_button}
                  endIcon={<BorderColorIcon />}
                >
                  <b>Viết đánh giá</b>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box className={classes.product_related_grid}>
        <Container maxWidth="lg">
          <Box className={classes.product_related}>
            <Grid
              container
              display="flex"
              justifyContent="center"
            >
              <Typography className={classes.pDetail_title}>
                Sản phẩm liên quan
              </Typography>
            </Grid>
            <Box style={{ padding: '30px 30px 30px 50px' }}>
              <CarouselSlick items={productList} />
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Page>
  );
}

export default ProductView;
