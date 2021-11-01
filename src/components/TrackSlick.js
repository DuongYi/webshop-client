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
      image: "static/images/track1.jpg",
      description: "Dùng rất thích, mình cho cả con gái dùng luôn, mùi Trầu không đặc trưng nhưng rửa không bị khô như đun lá trầu không - Chị Hà Đào Thu chia sẻ"
    },
    {
      image: "static/images/track2.jpg",
      description: "Son dưỡng mềm sau 1 đêm ngủ. Sáng đánh răng rửa mặt môi vẫn mềm. Mình mới dùng có 1 đêm thôi. Son này có người giới thiệu nên mua nè"
    },
    {
      image: "static/images/track3.jpg",
      description: "Nước gội thảo mộc rất thơm và dễ chịu. Mình dùng cảm thấy đỡ bị rụng hơn và được cái là tiết kiệm nước"
    },
    {
      image: "static/images/track4.jpg",
      description: "Xà bông xài rất thích. Xà bông trà xanh tắm sáng làm tỉnh cả người. Mùi oải hương thì đi làm về xong tắm cực kỳ thư giãn luôn. Có cơ hội sẽ ủng hộ Cỏ tiếp"
    },
    {
      image: "static/images/track5.jpg",
      description: "Mình dùng Taptap và muối cafe da mịn ghê ý. Tắm xong thơm mịn, da đã trắng nay còn trắng hơn"
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
