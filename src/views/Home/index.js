import React, { useState } from "react";

import { makeStyles } from '@material-ui/core';
import {
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import CarouselSlick from "src/components/CarouselSlick";

import AboutItem from './components/AboutItem';
import HomeBanner from "./components/HomeBanner";

const useStyles = makeStyles(() => ({
  root: {
    color: '#000'
  },
  home_about: {
  },
  home_product: {
  },
  arrow: {
    color: "#000"
  },
  home_shop_container: {
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 27,
      left: 0,
      width: '100%',
      backgroundImage: `url(${'static/images/collections-bg.png'})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '640px',
      zIndex: -1
    }
  }
}));

function Home() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const items = [
    {
      link: "https://www.facebook.com/VSsYii",
      image: "static/images/banner1.jpg"
    },
    {
      link: "https://www.facebook.com/VSsYii",
      image: "static/images/banner2.jpg"
    },
  ];

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
    <>
      <HomeBanner />
      <Container maxWidth="lg" style={{ marginTop: '50px' }}>
        <Grid
          container
          spacing={12}
          className={classes.home_about}
        >
          <Grid item xs={5}>
            <img style={{ width: '100%', height: '100%' }} src="static/images/test1.jpg" alt="" />
          </Grid>
          <Grid item xs={7} mt={5}>
            <Typography
              variant="h2"
              style={{
                margin: '0 0 5px', color: '#4c503d', fontSize: '42px', fontFamily: " Yeseva One, cursive", fontWeight: 'bold'
              }}
            >
              Chuyện của cỏ
            </Typography>
            <Typography
              variant="h6"
              style={{ margin: '16px 0', color: '#4c503d', fontSize: '16px' }}
            >
              <b>
                Tôi bắt đầu Ước mơ Xanh của mình, nghiên cứu những sản
                phẩm thuần tuý, tối giản, chỉ tập trung vào mục đính sử dụng của chính nó.

              </b>
            </Typography>
            <Typography
              variant="h6"
              style={{
                margin: '16px 0', color: '#4c503d', fontSize: '16px', lineHeight: 1.5
              }}
            >
              Nghĩa là nước giặt thì chỉ cần giặt sạch, chứ không cần phải nhiều bọt.
              Nghĩa là dưỡng da dưỡng tóc thì để da tóc khoẻ từ gốc chứ
              không cần cảm giác giả mướt tay từ silicon.
              Tôi từ chối mọi sản phẩm chứa hạt vi nhựa, chỉ dùng cafe
              xay mịn và muối biển để tẩy tế bào chết.
              Tôi không dùng những hoá chất tẩy rửa mà thay bằng xà bông dầu
              dừa và quả bồ hòn xưa cũ...
            </Typography>
            <Button
              variant="contained"
              color="success"
              style={{ background: '#de8d1e', borderRadius: 1000, padding: '10px 25px' }}
            >
              <b>Xem thêm</b>
            </Button>
            <Box mt={6}>
              <Carousel
                animation="fade" // Previous Example
                fullHeightHover="true"
                stopAutoPlayOnHover="false"
                indicatorIconButtonProps={{
                  style: {
                    padding: '10px',
                  }
                }}
                indicatorContainerProps={{
                  style: {
                    marginTop: '50px', // 5
                    textAlign: 'center',
                    marginBottom: '25px', // 4
                  }
                }}
                className={classes.root}
              >
                {
                items.map((item) => <AboutItem key={item} item={item} />)
              }
              </Carousel>
            </Box>
          </Grid>
        </Grid>
        <Box mb={0}>
          <Grid
            container
            mb={2}
            display="flex"
            justifyContent="center"
            className={classes.home_about}
            style={{ padding: '60px 0 0' }}
          >
            <Typography
              variant="h2"
              style={{
                margin: '0 0 15px', color: '#4c503d', fontSize: '36px', fontFamily: " Yeseva One, cursive", fontWeight: 'bold'
              }}
            >
              Sản phẩm bán chạy nhất
            </Typography>
          </Grid>
          <CarouselSlick items={productList} />
        </Box>
        <Box>
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            className={classes.home_about}
            style={{ padding: '60px 0 0' }}
          >
            <Typography
              variant="h2"
              style={{
                margin: '0 0 15px', color: '#4c503d', fontSize: '36px', fontFamily: " Yeseva One, cursive"
              }}
            >
              Gian hàng
            </Typography>
            <span>
              <img src="static/images/4la.png" alt="" />
            </span>
            <Typography
              variant="h2"
              style={{
                margin: '0 0 15px', color: '#738136', fontSize: '36px', fontFamily: " Yeseva One, cursive"
              }}
            >
              Cỏ mềm
            </Typography>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="" className={classes.home_shop_container}>
        <Container maxWidth="lg" style={{ zIndex: 1 }}>
          <Tabs
            style={{
              background: "#fff",
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              paddingBottom: '15px',
              paddingLeft: '20px',
              paddingRight: '20px'
            }}
            sx={{

            }}
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                background: '#738136', height: '100%', borderRadius: '10px', zIndex: 1
              }
            }}
          >
            <Tab
              label="Son môi"
              classes={{ selected: classes.selectedTab }}
              sx={{
                fontWeight: 'bold',
                zIndex: 999,
                '&.Mui-selected': {
                  color: '#fff',
                },
                '&:hover': {
                  color: '#738136'
                }
              }}
            />
            <Tab
              label="Chăm sóc da"
              sx={{
                fontWeight: 'bold',
                zIndex: 999,
                '&.Mui-selected': {
                  color: '#fff',
                },
                '&:hover': {
                  color: '#738136'
                }
              }}
            />
            <Tab
              label="Chăm sóc tóc"
              sx={{
                fontWeight: 'bold',
                zIndex: 999,
                '&.Mui-selected': {
                  color: '#fff',
                },
                '&:hover': {
                  color: '#738136'
                }
              }}
            />
            <Tab
              label="Hương thơm"
              sx={{
                fontWeight: 'bold',
                zIndex: 999,
                '&.Mui-selected': {
                  color: '#fff',
                },
                '&:hover': {
                  color: '#738136'
                }
              }}
            />
            <Tab
              label="Chăm sóc cơ thể"
              sx={{
                fontWeight: 'bold',
                zIndex: 999,
                '&.Mui-selected': {
                  color: '#fff',
                },
                '&:hover': {
                  color: '#738136'
                }
              }}
            />
            <Tab
              label="Trang điểm"
              sx={{
                fontWeight: 'bold',
                zIndex: 999,
                '&.Mui-selected': {
                  color: '#fff',
                },
                '&:hover': {
                  color: '#738136'
                }
              }}
            />
          </Tabs>
        </Container>
        <Box />
      </Container>
    </>
  );
}

export default Home;