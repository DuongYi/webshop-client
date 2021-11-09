import React from 'react';

import {
  Box, LinearProgress, Typography, makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyle = makeStyles({
  root: {
  },
  linearProgress: {
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#de8d1e",
    },
    width: '150px',
    marginRight: '10px'
  }
});

function LinearProgressWithLabel({ per, sl }) {
  const classes = useStyle();

  return (
    <Box display="flex" alignItems="center" className={classes.root}>
      <Box mr={0} ml={3}>
        <LinearProgress className={classes.linearProgress} variant="determinate" value={per} />
      </Box>
      <Box minWidth={30}>
        <Typography variant="body2" style={{ color: "#de8d1e" }}>
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
