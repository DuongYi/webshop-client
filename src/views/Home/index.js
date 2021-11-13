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
import MobileAboutUs from "./components/MobileAboutUs";
import NewsSlick from "./components/NewsSlick";
import TabData from "./components/TabData";

const useStyles = makeStyles((theme) => ({
  home_page: {
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      height: '85%',
      width: '100%',
      background: '#f2f2f2',
      zIndex: -1
    }
  },
  product_container: {
    padding: '0 30px'
  },
  home_title: {
    color: '#4c503d',
    fontSize: '36px',
    fontFamily: "utm-god-bold",
    fontWeight: 'bold',
    padding: '40px 0 0',
  },
  home_hot_title: {
    color: '#4c503d',
    fontSize: '36px',
    fontFamily: "utm-god-bold",
    fontWeight: 'bold',
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
    fontFamily: " utm-god-bold",
    fontWeight: 'bold',
    padding: '40px 0 0',
    marginRight: '-50px'
  },
  home_store_title2: {
    color: '#49856e',
    fontSize: '36px',
    fontFamily: " utm-god-bold",
    fontWeight: 'bold',
    padding: '40px 0 0',
    marginLeft: '-45px'
  },
  home_product: {
  },
  mobile_about_us: {
    display: 'none'
  },
  arrow: {
    color: "#000"
  },
  home_shop_grid: {
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 27,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${'https://a-static.besthdwallpaper.com/valentyn-ruzove-tulipany-s-srdce-fabric-tapeta-na-zed-2560x1080-13881_14.jpg'})`,
      filter: 'blur(1.5px)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      paddingBottom: '30px',
      zIndex: -1
    }
  },
  home_shop_container: {
    zIndex: 1
  },
  shop_Tabs: {
    background: "#f2f2f2",
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    paddingBottom: '15px',
    '& .MuiTabs-flexContainer': {
      justifyContent: 'center',
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
    backgroundColor: '#49856e38',
    padding: '0 30px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.21,
    letterSpacing: '2.8px',
    color: '#49856e',
    height: '45px',
    border: 0,
    transition: 'all 0.3s',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#49856e'
    }
  },
  home_react: {
  },
  home_react_title: {
    margin: '0 0 15px',
    color: '#fff',
    fontSize: '36px',
    fontFamily: " utm-god-bold",
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
      transition: 'all ease 0.3s'
    },
    '&:hover': {
      color: '#49856e',
      transition: 'all ease 0.3s'
    }
  },
  home_review_react: {
    boxShadow: '0 10px 15px rgb(0 0 0 / 20%)',
    background: '#fff',
    borderRadius: '17px',
    padding: 0,
    marginTop: '48px',
    display: 'flex'
  },
  box_review_react: {
    padding: '0 0 50px',
    backgroundImage: `url(${'static/images/mewspapers.png'})`,
    backgroundSize: 'cover',
    width: '90%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '15px',
  },
  box_left_react: {
    width: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& a': {
      display: 'flex',
      margin: '15px',
      color: '#49856e',
      textDecoration: 'none',
      transition: 'all ease 0.3s',
      '& i': {
        fontSize: '15px'
      },
      '&:hover': {
        color: '#8c8d8a',
        transition: 'all ease 0.3s',
      }
    }
  },
  bLeft_react_grid: {
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      background: '#49856e',
      height: '30px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    home_about: {
      display: 'none'
    },
    mobile_about_us: {
      display: 'block'
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
    },
    home_shop_grid: {
      '&:before': {
        top: 63,
      }
    },
    home_shop_container: {
      '&.MuiContainer-root': {
        padding: 0
      }
    },
    shop_Tabs: {
      '& .MuiTabs-flexContainer': {
        justifyContent: 'flex-start',
      }
    },
    home_review_react: {
      borderRadius: 0,
    },
    box_review_react: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
  [theme.breakpoints.down('xs')]: {
    home_title: {
      fontSize: '28px'
    },
    product_container: {
      padding: 0
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
    },
    shop_Tabs: {
      '& .MuiTabs-flexContainer': {
        padding: '0 15px'
      }
    }
  }
}));

function Home() {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState('sp1');

  const tabs = [
    { value: 'sp1', label: 'Chăm sóc tóc' },
    { value: 'sp2', label: 'Chăm sóc da' },
    { value: 'sp3', label: 'Son môi' },
    { value: 'sp4', label: 'Hương thơm' },
    { value: 'sp5', label: 'Chăm sóc cơ thể' },
    { value: 'sp6', label: 'Trang điểm' },
  ];

  const handleTabsChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  const items = [
    {
      link: "/",
      image: "static/images/Banner/Lavitalite-Cover banner1.jpg"
    },
    {
      link: "/",
      image: "static/images/Banner/Lavitalite-Cover banner2.jpg"
    },
  ];

  const productList = [
    {
      id: '1',
      title: "Dầu gội bưởi La Vitalité",
      image: "static/images/TopSelling/buoi-huong-nhu.png",
      price: "200.000đ"
    },
    {
      id: '2',
      title: "Dầu xả La Vitalité",
      image: "static/images/TopSelling/dau-xa.png",
      price: "200.000đ"
    },
    {
      id: '3',
      title: "Dầu gội dược liệu làm đen tóc Vitalité",
      image: "static/images/TopSelling/den-toc.png",
      price: "300.000đ"
    },
    {
      id: '4',
      title: "Combo Dầu gội & Dầu xả chăm sóc tóc toàn diện La Vitalité",
      image: "static/images/TopSelling/combo.png",
      price: "450.000đ"
    },
  ];

  return (
    <Page>
      <Box className={classes.home_page}>
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
                  margin: '0 0 5px', color: '#4c503d', fontSize: '42px', fontFamily: " utm-god-bold", fontWeight: 'bold'
                }}
              >
                Chuyện của TPX
              </Typography>
              <Typography
                variant="h6"
                style={{ margin: '16px 0', color: '#4c503d', fontSize: '16px' }}
              >
                <b>
                  Câu chuyện về “MẸ” như kỷ niệm bao năm không bao giờ vơi
                  trong lòng. ấp ủ điều gì đó để “SỨC SỐNG” còn mãi với thời
                  gian, gìn giữ tinh túy từ mẹ thiên nhiên, phục hồi “SỨC
                  SỐNG” tự nhiên của con người và vạn vật.
                </b>
              </Typography>
              <Typography
                variant="h6"
                style={{
                  margin: '16px 0', color: '#4c503d', fontSize: '16px', lineHeight: 1.5, fontFamily: "utm-god"
                }}
              >
                Sau khi có bé đầu lòng, MẸ chuyển lên chăm con giúp mình.
                Tới giờ ngẫm lại, thời gian bên mẹ nhiều hơn bên chồng.
                MẸ là người tinh tế, dù là con dâu, nhưng mẹ quan tâm tới cả
                những điều nhỏ nhặt nhất. Tuần đầu sau sinh, căng thẳng
                triền miên cùng với những thay đổi nội tiết tố. Cuộc sống
                24/7 của mình không còn chút nào giành cho bản thân. Chỉ
                có tiếng con khóc, những xáo trộn từ sinh linh mới, cùng với bỉm và sữa...
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

          {/* <Box className={classes.product_container} mb={0}>
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
        </Box> */}

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
                TPX
              </Typography>
            </Grid>
          </Box>
        </Container>

        <Box className={classes.home_shop_grid}>
          <Container className={classes.home_shop_container} maxWidth="lg">
            <Tabs
              className={classes.shop_Tabs}
              value={currentTab}
              onChange={handleTabsChange}
              variant="scrollable"
              scrollButtons="auto"
              TabIndicatorProps={{
                style: {
                  background: '#49856e', borderRadius: '10px', zIndex: 1,
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
                    fontSize: '17px',
                    textTransform: 'none',
                  }}
                />
              ))}
            </Tabs>
            <Box mt={3}>
              {currentTab === 'sp1' && <TabData />}
              {currentTab === 'sp2' && <TabData /> }
              {currentTab === 'sp3' && <TabData />}
              {currentTab === 'sp4' && <TabData />}
              {currentTab === 'sp5' && <TabData />}
              {currentTab === 'sp6' && <TabData />}
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
                margin: '0 0 5px'
              }}
            >
              100% Minh bạch nguyên liệu
            </Typography>
            <Typography style={{
              margin: '14px 0', fontSize: '15px', color: "#4c503d", fontWeight: 400, fontFamily: 'utm-god'
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

        {/* mobile Home about us */}
        <Box className={classes.mobile_about_us}>
          <MobileAboutUs />
        </Box>

        {/* <Container maxWidth="lg" className={classes.home_react}>
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
              Báo chí nói gì về Bưởi
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
      </Container> */}

        {/* <Container maxWidth="lg" style={{ marginTop: '60px' }}>
        <TrackSlick />
      </Container> */}

        <Container maxWidth="lg" className={classes.home_review_react}>
          <Box className={classes.box_review_react}>
            <Grid
              mb={2}
              style={{ padding: '60px 0 0' }}
            >
              <Typography
                variant="h2"
                align="center"
                className={classes.home_react_title}
              >
                Khách hàng nói gì về chúng tôi
              </Typography>
            </Grid>
            <TrackSlick />
          </Box>
          <Box className={classes.box_left_react}>
            <Box style={{
              height: '100px', width: '1px', background: '#ccc', marginBottom: '30px'
            }}
            />
            <Box className={classes.bLeft_react_grid} display="block">
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-telegram-plane" />
                  </a>
                </li>
              </ul>
            </Box>
            <Box style={{
              height: '100px', width: '1px', background: '#ccc', marginTop: '30px'
            }}
            />
          </Box>
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
                fontSize: '17.5px', color: "#4c503d", lineHeight: 1.5, textAlign: 'center', fontFamily: 'utm-god'
              }}
            >
              Là phụ nữ, nhất định phải xinh đẹp và tự tin. Hãy cùng TPX HomeLab
              <br />
              khám phá những bí quyết làm đẹp thú vị nhé!
            </Typography>
          </Grid>
          <BlogSlick />
        </Box>
        <Footer />
      </Box>
    </Page>
  );
}

export default Home;
