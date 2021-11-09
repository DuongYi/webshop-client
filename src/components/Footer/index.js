import React from 'react';

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import './Footer.css';

const useStyle = makeStyles((theme) => ({
  footer: {
    marginTop: '30px',
    '& a': {
      textDecoration: 'none',
      color: "#4c503d",
      '&:hover': {
        color: "#079b61"
      }
    }
  },
  footerLogo: {
    textIndent: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  footerLogo_title: {
    position: "relative",
    display: "block",
    margin: "10px 0",
    paddingBottom: "10px",
    textTransform: "uppercase",
    fontSize: '12px',
    fontWeight: 600,
    color: "#079b61",
    '&:before': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '2px',
      width: '30px',
      backgroundColor: "#079b61"
    }
  },
  footer_social: {
    marginLeft: '-5px',
    marginRight: '-5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer_social_item: {
    width: "40px",
    height: "40px",
    margin: "0 5px",
  },
  footer_menu: {
    margin: 0,
    padding: 0
  },
  footer_menu_item: {
    listStyle: 'none',
    lineHeight: 2.57,
    fontSize: "14px",
    color: "#4c503d",
  },
  footer_contact: {
    margin: 0,
    padding: 0
  },
  footer_contact_item: {
    listStyle: 'none',
    lineHeight: 2.57,
    fontSize: "14px",
    color: "#4c503d",
  },
  footer_note: {
    position: 'relative',
    padding: '5px 15px 5px 15px',
    borderRadius: '10px',
    backgroundColor: '#079b6138',
    '&:before': {
      content: "''",
      position: 'absolute',
      left: '10px',
      top: '-16px',
      width: 0,
      height: 0,
      border: '8px solid #ffffff00',
      borderBottomColor: '#079b6138'
    }
  },
  footer_bottom: {
    margin: '10px 0 20px 0'
  },
  [theme.breakpoints.down('md')]: {
    footer_social: {
      justifyContent: 'flex-end'
    },
    footer_note: {
      padding: '15px 15px 15px 15px'
    },
  },
  [theme.breakpoints.down('sm')]: {
    footer_social: {
      paddingTop: '15px',
    },
  },
  [theme.breakpoints.down('xs')]: {
    footer_copyRight: {
      margin: '15px 0 0'
    }
  }
}));

function Footer() {
  const classes = useStyle();
  return (
    <Container maxWidth="lg" className={classes.footer}>
      <Grid container mt={2} display="flex" alignItems="center" justifyContent="space-between" style={{ paddingBottom: '25px' }}>
        <Grid lg={3} md={4} xs={12} item>
          <img className={classes.footerLogo} src="static/images/logoDG.png" alt="" />
          <Box className={classes.footerLogo_title}>
            <span>Sản phẩm thiên nhiên </span>
          </Box>
        </Grid>
        <Grid lg={7} md={8} xs={12} item>
          <div className="footer-form">
            <form action="/">
              <input type="hidden" name="_token" />
              <div className="footer-form-field">
                <textarea name="email" placeholder="Đăng ký địa chỉ email để nhận được những thông tin khuyến mại sớm nhất..." id="" cols="30" rows="10" />
                <button className="footer-form-button" type="submit">
                  Tham gia
                </button>
              </div>
            </form>
          </div>
        </Grid>
        <Grid lg={2} md={12} container item className={classes.footer_social}>
          <a href="/" className={classes.footer_social_item}>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="static/images/fb.svg" alt="Facebook" />
          </a>
          <a href="/" className={classes.footer_social_item}>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="static/images/insta.svg" alt="Instagram" />
          </a>
          <a href="/" className={classes.footer_social_item}>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="static/images/youtube.svg" alt="Youtube" />
          </a>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ paddingBottom: '40px', borderBottom: '1px solid rgba(76,80,61,.14)' }}
      >
        <Grid style={{ padding: '0 20px 10px 0' }} lg={4} md={12} item>
          <Typography style={{ fontSize: '16px', fontWeight: 600, color: "#4c503d" }}>
            Công ty cổ phần thương mại xuất nhập khẩu TPX
          </Typography>
          <Typography style={{ fontSize: '14px', fontWeight: 500, color: "#4c503d" }}>
            ĐKKD số 02328956238 do Sở KHĐT Tp. Hà Nội cấp ngày 19/03/2021
          </Typography>
          <ul className={classes.footer_contact}>
            <li className={classes.footer_contact_item}>
              <a href="/">
                Tại đường Bưởi, Vĩnh Phúc, Ba Đình, Hà Nội
              </a>

            </li>
            <li className={classes.footer_contact_item}>
              <a href="/">Email: tpx@gmail.com.vn</a>
            </li>
            <li className={classes.footer_contact_item}>
              <a href="/">
                Hotline: 1900.193.084
              </a>
            </li>
          </ul>
          <Box className={classes.footer_note}>
            <span style={{ fontSize: '15px', color: "#4c503d" }}>
              <b>*Lưu ý:</b>
              Tác dụng của sản phẩm có thể thay đổi tùy theo tình trạng thể chất của mỗi người
            </span>
          </Box>
        </Grid>
        <Grid style={{ padding: '0 20px 10px 0' }} item lg={3} sm={4} xs={6}>
          <Typography style={{ fontSize: '16px', fontWeight: 600, color: "#4c503d" }}>
            Gian hàng TPX
          </Typography>
          <ul className={classes.footer_menu}>
            <li className={classes.footer_menu_item}>
              <a href="/">Son môi</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Chăm sóc da</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Chăm sóc tóc</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Chăm sóc cơ thể</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Sản phẩm cho bé</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Hương thơm</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Trang điểm</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Khuyến mại và combo</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Túi vải</a>
            </li>
          </ul>
        </Grid>
        <Grid style={{ padding: '0 20px 10px 0' }} item lg={2} sm={4} xs={6}>
          <Typography style={{ fontSize: '16px', fontWeight: 600, color: "#4c503d" }}>
            Truy cập nhanh
          </Typography>
          <ul className={classes.footer_menu}>
            <li className={classes.footer_menu_item}>
              <a href="/">Về chúng tôi</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Hệ thống cửa hàng</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Minh bạch nguyên liệu</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Phản hồi sản phẩm</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Hoạt động cộng đồng</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Blog làm đẹp</a>
            </li>
          </ul>
        </Grid>
        <Grid style={{ padding: '0 20px 10px 0' }} item lg={3} sm={4}>
          <Typography style={{ fontSize: '16px', fontWeight: 600, color: "#4c503d" }}>
            Hướng dẫn mua hàng
          </Typography>
          <ul className={classes.footer_menu}>
            <li className={classes.footer_menu_item}>
              <a href="/">Chính sách mua hàng và thanh toán</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Chính sách bảo hành</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Chính sách đổi trả và hoàn tiền</a>
            </li>
            <li className={classes.footer_menu_item}>
              <a href="/">Chính sách bảo mật thông tin</a>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid className={classes.footer_bottom} container display="flex" justifyContent="space-between" alignItems="center">
        <Typography className={classes.footer_copyRight} style={{ fontSize: '14px', color: "#4c503d" }}>
          © 2021 TPX. All rights reserved
        </Typography>
        <a style={{ margin: '5px 0 0' }} href="/">
          <img src="static/images/thongbao.png" width="111" height="43" alt="thongbao" />
        </a>
      </Grid>
    </Container>
  );
}

export default Footer;
