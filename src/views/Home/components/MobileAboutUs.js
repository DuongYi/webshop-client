import React from 'react';

import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    padding: '0 16px',
    '& a': {
      textDecoration: 'none'
    }
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading_title: {
    textAlign: 'center',
    fontSize: '28px',
    fontFamily: 'utm-god-bold',
    color: '#4c503d',
    fontWeight: 'bold',
    marginBottom: '10px',
    '& span': {
      display: 'block',
      fontSize: '22px',
      fontFamily: 'utm-god-bold',
      fontWeight: 'bold',
      color: '#49856e',
    }
  },
  thumbnail: {
    width: '100%',
    marginBottom: '20px',
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
      content: "''",
      display: 'block',
      width: '100%',
      height: 0,
      paddingTop: '45.3521126761%'
    },
    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      'object-fit': 'cover',
    }
  },
  button: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 30px',
    fontSize: '14px',
    color: '#fff',
    fontWeight: 700,
    lineHeight: 1.21,
    letterSpacing: '2.8px',
    height: '45px',
    border: 0,
    backgroundColor: '#49856e',
    borderRadius: '100px',
    backgroundImage: `url(${'static/images/flower-2.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    transition: 'all ease 0.3s'
  }
}));
function MobileAboutUs() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        <Typography className={classes.heading_title}>
          <span>TPX Homelab</span>
          Giới thiệu về chúng tôi
        </Typography>
        <Box className={classes.thumbnail}>
          <a href="/">
            <img src="https://naturerepublicstore.vn/wp-content/uploads/2020/04/top-8-cac-hang-my-pham-thien-nhien-noi-tieng-o-viet-nam-1.jpg" alt="About Us Banner" />
          </a>
        </Box>
        <a className={classes.button} href="/">
          Chuyện của TPX
        </a>
      </Box>
    </Box>
  );
}

export default MobileAboutUs;
