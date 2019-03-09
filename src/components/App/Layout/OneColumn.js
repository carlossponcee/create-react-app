import React, { Component } from 'react';
//third party
import { createStyles, withStyles, Grid } from  '@material-ui/core';

const style = (theme) => createStyles({
    container: {
        [theme.breakpoints.up('sm')]: {
            padding: `${ theme.spacing.unit * 4 }px 0` // top-bottom   left-right(Grid)
        }
    }
});

class OneColumnLayout extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <Grid container justify={'center'} alignItems={'center'} className={classes.container}>
        <Grid item xs={12} sm={6} md={5}>
            { children }
        </Grid>
      </Grid>
    );
  }
}

export const OneColumn = withStyles(style)(OneColumnLayout);