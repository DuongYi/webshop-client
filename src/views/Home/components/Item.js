import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Paper } from '@mui/material';
import propTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff"
  },
  carousel_item: {
    height: '85vh',
  },
  carousel_item_image: {
    position: 'absolute',
    'object-fit': 'cover',
    width: '100%',
    height: '100%'
  },
  [theme.breakpoints.down('md')]: {
    carousel_item: {
      height: '60vh',
    },
  },
  [theme.breakpoints.down('sm')]: {
    carousel_item: {
      height: '30vh',
    },
  }
}));

function Item({ item }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <a href={item.link} target="_blank" rel="noreferrer">
        <div className={classes.carousel_item}>
          <img className={classes.carousel_item_image} src={item.image} alt="bg" />
        </div>
      </a>
    </Paper>
  );
}

Item.propTypes = {
  item: propTypes.object,
};

export default Item;
