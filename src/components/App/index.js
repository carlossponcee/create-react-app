import React, { Component } from 'react';
import Header from './Header';
import { OneColumn } from './Layout/OneColumn';
import { Login } from './Login'
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from '../../lib/mui-theme';

class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor App');
  }

  render() {
    console.log('render App');
    console.log(theme);
    return (
      <MuiThemeProvider theme={theme}>
        <Header/>
        <OneColumn>
          <Login/>
        </OneColumn>
      </MuiThemeProvider>
    );
  }
}

export default App;