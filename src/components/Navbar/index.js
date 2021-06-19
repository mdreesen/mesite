import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

// you can use the useScrollTrigger() hook to respond to user scroll actions
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'transparent',
  },
  MuiAppBar: {
    background: 'transparent',
    position: 'fixed'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  colorPrimary: {
    background: "transparent"
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

    window.addEventListener('scroll', function() {
    let navbar = document.querySelector('#nav');
    // let logo = document.querySelector('.logo-nav')
    let windowPosition = window.scrollY > 90;

    navbar.classList.toggle('scrolling-active', windowPosition);
    // logo.classList.toggle('scrolling-logo-active', windowPosition);

  })


  // function HideOnScroll(props) {
  //   const trigger = useScrollTrigger();
  //   return (
  //     <Slide in={!trigger}>
  //       <div>Hello</div>
  //     </Slide>
  //   );
  // }

  return (
    <div id="nav" className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            Michael Dreesen
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}