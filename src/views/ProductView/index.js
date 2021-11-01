/* eslint-disable max-len */
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
import ResourcesSlick from 'src/components/ResourcesSlick';

import LinearProgressWithLabel from './components/LinearProgressWithLabel';
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
  pInfomations_widget: {
    background: '#fff',
    boxShadow: '0 7px 15px rgb(0 0 0 / 10%)',
    borderRadius: '20px',
    padding: '25px 30px',
    marginBottom: '30px'
  },
  pInfomation_widget_heading: {
    position: 'relative',
    fontFamily: 'Yeseva One,Helvetica,Arial,sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '28px',
    color: '#4c503d',
    marginBottom: '30px',
    paddingBottom: '9px',
    '&:after': {
      content: "''",
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      height: '6px',
      backgroundImage: 'url(static/images/heading-line.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 0
    }
  },
  pInfomation_widget_title: {
    position: 'relative',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#738136',
    marginBottom: '5px',
    paddingBottom: '10px',
    fontWeight: 'bold',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '20px',
      height: '2px',
      backgroundColor: '#738136'
    }
  },
  pInfomation_widget_content: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'normal',
    color: '#4c503d',
    margin: '15px 0'
  },
  pInfomation_widget_material: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '0 -4px'
  },
  pInfoWidget_material_item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    padding: '0 10px',
    background: '#fff',
    border: '2px solid rgba(115,129,54,.08)',
    boxSizing: 'border-box',
    borderRadius: '5px',
    color: '#738136',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    margin: '4px',
  },
  pInfomation_description: {
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#6a6a69',
    '& p': {
      display: 'block',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: 0,
      marginInlineEnd: 0
    },
    '& ul': {
      display: 'block',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: 0,
      marginInlineEnd: 0,
      paddingInlineStart: '20px'
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
  reviewsInfo_ratings_point: {
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '42px',
    color: '#738136',
    marginRight: '14px'
  },
  reviewsInfo_ratings_label: {
    fontSize: '16px',
    lineHeight: '19px',
    color: '#6a6a69'
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

  const listMaterial = ['Sabowax PG4s', 'JBC lipstick base', 'Saboderm CVC MB', 'Dầu hạnh nhân', 'Dầu cám gạo', 'Dầu hạt táo',
    'Dầu Mù Ù', 'Olivem', 'Sáp Candelilla', 'Màu khoáng thiên nhiên', 'Flavor/aroma'];

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

      {/* Nguyên liệu */}
      <Container maxWidth="lg" style={{ paddingBottom: '60px', marginBottom: '50px' }}>
        <Typography
          className={classes.pDetail_title}
          style={{ color: '#4c503d', margin: '0 0 20px' }}
        >
          Nguyên liệu
        </Typography>
        <ResourcesSlick />
      </Container>

      {/* Thông tin sản phẩm */}
      <Container maxWidth="lg" style={{ marginBottom: '70px' }}>
        <Grid container display="flex" spacing={6}>
          <Grid item lg={4} xs={12}>
            <Box className={classes.pInfomations_widget}>
              <Typography
                className={classes.pInfomation_widget_heading}
              >
                Hướng dẫn sử dụng
              </Typography>
              <Typography className={classes.pInfomation_widget_title}>
                Hướng dẫn sử dụng:
              </Typography>
              <p className={classes.pInfomation_widget_content}>
                Thoa trực tiếp lên môi. Khi môi cảm thấy khô thì thoa lại son.
              </p>
              <Typography className={classes.pInfomation_widget_title}>
                Hạn dùng:
              </Typography>
              <p className={classes.pInfomation_widget_content}>
                12 tháng. Mở nắp 6 tháng.
              </p>
              <Typography className={classes.pInfomation_widget_title}>
                Bảo quản:
              </Typography>
              <p className={classes.pInfomation_widget_content}>
                Nơi khô mát. Tránh nắng nóng và nguồn nhiệt.
                Tránh làm rơi gãy son. Không vặn son quá cao khi sử dụng.
              </p>
            </Box>

            <Box className={classes.pInfomations_widget}>
              <Typography
                className={classes.pInfomation_widget_heading}
              >
                Danh mục nguyên liệu
              </Typography>
              <Box className={classes.pInfomation_widget_material}>
                {listMaterial.map((item) => (
                  <span className={classes.pInfoWidget_material_item} key={item}>
                    {item}
                  </span>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8} xs={12} className={classes.pInfomation_description}>
            <Typography
              className={classes.pDetail_title}
              style={{ color: '#4c503d', margin: '0 0 24px', textAlign: "start" }}
            >
              Thông tin sản phẩm
            </Typography>
            <p>
              Cỏ Mềm mới tìm được một nguyên liệu tuyệt hảo với hàm lượng cao Acid linoleic
              và Acid oleic tự nhiên, mang lại khả năng dưỡng da và chống lão hóa vượt trội,
              đó là DẦU HẠT TÁO
            </p>
            <p>
              Có thể nói đây là một thỏi son dưỡng đạt 3 tiêu chí: ORGANIC, VEGAN và ECO&nbsp;
              <span className="_5mfr">🌿</span>
            </p>
            <p>
              <span className="_5mfr">✅</span>
              &nbsp;ORGANIC: dầu hạt táo hữu cơ và bơ olive là 2 thành phần chính trong công thức
              này giúp son dưỡng có khả năng làm mềm da môi, thấm nhanh vào biểu bì
              và nuôi dưỡng tế bào.
              <br />
              <span className="_5mfr">✅</span>
              &nbsp;VEGAN: sáp ong – nguyên liệu phổ biến trong mọi loại son môi – đã được thay thế hoàn toàn bằng sáp candelilla,
              sáp đậu nành. Các bạn yêu động vật có thể yên tâm sử dụng cây son dưỡng hiếm hoi không hề chứa sáp ong này,
              không cần e ngại có thể gây tổn hại khi khai thác ngôi nhà của các đàn ong.
              <br />
              <span className="_5mfr">✅</span>
              &nbsp;ECO: toàn bộ thành phần đều có nguồn gốc tự nhiên, không khai thác tận diệt và dễ dàng phân hủy sinh học.
              Đặc biệt vỏ cây son đã thay thế 70% chi tiết nhựa bằng giấy bìa dễ phân hủy không hại cho môi trường.
            </p>
            <p>
              Và như mọi sản phẩm của Cỏ Mềm, SON TÁO được sản xuất bởi đội ngũ Dược
              sĩ có chuyên môn với dây chuyền được cấp phép đảm bảo chất lượng.
            </p>
            <p>
              Bởi vậy, SON TÁO không chỉ đáng được lựa chọn nhờ đem lại đôi môi căng mịn mà còn vì cây son xinh yêu
              này lan tỏa thông điệp sống xanh khiến bạn tự hào khi sử dụng và rất tinh tế khi mang tặng bạn bè&nbsp;
              <span className="_5mfr">🎁</span>
            </p>
            <p>
              <span className="_5mfr">🍏</span>
              SON TÁO XANH không màu và&nbsp;
              <span className="_5mfr">🍎</span>
              SON TÁO ĐỎ có màu ửng đỏ tự nhiên
              <br />
              – Dưỡng môi dạng thỏi 4g
            </p>
            <p>----------</p>
            <p><strong>Thành phần:</strong></p>
            <p>
              <strong><em>- Son dưỡng táo xanh</em></strong>
              : Dầu Hạnh nhân (Prunus dulcis oil), Coco-Caprylate/Caprate (Coco-Caprylate/Caprate), Sáp JBC (Synthetic wax), Dầu Hạt táo (Pyrus malus seed oil), Bơ Oliu (Sorbitan olivate), Sáp Candelilla (Euphorbia cerifera (candelilla) wax), &nbsp;Dầu Cám gạo (Oryza sativa bran oil), Polyglyceryl-4 Stearate (Polyglyceryl-4 Stearate), Dầu Mù u - Trong son táo xanh (Calophyllum inophyllum seed oil), Fragrance (Fragrance)
            </p>
            <p>
              <strong><em>- Son dưỡng táo đỏ</em></strong>
              : Dầu Hạnh nhân (Prunus dulcis oil), Coco-Caprylate/Caprate (Coco-Caprylate/Caprate), Sáp JBC (Synthetic wax), Dầu Hạt táo (Pyrus malus seed oil), Bơ Oliu (Sorbitan olivate), Sáp Candelilla (Euphorbia cerifera (candelilla) wax), &nbsp;Dầu Cám gạo (Oryza sativa bran oil), Polyglyceryl-4 Stearate (Polyglyceryl-4 Stearate), Fragrance (Fragrance), Màu khoáng thiên nhiên (CI 15850).
            </p>
            <p><strong>Lưu ý khi sử dụng:</strong></p>
            <ul>
              <li>Son dưỡng Táo chứa thành phần 100% thiên nhiên, không có chất bảo quản, chất ổn định, vì thế sau khi mở son nên dùng liên tục cho tới hết hoặc tới hạn sử dụng</li>
              <li>Tránh vặn son quá cao vì son của Cỏ không có chất làm cứng, nên nếu vặn quá cao có thể làm gãy son</li>
            </ul>
          </Grid>
        </Grid>
      </Container>

      {/* Đánh giá */}
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
            <Grid
              container
              display="flex"
              justifyContent="space-between"
              style={{ padding: '15px 0' }}
            >
              <Grid
                item
                className={classes.reviews_infomations_ratings}
              >
                <Box display="flex" alignItems="center">
                  <span className={classes.reviewsInfo_ratings_point}>4.6</span>
                  <Rating
                    name="half-rating"
                    defaultValue={4.6}
                    precision={0.1}
                    size="medium"
                    readOnly
                  />
                </Box>
                <span className={classes.reviewsInfo_ratings_label}>Theo 1903 đánh giá</span>
              </Grid>
              <Grid item className={classes.reviews_infomations_line}>
                <Box className={classes.reviews_line_item} display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    precision={1}
                    size="small"
                    readOnly
                  />
                  <LinearProgressWithLabel per={85} sl={1618} />
                </Box>
                <Box className={classes.reviews_line_item} display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={4}
                    precision={1}
                    size="small"
                    readOnly
                  />
                  <LinearProgressWithLabel per={7} sl={133} />
                </Box>
                <Box className={classes.reviews_line_item} display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={3}
                    precision={1}
                    size="small"
                    readOnly
                  />
                  <LinearProgressWithLabel per={5} sl={95} />
                </Box>
                <Box className={classes.reviews_line_item} display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={2}
                    precision={1}
                    size="small"
                    readOnly
                  />
                  <LinearProgressWithLabel per={2} sl={38} />
                </Box>
                <Box className={classes.reviews_line_item} display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={1}
                    precision={1}
                    size="small"
                    readOnly
                  />
                  <LinearProgressWithLabel per={1} sl={19} />
                </Box>
              </Grid>
              <Grid item className={classes.reviews_infomations_gallery}>
                Ảnh
              </Grid>
              <Grid item className={classes.reviews_infomations_action}>
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

      {/* Sản phẩm liên quan */}
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
