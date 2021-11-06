import React from 'react';

import { makeStyles } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { PropTypes } from "prop-types";
import Slider from "react-slick";

import TrackSlickItem from './TrackSlickItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles(() => ({
  nextArrow: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0.5,
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(115,129,54,.4)',
    zIndex: 1,
    right: -25,
    justifyContent: 'flex-end',
    transition: 'all ease 0.3s',
    '&:hover': {
      color: 'rgba(115,129,54)',
    }
  },
  prevArrow: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0.5,
    display: 'flex',
    alignItems: 'center',
    color: "rgba(115,129,54,.4)",
    zIndex: 1,
    left: -25,
    justifyContent: 'flex-start',
    transition: 'all ease 0.3s',
    '&:hover': {
      color: 'rgba(115,129,54)',
    }
  }
}));

function NextArrow({ currentSlide, slideCount, onClick }) {
  const classes = useStyles({ currentSlide, slideCount });
  return (
    <div className={classes.nextArrow} onClick={onClick}>
      <NavigateNextIcon color="inherit" fontSize="large" />
    </div>
  );
}

NextArrow.propTypes = {
  currentSlide: PropTypes.any,
  slideCount: PropTypes.number,
  onClick: PropTypes.func
};

function PrevArrow({ currentSlide, onClick }) {
  const classes = useStyles({ currentSlide });
  return (
    <div className={classes.prevArrow} onClick={onClick}>
      <NavigateBeforeIcon color="inherit" fontSize="large" />
    </div>
  );
}

PrevArrow.propTypes = {
  currentSlide: PropTypes.any,
  onClick: PropTypes.func
};

function TrackSlick() {
  const trackList = [
    {
      image: "static/images/Feedbacks/giam-rung-toc.jpg",
      description: "Tôi đã bị rụng tóc rất nhiều cách đây vài năm khi sinh em bé. Đây là một sản phẩm tuyệt vời , kết hợp với một chế độ ăn uống tốt và một số loại vitamin, nó đã tạo ra sự khác biệt lớn cho mái tóc của mình."
    },
    {
      image: "static/images/Feedbacks/chinh-phuc.jpg",
      description: "Tôi hoàn toàn bị sản phẩm này chinh phục. Nó đã hồi sinh mái tóc mỏng trước kia của tôi  và giờ tóc trở lên bồng bệnh và khỏe mạnh. Quan trọng nhất là nó được làm từ các thành phần tự nhiên nên càng yên tâm sử dụng lâu dài."
    },
    {
      image: "static/images/Feedbacks/nam-gioi-tin-dung.jpg",
      description: "Đây là một loại dầu gội rất tốt, lưu lại hương thơm thoang thoảng tự nhiên dễ chịu, tôi sẽ tiếp tục sử dụng nó, thật tuyệt."
    },
    {
      image: "static/images/Feedbacks/giam-rung-toc.jpg",
      description: "Sau nửa năm sử dụng sản phẩm này, tóc của tôi trông khỏe mạnh hơn và gần như trở lại như trước khi bắt đầu rụng."
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {trackList.map((item) => (
        <TrackSlickItem key={item.description} track={item} />
      ))}
    </Slider>
  );
}

export default TrackSlick;
