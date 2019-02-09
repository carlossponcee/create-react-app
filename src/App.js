import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { CustomButton } from './components/customButton';
//import CustomButton from './components/customButton';
import CustomSelect from './components/CustomSelect';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      simpleValue : 'Hola',
      greeting: 'Welcome'
    };
    console.log('constructor App');
  }
  componentDidMount() {
    console.log('componentDidMount App');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate App');
  }
  componentWillMount() {
    console.log('componentWillMount App');
  }

  handleClick = () => {
    console.log('Click on button from app');
    const text = this.state.simpleValue;
    this.setState({
      simpleValue: (text === 'Hola') ? 'Adios' : 'Hola'
    });
  }

  handleGreeting = () => {
    const text = this.state.greeting;
    this.setState({
      greeting: (text === 'Welcome') ? 'Good Bye' : 'Welcome'
    });
  }

  render() {
    console.log(this.state);
    console.log('render App');
    const text = 'Gretting';
    return (
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        <Navbar />
        {this.state.simpleValue}
        <CustomSelect/>
        <CustomButton
          actionOnClick={this.handleClick}
          text={text}
        />
        <CustomButton
          actionOnClick={this.handleGreeting}
          text={this.state.greeting}
        />
      </div>
    );
  }
}

export default App;