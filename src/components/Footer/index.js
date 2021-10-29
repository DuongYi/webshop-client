import React from 'react';

import { makeStyles } from '@material-ui/core';
import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material';

import './Footer.css';

const useStyle = makeStyles(() => ({
  root: {
    '& a': {
      textDecoration: 'none',
      color: "#4c503d",
      '&:hover': {
        color: "#738136"
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
    color: "#738136",
    '&:before': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '2px',
      width: '30px',
      backgroundColor: "#738136"
    }
  },
  footer_social: {
    marginLeft: '-5px',
    marginRight: '-5px'
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
    padding: '20px 15px 0px 15px',
    borderRadius: '10px',
    backgroundColor: '#e9f0d5',
    marginTop: '-20px',
    '&:before': {
      content: "''",
      position: 'absolute',
      left: '10px',
      top: '-15px',
      width: 0,
      height: 0,
      border: '8px solid #ffffff00',
      borderBottomColor: '#e9f0d5'
    }
  }
}));

function Footer() {
  const classes = useStyle();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container mt={5} display="flex" alignItems="center" justifyContent="space-between" style={{ paddingBottom: '25px' }}>
        <Grid item>
          <img className={classes.footerLogo} src="static/images/logo.png" alt="" />
          <Box className={classes.footerLogo_title}>
            <span>Mỹ phẩm thiên nhiên lành & thật</span>
          </Box>
        </Grid>
        <Grid item>
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
        <Grid item display="flex" justifyContent="center" alignItems="center" className={classes.footer_social}>
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
        spacing={5}
        style={{ paddingBottom: '40px', borderBottom: '1px solid rgba(76,80,61,.14)' }}
      >
        <Grid xs={4} item container>
          <Typography style={{ fontSize: '16px', fontWeight: 600, color: "#4c503d" }}>
            Công ty cổ phần trách nghiệm hữu hạn Cỏ mềm
          </Typography>
          <Typography style={{ fontSize: '14px', fontWeight: 500, color: "#4c503d" }}>
            ĐKKD số 0109153702 do Sở KHĐT Tp. Hà Nội cấp ngày 09/04/2020
          </Typography>
          <ul className={classes.footer_contact}>
            <li className={classes.footer_contact_item}>
              <a href="/">
                Tại 225 Trần Đăng Ninh,
                P.Dịch Vọng, Q.Cầu Giấy, Hà Nội
              </a>

            </li>
            <li className={classes.footer_contact_item}>
              <a href="/">Email: comem@songan.vn</a>
            </li>
            <li className={classes.footer_contact_item}>
              <a href="/">
                Hotline: 1800.646.890
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
        <Grid item xs={3}>
          <Typography style={{ fontSize: '16px', fontWeight: 600, color: "#4c503d" }}>
            Gian hàng cỏ mềm
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
        <Grid item xs={2}>
          <Typography style={{ fontSize: '16px', fontWeight: 600, color: "#4c503d" }}>
            Truy cập nhanh
          </Typography>
          <ul className={classes.footer_menu}>
            <li className={classes.footer_menu_item}>
              <a href="/">Về cỏ mềm</a>
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
        <Grid item xs={3}>
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
      <Grid container display="flex" justifyContent="space-between" alignItems="center" my={2}>
        <Typography style={{ fontSize: '14px', color: "#4c503d" }}>
          © Bản quyền thuộc về Công ty Cổ phần Mỹ phẩm Thiên nhiên Cỏ Mềm
        </Typography>
        <a href="/">
          <img src="static/images/thongbao.png" width="111" height="43" alt="thongbao" />
        </a>
      </Grid>
    </Container>
  );
}

export default Footer;
