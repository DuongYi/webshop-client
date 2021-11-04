import React from 'react';

import { makeStyles } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { PropTypes } from "prop-types";
import Slider from "react-slick";

import NewsItem from 'src/components/NewsItem/NewsItem';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles(() => ({
  newSlick: {
    padding: '0 50px'
  },
  nextArrow: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0.5,
    display: 'flex',
    alignItems: 'center',
    color: "rgba(255,255,255,.5)",
    zIndex: 1,
    right: 0,
    justifyContent: 'flex-end',
    transition: 'all ease 0.3s',
    '&:hover': {
      color: 'rgba(255,255,255)',
    }
  },
  prevArrow: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0.5,
    display: 'flex',
    alignItems: 'center',
    color: "rgba(255,255,255,.5)",
    zIndex: 1,
    left: 0,
    justifyContent: 'flex-start',
    transition: 'all ease 0.3s',
    '&:hover': {
      color: 'rgba(255,255,255)',
    }
  }
}));

function NextArrow({ currentSlide, slideCount, onClick }) {
  const classes = useStyles({ currentSlide, slideCount });
  return (
    <div className={classes.nextArrow} onClick={onClick}>
      <NavigateNextIcon fontSize="large" />
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
      <NavigateBeforeIcon fontSize="large" />
    </div>
  );
}

PrevArrow.propTypes = {
  currentSlide: PropTypes.any,
  onClick: PropTypes.func
};

function NewsSlick() {
  const classes = useStyles();

  const news = [
    {
      image: 'static/images/Vietnamnet.jpg',
      title: 'Vietnamnet'
    },
    {
      image: 'static/images/afamily.jpg',
      title: 'AFamily'
    },
    {
      image: 'static/images/cafef.jpg',
      title: 'CafeF'
    },
    {
      image: 'static/images/kenh14.jpg',
      title: 'Kenh14'
    },
    {
      image: 'static/images/eva.png',
      title: 'Eva'
    },
    {
      image: 'static/images/24h.jpg',
      title: '24h'
    },
    {
      image: 'static/images/skds.jpg',
      title: 'SucKhoeDoiSong'
    },
    {
      image: 'static/images/giadinh.jpg',
      title: 'GiaDinh'
    },
    {
      image: 'static/images/dantri.jpg',
      title: 'DanTri'
    }
  ];

  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <Slider className={classes.newSlick} {...settings}>
      {news.map((item) => (
        <NewsItem key={item.title} news={item} />
      ))}
    </Slider>
  );
}

export default NewsSlick;
