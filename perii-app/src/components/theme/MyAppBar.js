/* Imports Node & ReactJS Elements */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import classNames from 'classnames';

import { drawerWidth } from './MyDrawer';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    flex: {
        flex: 1,
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
});

export const MyAppBar = ({ title, classes, open, onDrawerOpen }) => (
    <AppBar
        position="absolute"
        className={classNames(classes.appBar, open && classes.appBarShift)}
    >
        <Toolbar disableGutters={!open}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
                {title}
            </Typography>
        </Toolbar>
    </AppBar>
);

MyAppBar.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onDrawerOpen: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(MyAppBar);