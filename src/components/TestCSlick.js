import React from 'react';

import { PropTypes } from "prop-types";
import Slider from "react-slick";

import ProductItem from './ProductItem';
import TestCard from './TestCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'src/styles/slick.css';

function TestCSlick() {
  const tests = [
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

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider
        {...settings}
      >
        {tests.map((test) => (
          <TestCard key={test} item={test} />
        ))}
      </Slider>
      <div style={{ height: '300px' }} />
      <Slider
        {...settings}
      >
        {tests.map((test) => (
          <ProductItem key={test} product={test} />
        ))}
      </Slider>
      <div style={{ height: '300px' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tests.map((test) => (
          <ProductItem key={test.title} product={test} />
        ))}
      </div>
    </>
  );
}

TestCSlick.propTypes = {
  items: PropTypes.array
};

export default TestCSlick;
