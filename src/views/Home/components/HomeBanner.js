/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Carousel from 'react-material-ui-carousel';

import Item from './Item';

function HomeBanner() {
  const items = [
    {
      link: "https://www.facebook.com/VSsYii",
      image: "static/images/banner1.jpg"
    },
    {
      link: "https://www.facebook.com/VSsYii",
      image: "static/images/banner2.jpg"
    },
  ];

  return (
    <Carousel
      animation="fade" // Previous Example
      fullHeightHover="true"
      stopAutoPlayOnHover="false"
      indicatorIconButtonProps={{
        style: {
          padding: '10px',
        }
      }}
      indicatorContainerProps={{
        style: {
          marginTop: '50px', // 5
          textAlign: 'center',
          marginBottom: '25px', // 4
        }
      }}
      NextIcon={<NavigateNextIcon style={{ color: "#fff" }} />}
      PrevIcon={<NavigateBeforeIcon style={{ color: "#fff" }} />}
    >
      {
        items.map((item) => <Item key={item} item={item} />)
      }
    </Carousel>
  );
}

export default HomeBanner;
