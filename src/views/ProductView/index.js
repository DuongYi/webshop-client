/* eslint-disable no-unused-vars */
import React from 'react';

import { makeStyles } from '@material-ui/core';
import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material';

import CarouselSlick from "src/components/CarouselSlick";
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';

const useStyles = makeStyles(() => ({
  product_related: {
    padding: '70px 0 60px',
    backgroundImage: `url(${'static/images/collections-bg.png'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '10px',
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
        {/* <Box className={classes.product_related}>
          <Grid
            container
            display="flex"
            justifyContent="center"
          >
            <Typography
              variant="h2"
              style={{
                margin: '0 0 60px', color: '#fff',
                fontSize: '24px', fontFamily: " Yeseva One, cursive"
              }}
            >
              Sản phẩm liên quan
            </Typography>
          </Grid>
          <Box style={{ padding: '0 20px 0 40px' }}>
            <CarouselSlick items={productList} />
          </Box>

        </Box> */}
        <h1>Hello</h1>
      </Container>
      <Footer />
    </Page>
  );
}

export default ProductView;
