import React from 'react';

import {
  Box, Grid, makeStyles
} from '@material-ui/core';

import './TabData.css';

import ProductItem from 'src/components/ProductItem';

const useStyles = makeStyles((theme) => ({
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
    color: '#079b61',
    fontSize: '16px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all ease 0.3s',
    '&:hover': {
      backgroundColor: '#079b61',
      color: '#fff',
    }
  },
  mTab_Data: {
    display: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    mTab_Data: {
      display: 'flex'
    }
  }
}));

const productList = [
  {
    id: "1",
    title: "Dầu gội bưởi La Vitalité",
    image: "static/images/Product/buoi-huong-nhu.png",
    price: "250.000đ"
  },
  {
    id: "2",
    title: "Dầu xả La Vitalité",
    image: "static/images/Product/dau-xa.png",
    price: "250.000đ"
  },
  {
    id: "3",
    title: "Dầu gội dược liệu làm đen tóc Vitalité",
    image: "static/images/Product/den-toc.png",
    price: "300.000đ"
  },
  {
    id: "4",
    title: "Combo Dầu gội & Dầu xả chăm sóc tóc toàn diện La Vitalité",
    image: "static/images/TopSelling/combo.png",
    price: "450.000đ"
  },
];

function TabData() {
  const classes = useStyles();

  return (
    <>
      <div className="tTab_Data">
        <Grid container>
          {productList.map((item) => (
            <Grid key={item.title} item md={3} xs={6}>
              <ProductItem key={item} product={item} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Grid container className={classes.mTab_Data}>
        {productList.slice(0, 4).map((item) => (
          <Grid key={item.title} item md={3} xs={6}>
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
