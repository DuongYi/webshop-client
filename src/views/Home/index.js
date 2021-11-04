/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  makeStyles
} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

import BlogSlick from "src/components/BlogSlick";
import CarouselSlick from "src/components/CarouselSlick";
import Footer from "src/components/Footer";
import Page from "src/components/Page";
import ResourcesSlick from "src/components/ResourcesSlick";
import TrackSlick from "src/components/TrackSlick";

import AboutItem from './components/AboutItem';
import HomeBanner from "./components/HomeBanner";
import NewsSlick from "./components/NewsSlick";

const useStyles = makeStyles((theme) => ({
  home_title: {
    color: '#4c503d',
    fontSize: '36px',
    fontFamily: " Yeseva One, cursive",
    padding: '40px 0 0',
  },
  home_hot_title: {
    color: '#4c503d',
    fontSize: '36px',
    fontFamily: " Yeseva One, cursive",
    padding: '40px 0 0',
    margin: '0 0 15px'
  },
  home_hot_product: {
    padding: '60px 0 0'
  },
  home_store: {
    width: '100%',
    maxWidth: '1280px',
    padding: '0 15px',
    margin: '0 auto',
    '& img': {
      textIndent: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      maxWidth: '100%',
      margin: 0,
      'vertical-align': 'middle'
    }
  },
  home_store_title1: {
    color: '#4c503d',
    fontSize: '36px',
    fontFamily: " Yeseva One, cursive",
    padding: '40px 0 0',
    marginRight: '-50px'
  },
  home_store_title2: {
    color: '#738136',
    fontSize: '36px',
    fontFamily: " Yeseva One, cursive",
    padding: '40px 0 0',
    marginLeft: '-45px'
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
      height: '100%',
      backgroundImage: `url(${'static/images/collections-bg.png'})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '640px',
      paddingBottom: '30px',
      zIndex: -1
    }
  },
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
  home_resources: {
    marginTop: '74px',
    overflow: 'hidden',
    paddingBottom: '20px'
  },
  home_resources_header: {
  },
  home_resources_btn: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundColor: '#e7edd7',
    padding: '0 30px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.21,
    letterSpacing: '2.8px',
    color: '#738136',
    height: '45px',
    border: 0,
    transition: 'all 0.3s',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#738136'
    }
  },
  home_react: {
  },
  home_react_title: {
    margin: '0 0 15px',
    color: '#fff',
    fontSize: '36px',
    fontFamily: " Yeseva One, cursive",
    fontWeight: 'bold'
  },
  box_react: {
    padding: '80px 0 165px',
    backgroundImage: `url(${'static/images/mewspapers.png'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '15px',
  },
  homeNews_thumbnail: {
    textAlign: 'center',
    width: '100%',
    marginTop: '-100px',
    '& img': {
      maxWidth: '100%'
    }
  },
  home_blog: {
    width: '100%',
    padding: '0 15px',
    margin: '0 0 24px',
    display: 'flex',
    direction: 'column'
  },
  tabSelected: {
    '&.Mui-selected': {
      color: '#fff',
      transition: 'all ease 0.3s'
    },
    '&:hover': {
      color: '#738136',
      transition: 'all ease 0.3s'
    }
  },
  [theme.breakpoints.down('sm')]: {
    home_about: {
      display: 'none'
    },
    home_hot_product: {
      padding: 0
    },
    home_hot_title: {
      padding: 0
    },
    homeNews_thumbnail: {
      '& img': {
        height: '270px',
        'object-fit': 'cover',
        'object-position': '39%',
        transform: 'none!important'
      }
    },
    home_react: {
      width: 'auto',
      '&.MuiContainer-maxWidthLg': {
        maxWidth: '100%',
        padding: 0,
      }
    },
    box_react: {
      borderRadius: 0
    },
    home_store_title1: {
      fontSize: '28px',
      whiteSpace: 'nowrap'
    },
    home_store_title2: {
      fontSize: '28px',
      whiteSpace: 'nowrap'
    }
  },
  [theme.breakpoints.down('xs')]: {
    home_title: {
      fontSize: '28px'
    },
    home_hot_title: {
      fontSize: '28px'
    },
    home_store: {
      '& img': {
        height: '75%',
        width: '75%'
      }
    },
    box_react: {
      padding: '0px 0 165px',
    },
    home_react_title: {
      fontSize: '28px'
    },
    home_store_title1: {
      fontSize: '25px',
    },
    home_store_title2: {
      fontSize: '25px',
      marginLeft: '-80px'
    }
  }
}));

function Home() {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState('sp1');

  const tabs = [
    { value: 'sp1', label: 'Son môi' },
    { value: 'sp2', label: 'Chăm sóc da' },
    { value: 'sp3', label: 'Chăm sóc tóc' },
    { value: 'sp4', label: 'Hương thơm' },
    { value: 'sp5', label: 'Chăm sóc cơ thể' },
    { value: 'sp6', label: 'Trang điểm' },
  ];

  const handleTabsChange = (event, newValue) => {
    setCurrentTab(newValue);
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
    <Page>
      <HomeBanner />
      <Container maxWidth="lg" style={{ marginTop: '50px' }}>
        <Grid
          container
          className={classes.home_about}
        >
          <Grid item xs={6} style={{ padding: '80px' }}>
            <img style={{ width: '100%', height: '100%' }} src="static/images/test1.jpg" alt="" />
          </Grid>
          <Grid item xs={6} style={{ margin: '80px 0 0' }}>
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
              style={{
                background: '#de8d1e', borderRadius: 1000, padding: '10px 25px', color: '#fff'
              }}
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
            mb={2}
            className={classes.home_hot_product}
          >
            <Typography
              variant="h2"
              align="center"
              className={classes.home_hot_title}
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
            className={classes.home_store}
            style={{ padding: '60px 0 0' }}
          >
            <Typography
              variant="h2"
              className={classes.home_store_title1}
            >
              Gian hàng
            </Typography>
            <span>
              <img src="static/images/4la.png" alt="" />
            </span>
            <Typography
              variant="h2"
              className={classes.home_store_title2}
            >
              Cỏ mềm
            </Typography>
          </Grid>
        </Box>
      </Container>

      <Box className={classes.home_shop_container}>
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
            value={currentTab}
            onChange={handleTabsChange}
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                background: '#738136', height: '100%', borderRadius: '10px', zIndex: 1
              }
            }}
          >
            {tabs.map((tab) => (
              <Tab
                label={tab.label}
                key={tab.value}
                value={tab.value}
                className={classes.tabSelected}
                style={{
                  fontWeight: 'bold',
                  zIndex: 999,
                }}
              />
            ))}
          </Tabs>
          <Box mt={6}>
            <CarouselSlick items={productList} />
          </Box>
          <Box mt={3}>
            <CarouselSlick items={productList} />
          </Box>
          <Box mt={3} display="flex" justifyContent="center">
            <a href="/" className={classes.allShop_button}>
              Xem thêm
            </a>
          </Box>
        </Container>
        <Box />
      </Box>

      <Container maxWidth="lg" className={classes.home_resources}>
        <Grid
          container
          display="flex"
          direction="column"
          alignItems="center"
          className={classes.home_resources_header}
        >
          <Typography
            variant="h2"
            align="center"
            className={classes.home_title}
            style={{
              margin: '0 0 5px',
            }}
          >
            100% Minh bạch nguyên liệu
          </Typography>
          <Typography style={{
            margin: '14px 0', fontSize: '14px', color: "#4c503d", fontWeight: 400
          }}
          >
            Sản phẩm an LÀNH - con người chân THẬT
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a href="/" className={classes.home_resources_btn} style={{ textDecoration: 'none' }}>
              Xem thêm
            </a>
          </Box>
        </Grid>
        <ResourcesSlick />
      </Container>

      <Container maxWidth="lg" className={classes.home_react}>
        <Box mt={6} className={classes.box_react}>
          <Grid
            mb={2}
            style={{ padding: '60px 0 0' }}
          >
            <Typography
              variant="h2"
              align="center"
              className={classes.home_react_title}
            >
              Báo chí nói gì về Cỏ Mềm
            </Typography>
          </Grid>
          <NewsSlick />
        </Box>
        <div className={classes.homeNews_thumbnail}>
          <img
            style={{ textIndent: '100%', whiteSpace: 'nowrap', overflow: 'hidden' }}
            src="static/images/Title.png"
            alt="home new title"
          />
        </div>
      </Container>

      <Container maxWidth="lg" style={{ marginTop: '60px' }}>
        <TrackSlick />
      </Container>

      <Box mt={6}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.home_blog}
        >
          <Typography
            variant="h2"
            mb={2}
            className={classes.home_title}
          >
            Blog làm đẹp
          </Typography>
          <Typography
            style={{
              fontSize: '16px', color: "#4c503d", lineHeight: 1.5, textAlign: 'center'
            }}
          >
            Là phụ nữ, nhất định phải xinh đẹp và tự tin. Hãy cùng Cỏ mềm HomeLab
            <br />
            khám phá những bí quyết làm đẹp thú vị nhé!
          </Typography>
        </Grid>
        <BlogSlick />
      </Box>
      <Footer />
    </Page>
  );
}

export default Home;
