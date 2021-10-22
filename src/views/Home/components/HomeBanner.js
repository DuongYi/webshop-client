import React from 'react';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '640px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '85% 15%',
  }
});

function HomeBanner() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${'static/images/kaisa1.jpg'})`
      }}
    />
  );
}

export default HomeBanner;
