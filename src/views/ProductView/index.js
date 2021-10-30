import React from 'react';

import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Container from '@material-ui/core/Container';

import Footer from 'src/components/Footer';
import Page from 'src/components/Page';

const useStyles = makeStyles(() => ({
  product_related: {
    padding: '70px 0 60px',
    backgroundImage: `url(${'static/images/collections-bg.png'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '10px',
  },
  pRelated_title: {
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

  return (
    <Page>
      <Container>
        <Grid
          container
          display="flex"
          direction="column"
          alignItems="center"
          className={classes.product_related}
        >
          <Typography className={classes.pRelated_title}>
            Sản phẩm liên quan
          </Typography>
        </Grid>
      </Container>
      <Footer />
    </Page>
  );
}

export default ProductView;
