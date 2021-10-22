import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {
  Box,
  Button,
  Grid,
  Hidden,
  IconButton,
  InputBase,
  List,
  ListItem,
  Tooltip,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  toolbar: {
    backgroundImage: `url(static/images/header-bg.png)`,
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '10px 0'
  },
  logo: {
    height: '60px',
    width: '160px'
  },
  auth: {
    fontFamily: 'sans-serif',
    fontWeight: 550,
    textDecoration: 'none',
    color: '#738136',
    fontSize: '15px',
    lineHeight: 1.6,
    letterSpacing: '.3px'
  },
  navLink: {
    position: 'relative',
    color: "#151515",
    fontFamily: "sans-serif",
    padding: '0 .5rem',
    margin: '0 1rem',
    fontSize: '1.1rem',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      color: "#738136",
      "&:before": {
        position: "absolute",
        content: '""',
        bottom: -16,
        left: 0,
        right: 0,
        height: '3px',
        width: '50%',
        borderTopLeftRadius: '100px',
        borderTopRightRadius: '100px',
        transform: 'translate3d(50%, 0, 0)',
        transition: 'all ease 0.3s',
        background: "#738136",
      },
    },
  },
  navIcon: {
    color: "#fff",
    padding: "5px",
    backgroundColor: "#738136",
    borderRadius: "300px",
  }
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#738136",
  '&:hover': {
    backgroundColor: alpha("#738136", 0.75),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '1000%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: "transparent",
  color: '#fff',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.4, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Navbar(props) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Link to="/">
              <img className={classes.logo} src="static/images/logo.png" alt="" />
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Tìm sản phẩm, danh mục bạn mong muốn…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Box style={{ color: "#000" }}>
                <a className={classes.auth} href="/register">Đăng kí</a>
                <span className={classes.auth}>/</span>
                <a className={classes.auth} href="/register">Đăng nhập</a>
              </Box>
              <Grid ml={3}>
                <Button
                  style={{ backgroundColor: "#738136", padding: "5.5px 25px" }}
                  variant="contained"
                  startIcon={<FavoriteIcon />}
                >
                  Đã xem
                </Button>
              </Grid>
              <Grid ml={3}>
                <Button
                  style={{ backgroundColor: "#738136" }}
                  variant="contained"
                  startIcon={<ShoppingBagIcon />}
                >
                  Giỏ hàng
                </Button>
              </Grid>
            </div>
          </Toolbar>

          <Hidden mdDown implementation="css">
            <Grid
              container
              display="flex"
              justifyContent="space-around"
              style={{
                padding: "0 150px", backgroundColor: "#fff", borderTop: "1px solid #e7edd7", borderBottom: "1px solid #e7edd7"
              }}
            >
              <Tooltip title="Delete">
                <IconButton>
                  <HomeIcon style={{ fontSize: '25px' }} className={classes.navIcon} />
                </IconButton>
              </Tooltip>
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Link to="/" className={classes.navLink}>
                    About us
                  </Link>
                  <Link to="/" className={classes.navLink}>
                    Sản phẩm - khuyến mại
                  </Link>
                  <Link to="/" className={classes.navLink}>
                    Nguyên liệu
                  </Link>
                  <Link to="/" className={classes.navLink}>
                    Blog làm đẹp
                  </Link>
                  <Link to="/" className={classes.navLink}>
                    Tin tức
                  </Link>
                  <Link to="/" className={classes.navLink}>
                    Hệ thống cửa hàng
                  </Link>
                </ListItem>
              </List>

              <Box display="flex" alignItems="center" style={{ fontFamily: 'sans-serif', color: "#738136" }}>
                <PhoneInTalkIcon style={{ fontSize: '25px' }} className={classes.navIcon} />
                <span style={{ fontSize: "14px", padding: '0 5px' }}>Hotline</span>
                <b>
                  0393919320
                </b>
              </Box>
            </Grid>
          </Hidden>
        </AppBar>
      </ElevationScroll>
    </>
  );
}

export default Navbar;
