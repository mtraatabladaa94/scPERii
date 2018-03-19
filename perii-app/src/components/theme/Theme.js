/* Imports Node & ReactJS Elements */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

/* Custom Elements */
import MyAppBar from "./MyAppBar";
import MyDrawer from "./MyDrawer";

const styles = {
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
};

export class Theme extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    state = {
        open: false,
    };
  
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
  
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {

        const { classes } = this.props;

        return (

            <div className={classes.root}>

                <MyAppBar
                    title='Mi Aplicación'
                    open={this.state.open}
                    onDrawerOpen={this.handleDrawerOpen}
                />

                <MyDrawer
                    open={this.state.open}
                    onDrawerClose={this.handleDrawerClose}
                />

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
                </main>

            </div>
        )

    }

}

export default withStyles(styles)(Theme);