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
      image: "static/images/res1.png",
      title: "Lá bạc hà",
      description: "Lá Bạc hà được sử dụng trong các sản phẩm mỹ phẩm như: cao dược liệu để gội đầu, lá tắm cho trẻ em, nước súc miệng..."
    },
    {
      class: 'resource-grid resources-grid--orange resource-grid--bottom',
      image: "static/images/res2.png",
      title: "Tinh dầu cam ngọt",
      description: "Tinh dầu Cam ngọt được sử dụng trong mỹ phẩm như một thành phần làm thơm, giải tỏa căng thẳng: sáp thơm, tinh dầu treo, kem dưỡng...",
      imgbottom: 'img-bottom'
    },
    {
      class: 'resource-grid resource-grid--green ',
      image: "static/images/res3.png",
      title: "Dầu quả bơ",
      description: "Được chiết từ thịt quả bơ chín ngay sau khi thu hoạch bằng phương pháp ép lạnh, phương pháp này giữ được nguyên dinh dưỡng tốt trong dầu."
    },
    {
      class: 'resource-grid resources-grid--brown resource-grid--bottom',
      image: "static/images/res4.png",
      title: "Dầu dừa",
      description: "Dầu dừa được chiết xuất từ phần cùi trắng của quả dừa, có thể được tìm thấy trong nhiều loại mỹ phẩm và sản phẩm chăm sóc cá nhân.",
      imgbottom: 'img-bottom'
    }
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
