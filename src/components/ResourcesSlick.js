import React from 'react';

import { PropTypes } from "prop-types";
import Slider from "react-slick";

import ResourceItem from './ResourceItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResourcesSlick() {
  const resources = [
    {
      class: 'resource-grid resource-grid--green ',
      image: "static/images/Resources/huong-nhu.png",
      title: "Cây hương nhu",
      description: "Lá hương nhu được sử dụng trong dân gian từ nhiều đời nay như một bí quyết để giữ mái tóc luôn khỏe mạnh..."
    },
    {
      class: 'resource-grid resources-grid--orange resource-grid--bottom',
      image: "static/images/Resources/olives.png",
      title: "Tinh dầu Oliu",
      description: "Dầu ô liu rất giàu axit béo và chất chống oxy hóa. Thành phần hóa học độc đáo của nó là một phần lý do tại sao nó được sử dụng để cải thiện kết cấu và vẻ ngoài của tóc trong nhiều thế kỷ...",
      imgbottom: 'img-bottom'
    },
    {
      class: 'resource-grid resource-grid--green ',
      image: "static/images/Resources/grapefruit.png",
      title: "Tinh dầu vỏ bưởi",
      description: "Tinh dầu bưởi là một trong những loại tinh dầu thiên nhiên được chiết xuất từ vỏ bưởi (vỏ xanh có những giọt tinh dầu nhỏ li ti) có chứa pectin, naringin,.. có tính diệt nấm sát khuẩn rất cao..."
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <Slider {...settings} style={{ position: 'relative', display: 'block' }}>
      {resources.map((item) => (
        <ResourceItem key={item} resource={item} />
      ))}
    </Slider>
  );
}

ResourcesSlick.propTypes = {
  items: PropTypes.array
};

export default ResourcesSlick;
