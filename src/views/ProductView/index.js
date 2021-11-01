import React from 'react';

import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Rating from '@material-ui/lab/Rating';

import CarouselSlick from 'src/components/CarouselSlick';
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';

import ProductSuggested from './components/ProductSuggested';

const useStyles = makeStyles(() => ({
  pDetail_subTitle: {
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '5px',
    marginBottom: '20px'
  },
  product_policy: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 0',
    borderBottom: '1px solid #e7edd7'
  },
  product_info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px'
  },
  product_prices: {
    display: 'flex',
    alignItems: 'center',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '28px',
    '& ins': {
      textDecoration: 'none',
      color: '#738136'
    }
  },
  product_rating: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  product_ratings: {
    display: 'flex',
    alignItems: 'center'
  },
  product_label: {
    fontSize: '14px',
    lineHeight: '16px',
    marginLeft: '10px',
    color: '#6a6a69'
  },
  options_label: {
    marginRight: '10px',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#4c503d'
  },
  product_options: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '25px',
  },
  options_detail: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  product_option: {
    position: 'relative',
    borderRadius: '5px',
    overflow: 'hidden',
    margin: '5px',
    cursor: 'pointer',
    '& input': {
      display: 'none',
    }
  },
  option_checkmark: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(222,141,30,.1)',
    border: '1px solid rgba(222,141,30,.2)'
  },
  option_checkmark_label: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    color: "#6a6a69",
    padding: '8px 18px 0 18px',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    height: '38px',
    zIndex: 1
  },
  product_actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px'
  },
  product_quantity: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '100px',
    backgroundImage: 'url(static/images/flower-2.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#738136',
    marginRight: '10px',
    transition: 'all ease 0.3s',
  },
  product_quantity_change: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#738136",
      borderRadius: '100px'
    },
  },
  product_addToCart: {
    color: '#fff',
    padding: '0 20px',
    textTransform: 'none',
    fontWeight: '550',
    fontSize: '18px',
    lineHeight: '21px',
    transition: 'all ease 0.3s',
    transform: 'translateY(50%)'
  },
  product_BuyNow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'none',
    fontSize: '18px',
    flex: 1,
    height: '56px',
    border: '2px solid #738136',
    color: '#738136',
    borderRadius: '30px',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#738136'
    }
  },
  product_features: {
    display: 'flex',
    flexWrap: 'wrap',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '19px',
    color: '#4c503d',
    marginBottom: '16px',
    margin: '0 -5px'
  },
  pFeatures_item: {
    width: '50%',
    padding: '0 5px',
    marginTop: '15px',
    "&:first-child": {
      marginTop: 0
    },
    "&:nth-child(2)": {
      marginTop: 0
    }
  },
  pFeatures_item_label: {
    fontWeight: '550'
  },
  product_description: {
    padding: '16px 0',
    borderTop: '1px solid #e7edd7',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#6a6a69'
  },
  product_suggested: {
    paddingTop: '25px',
    borderTop: '1px solid #e7edd7',
    '& span': {
      color: '#4c503d',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '19px',
      marginBottom: '5px'
    }
  },
  pSuggested_grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '0 -15px',
    padding: 0,
    position: 'relative',
    float: 'none'
  },
  product_social: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '55px',
    '& a': {
      display: 'flex',
      margin: '10px',
      color: '#738136',
      textDecoration: 'none',
      transition: 'all ease 0.3s',
      '& i': {
        fontSize: '20px'
      },
      '&:hover': {
        color: '#8c8d8a',
        transition: 'all ease 0.3s',
      }
    }
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

  const listSuggested = [
    {
      image: "static/images/sp9.jpg",
      title: "Son Lụa không chì + Nước hoa khô",
      price: "380.000đ"
    },
    {
      image: "static/images/sp6.jpg",
      title: "Son Lụa không chì",
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
      <Container maxWidth="lg" style={{ paddingTop: '40px' }}>
        <Grid container spacing={5}>
          <Grid item lg={7} md={12}>
            Slick
          </Grid>
          <Grid item lg={5} md={12}>
            <Box className={classes.product__heading}>
              <Typography
                className={classes.pDetail_title}
                style={{
                  color: '#4c503d', marginBottom: '10px', fontSize: '28px', lineHeight: '46px', textAlign: 'start'
                }}
              >
                Son kem nhung (Lì mượt không silicon)
              </Typography>
              <h4 className={classes.pDetail_subTitle}>Lì mượt không cần Silicon</h4>
            </Box>
            <Box className={classes.product_info}>
              <Box className={classes.product_prices}>
                <ins>160.000đ</ins>
              </Box>
              <a href="/" className={classes.product_rating}>
                <Box className={classes.product_ratings}>
                  <Rating
                    name="half-rating"
                    defaultValue={4.5}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                </Box>
                <Box className={classes.product_label}>
                  <span>Xem 1,903 đánh giá</span>
                </Box>
              </a>
            </Box>
            <Box className={classes.product_options}>
              <span className={classes.options_label}>Mùi hương</span>
              <Box className={classes.options_detail}>
                <label htmlFor="option-id" className={classes.product_option} style={{ background: '#de8d1e', border: '1px solid #de8d1e' }}>
                  <input
                    type="radio"
                    name="type 0"
                    value="Gạo không màu"
                    id="option-id"
                    checked
                  />
                  <span className={classes.option_checkmark} />
                  <span className={classes.option_checkmark_label} style={{ color: '#fff' }}>Gạo không màu</span>
                </label>
                <label htmlFor="option-id" className={classes.product_option}>
                  <input type="radio" name="type 0" value="Gạo cacao" id="option-id" />
                  <span className={classes.option_checkmark} />
                  <span className={classes.option_checkmark_label}>Gạo cacao</span>
                </label>
                <label htmlFor="option-id" className={classes.product_option}>
                  <input type="radio" name="type 0" value="Gạo trà xanh" id="option-id" />
                  <span className={classes.option_checkmark} />
                  <span className={classes.option_checkmark_label}>Gạo trà xanh</span>
                </label>
                <label htmlFor="option-id" className={classes.product_option}>
                  <input type="radio" name="type 0" value="Gạo dâu" id="option-id" />
                  <span className={classes.option_checkmark} />
                  <span className={classes.option_checkmark_label}>Gạo dâu</span>
                </label>
                <label htmlFor="option-id" className={classes.product_option}>
                  <input type="radio" name="type 0" value="Gạo cam" id="option-id" />
                  <span className={classes.option_checkmark} />
                  <span className={classes.option_checkmark_label}>Gạo cam</span>
                </label>
              </Box>
            </Box>
            <Box className={classes.product_actions}>
              <Box className={classes.product_quantity}>
                <Box>
                  <TextField
                    className={classes.product_quantity_change}
                    id="outlined-number"
                    type="number"
                    defaultValue="1"
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    style={{
                      width: 60, backgroundColor: '#fff', borderRadius: '100px'
                    }}
                  />
                  <Button className={classes.product_addToCart}>Thêm vào giỏ hàng</Button>
                </Box>
              </Box>
              <Button className={classes.product_BuyNow}>
                Mua ngay
              </Button>
            </Box>
            <Box className={classes.product_features}>
              <Box className={classes.pFeatures_item}>
                <span className={classes.pFeatures_item_label}>
                  Thể tich:
                  {' '}
                </span>
                <span className={classes.pFeatures_item_description}>
                  3ml
                </span>
              </Box>
              <Box className={classes.pFeatures_item}>
                <span className={classes.pFeatures_item_label}>
                  Số công bố:
                  {' '}
                </span>
                <span className={classes.pFeatures_item_description}>
                  10692/21/CBMP - HN
                </span>
              </Box>
              <Box className={classes.pFeatures_item}>
                <span className={classes.pFeatures_item_label}>
                  An toàn:
                  {' '}
                </span>
                <span className={classes.pFeatures_item_description}>
                  Cho mọi phụ nữ, bà bầu, trẻ em và những đôi môi nhạy cảm
                </span>
              </Box>
              <Box className={classes.pFeatures_item}>
                <span className={classes.pFeatures_item_label}>
                  MIỄN PHÍ ĐỔI TRẢ:
                  {' '}
                </span>
                <span className={classes.pFeatures_item_description}>
                  Sản phẩm lỗi do sản xuất/ vận chuyển
                </span>
              </Box>
            </Box>
            <Box className={classes.product_description}>
              <Typography>
                Bộ combo dành cho môi giúp các nàng chăm sóc đôi môi mềm mịn căng mọng và hồng hào.
              </Typography>
            </Box>
            <Box className={classes.product_suggested}>
              <span>Combo giá tốt:</span>
              <Box className={classes.pSuggested_grid}>
                {
                listSuggested.map((item) => (
                  <ProductSuggested key={item.title} product={item} />
                ))
              }
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          className={classes.product_social}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <span style={{ color: '#4c503d', marginRight: '10px' }} className={classes.pFeatures_item_label}>
            Chia sẻ:
            {' '}
          </span>
          <a href="/" target="_blank">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-facebook-messenger" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-twitter" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-pinterest-p" />
          </a>
          <a href="/" target="_blank">
            <i className="fas fa-envelope" />
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
