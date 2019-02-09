import React, { Component } from 'react';
//Material-UI components work in isolation. 
import { createStyles, withStyles } from  '@material-ui/core';
import Button from '@material-ui/core/Button';
import UpdateFilled from '@material-ui/icons/Update';

const styles = () =>
  createStyles({
    customButton: {
      backgroundColor: '#4CAF50'
    },
    icon: {
      margin: '0 8px'
    }
  });
  
class CustomButtonComponent extends Component {
    constructor(props){
        super(props);
        console.log('constructor CustomButton');
      }

  /*componentDidMount() {
    console.log('componentDidMount CustomButton');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate CustomButton');
  }

  componentWillMount() {
    console.log('componentWillMount CustomButton');
  }*/

  render() {
    const { classes, actionOnClick } = this.props;

    console.log('render CustomButton');
    console.log(classes);
    return (
      /* Recibe propiedades a traves del this prop */
      <Button className={classes.customButton} variant="contained" color="primary" onClick={actionOnClick}>
        {this.props.text}
        <UpdateFilled/>
      </Button>
    );
  }
}

export const CustomButton = withStyles(styles)(CustomButtonComponent);
//export default withStyles(styles)(CustomButtonComponent);