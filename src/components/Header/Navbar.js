/* eslint-disable max-len */
import React, { useState } from 'react';

import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  alpha,
  makeStyles,
  useScrollTrigger
} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CreateIcon from '@material-ui/icons/Create';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Menu from '@material-ui/icons/Menu';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import classNames from 'classnames';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundImage: `url(static/images/header-bg.png)`,
    background: '#fff',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '10px 0'
  },
  logo: {
    height: '60px',
    width: '160px',
    [theme.breakpoints.down('sm')]: {
      height: '45px',
      width: '120px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '35px',
      width: '90px',
    },
  },
  auth: {
    fontFamily: 'sans-serif',
    fontWeight: 550,
    textDecoration: 'none',
    color: '#49856e',
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
      color: "#49856e",
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
        background: "#49856e",
      },
    },
  },
  navIcon: {
    color: "#fff",
    padding: "5px",
    backgroundColor: "#49856e",
    borderRadius: "300px",
  },
  appBar: {
  },
  appResponsive: {
    margin: '20px 10px',
  },
  absolute: {
    position: 'absolute',
    zIndex: '1100'
  },
  fixed: {
    position: 'fixed',
    zIndex: '1100',
  },
  navRe: {
    color: '#000',
    'white-space': 'no-wrap',
    width: '100%',
    overFlow: 'hidden',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '20px',
    cursor: 'pointer',
    textDecoration: 'none',
    borderTop: '1px solid #f4f4f4'
  },
  drawerPaper: {
    border: 'none',
    bottom: '0',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    position: 'fixed',
    display: 'block',
    top: '0',
    height: '100vh',
    right: '0',
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    background: 'rgb(255 255 255 )'
  },
  search: {
    position: 'relative',
    borderRadius: '5px',
    backgroundColor: alpha('#49856e', 1),
    '&:hover': {
      backgroundColor: alpha('#49856e', 0.8),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundColor: alpha('#49856e', 0),
      '&:hover': {
        backgroundColor: alpha('#49856e', 1),
      },
      margin: '0 5px 0 20px'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    right: 0,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      color: '#49856e',
      right: -20,
      top: 2,
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '50ch',
    [theme.breakpoints.down('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '10px',
      width: '5ch',
      '&:focus': {
        width: '5ch',
      },
    },
  },
  subNav_grid: {
    padding: "0 150px",
    backgroundColor: "#fff",
    borderTop: "1px solid #49856e38",
    borderBottom: "1px solid #49856e38",
    display: "flex",
    justifyContent: "space-around"
  },
  nav_hotline: {
    fontFamily: 'sans-serif',
    color: "#49856e",
    marginBottom: 20,
    transform: 'translateY(10px)'
  },
  mNav_hotline: {
    fontFamily: 'sans-serif',
    color: "#49856e",
    marginBottom: 20,
    transform: 'translateY(10px)',
    display: 'none'
  },
  header_cart_mobile: {
    display: 'none'
  },
  related_watched_mobile: {
    display: 'none'
  },
  mobile_bottom_menu: {
    display: 'none'
  },
  [theme.breakpoints.down(1500)]: {
    subNav_grid: {
      padding: 0
    }
  },
  [theme.breakpoints.down(1200)]: {
    subNav_grid: {
      justifyContent: 'space-between'
    },
    nav_hotline: {
      display: 'none',
    },
    mNav_hotline: {
      display: 'flex',
      paddingRight: '24px'
    },
    home_icon_grid: {
      paddingLeft: '12px'
    },
    list: {
      borderTop: "1px solid #49856e38",
      width: '100%'
    },
    header_cart: {
      display: 'none'
    },
    header_cart_mobile: {
      display: 'block'
    },
    related_watched: {
      display: 'none'
    },
    related_watched_mobile: {
      display: 'block'
    }
  },
  [theme.breakpoints.down('sm')]: {
    toolbar: {
      justifyContent: 'space-between',
    },
    mobile_bottom_menu: {
      display: 'block'
    },
    related_watched_mobile: {
      display: 'none'
    }
  },
  [theme.breakpoints.down('xs')]: {
    header_auth: {
      display: 'none'
    },
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

function Navbar(props, { fixed, absolute }) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar className={appBarClasses} position="sticky">
          <Toolbar className={classes.toolbar}>
            <Link to="/">
              <img className={classes.logo} src="static/images/logo-TPX.png" alt="" />
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Tìm sản phẩm, danh mục mong muốn..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Box ml={2} className={classes.header_auth}>
                <a className={classes.auth} href="/register">Đăng kí</a>
                <span className={classes.auth}>/</span>
                <a className={classes.auth} href="/login">Đăng nhập</a>
              </Box>
              <Box ml={2} className={classes.related_watched}>
                <Button
                  style={{ backgroundColor: "#49856e", padding: "5.5px 25px", color: "#fff" }}
                  variant="contained"
                  startIcon={<FavoriteIcon style={{ color: '#fff' }} />}
                >
                  Đã xem
                </Button>
              </Box>
              <Box ml={1} className={classes.related_watched_mobile}>
                <Tooltip title="watched">
                  <IconButton
                    color="inherit"
                    onClick={() => {}}
                  >
                    <FavoriteIcon style={{ color: '#49856e' }} />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box ml={1} className={classes.header_cart}>
                <Button
                  style={{ backgroundColor: "#49856e", color: "#fff" }}
                  variant="contained"
                  startIcon={<LocalMallIcon style={{ color: '#fff' }} />}
                >
                  Giỏ hàng
                </Button>
              </Box>
              <Box ml={1} className={classes.header_cart_mobile}>
                <Tooltip title="Giỏ hàng rỗng">
                  <IconButton
                    color="inherit"
                    onClick={() => {}}
                  >
                    <LocalMallIcon style={{ color: '#49856e' }} />
                  </IconButton>
                </Tooltip>
              </Box>
              <Hidden mdUp>
                <IconButton
                  aria-label="open drawer"
                  className={classes.btDrawer}
                  onClick={handleDrawerToggle}
                >
                  <Menu style={{ fontSize: 30 }} />
                </IconButton>
              </Hidden>
            </div>
          </Toolbar>

          <Hidden smDown implementation="css">
            <Grid
              container
              className={classes.subNav_grid}
            >
              <Link className={classes.home_icon_grid} to="/">
                <Tooltip title="Home">
                  <IconButton>
                    <HomeIcon style={{ fontSize: '25px' }} className={classes.navIcon} />
                  </IconButton>
                </Tooltip>
              </Link>
              <Box
                display="flex"
                alignItems="center"
                className={classes.mNav_hotline}
              >
                <PhoneInTalkIcon style={{ fontSize: '25px' }} className={classes.navIcon} />
                <span style={{ fontSize: "14px", padding: '0 5px' }}>Hotline</span>
                <b>
                  0393919320
                </b>
              </Box>
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
              <Box
                display="flex"
                alignItems="center"
                className={classes.nav_hotline}
                style={{
                  fontFamily: 'sans-serif', color: "#49856e", marginBottom: 20, transform: 'translateY(10px)'
                }}
              >
                <PhoneInTalkIcon style={{ fontSize: '25px' }} className={classes.navIcon} />
                <span style={{ fontSize: "14px", padding: '0 5px' }}>Hotline</span>
                <b>
                  0393919320
                </b>
              </Box>
            </Grid>
          </Hidden>

          <Box className={classes.mobile_bottom_menu}>
            <Grid
              container
              display="flex"
              justifyContent="space-evenly"
              style={{
                padding: "0 20px", backgroundColor: "#fff", borderTop: "1px solid #49856e38", borderBottom: "1px solid #49856e38"
              }}
            >
              <List className={classes.subList}>
                <ListItem className={classes.listItem}>
                  <Link to="/" className={classes.navLink}>
                    <b>Sản phẩm - khuyến mại</b>
                  </Link>
                  <Link to="/" className={classes.navLink}>
                    <b>Hệ thống cửa hàng</b>
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Box>

          <Hidden lgUp implementation="js">
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              classes={{
                paper: classes.drawerPaper
              }}
              onClose={handleDrawerToggle}
            >
              <div className={classes.appResponsive}>
                <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerToggle}>
                    <ChevronRightIcon />
                  </IconButton>
                </div>
                <Divider />
                <List>
                  <ListItem button>
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText>Đăng nhập</ListItemText>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon><CreateIcon /></ListItemIcon>
                    <ListItemText>Đăng kí</ListItemText>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  {['Về TPX', 'Minh bạch nguyên liệu', 'Blog làm đẹp', 'Tin tức'].map((text) => (
                    <ListItem button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
                <Divider />
              </div>
            </Drawer>
          </Hidden>
        </AppBar>
      </ElevationScroll>
    </>
  );
}

Navbar.propTypes = {
  fixed: PropTypes.bool,
  absolute: PropTypes.bool
};

export default Navbar;
