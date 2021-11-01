import React from 'react';

import {
  Box, LinearProgress, Typography, makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyle = makeStyles({
  root: {
    width: '100%',
  },
  linearProgress: {
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#de8d1e",
    },
    width: '150px'
  }
});

function LinearProgressWithLabel({ per, sl }) {
  const classes = useStyle();

  return (
    <Box display="flex" alignItems="center" className={classes.root}>
      <Box width="100%" mr={0} ml={3}>
        <LinearProgress className={classes.linearProgress} variant="determinate" value={per} />
      </Box>
      <Box minWidth={30}>
        <Typography variant="body2" color="textSecondary">
          (
          {sl}
          )
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  per: PropTypes.number,
  sl: PropTypes.number
};

export default LinearProgressWithLabel;
