import React from 'react';

import { Box, Grid, makeStyles } from '@material-ui/core';

import ProductItem from 'src/components/ProductItem';

const useStyles = makeStyles(() => ({
  allShop_button: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '280px',
    height: '50px',
    borderRadius: '25px',
    border: '2px solid #fff',
    backgroundColor: 'hsla(0,0%,100%,.6)',
    padding: '0 50px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all ease 0.3s',
    '&:hover': {
      backgroundColor: '#738136',
    }
  },
}));

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

function TabData() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        {productList.map((item) => (
          <Grid key={item.title} item lg={3} md={4} xs={6}>
            <ProductItem key={item} product={item} />
          </Grid>
        ))}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <a href="/" className={classes.allShop_button}>
          Xem thêm
        </a>
      </Box>
    </>
  );
}

export default TabData;
