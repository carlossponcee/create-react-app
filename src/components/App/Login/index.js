import React, { Component } from 'react';
//third party
import { createStyles, withStyles, Paper, TextField, Typography, Button } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login'; //google login component

//style get theme
const style = (theme) => createStyles ({
    container: {
      padding: theme.spacing.unit * 3
    },
    buttonHolder: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    customButton: {
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.secondary.main,
        '&:hover' : {
            background : theme.palette.secondary.dark
        }
    },
    googleButton: {
        marginTop: theme.spacing.unit,
        backgroundColor: '#df4b37',
        color: '#fff',
        '&:hover': {
            background: '#b13126'
        }
    }
  });

class LoginComponent extends Component {
    state = {
        user: '',
        pass: ''
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    responseGoogle = (response) =>{
        console.log(response);
    }

  render() {
    const { classes } = this.props;
    return (
    <Paper className={ classes.container }>
        <Typography variant={'headline'}>Login</Typography>
        <form noValidate autoComplete="off">
            <TextField
            fullWidth
            id="standard-name"
            label="Username"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('user')}
            />
            <TextField
            fullWidth
            id="standard-name"
            label="Password"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('pass')}
            margin="normal"
            />
            <div className={ classes.buttonHolder }>
                <Button variant="contained" color="primary" className={ classes.customButton } fullWidth>
                Login
                </Button>
            </div>
            <GoogleLogin
                clientId='655854141581-ien7lbm8cbvkefkldov4ute6vvucq2ea.apps.googleusercontent.com'
                render = {renderProps => (
                    <Button fullWidth className={ classes.googleButton } onClick={renderProps.onClick}>This is my custom Google button</Button>
                )}
                onSuccess = { this.responseGoogle }
                onFailure = { this.responseGoogle }
                >
            </GoogleLogin>
        </form>
    </Paper>
    );
  }
}

export const Login =  withStyles(style)(LoginComponent);