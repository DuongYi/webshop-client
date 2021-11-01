import React from 'react';

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
  alpha,
  makeStyles
} from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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
  },
  search: {
    position: 'relative',
    borderRadius: '5px',
    backgroundColor: alpha('#738136', 0.8),
    '&:hover': {
      backgroundColor: alpha('#738136', 1),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
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
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <img className={classes.logo} src="static/images/logo.png" alt="" />
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
            <Box>
              <a className={classes.auth} href="/register">Đăng kí</a>
              <span className={classes.auth}>/</span>
              <a className={classes.auth} href="/register">Đăng nhập</a>
            </Box>
            <Box ml={2}>
              <Button
                style={{ backgroundColor: "#738136", padding: "5.5px 25px", color: "#fff" }}
                variant="contained"
                startIcon={<FavoriteIcon style={{ color: '#fff' }} />}
              >
                Đã xem
              </Button>
            </Box>
            <Box ml={1}>
              <Button
                style={{ backgroundColor: "#738136", color: "#fff" }}
                variant="contained"
                startIcon={<ShoppingBagIcon style={{ color: '#fff' }} />}
              >
                Giỏ hàng
              </Button>
            </Box>
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
            <Link to="/">
              <Tooltip title="Home">
                <IconButton>
                  <HomeIcon style={{ fontSize: '25px' }} className={classes.navIcon} />
                </IconButton>
              </Tooltip>
            </Link>
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
    </>
  );
}

export default Navbar;
