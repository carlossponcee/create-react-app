import React, { Component } from 'react';
//Material-UI components work in isolation. 
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class CustomSelectComponent extends Component {
    constructor(props){
        super(props);
        console.log('constructor CustomSelect');
    }

    state = {
        age: '',
        open: false,
    };
    
    handleChange = event => {
        console.log(event.target);
        console.log([event.target.name]);
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {
        console.log('render CustomSelect');
        return (
            <Select
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                onChange={this.handleChange}
                value={this.state.age}
                inputProps={{
                name: 'age',
                id: 'demo-controlled-open-select',
                }}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                <MenuItem value={40}>fourty</MenuItem>
            </Select>
        );
    }
}
export default CustomSelectComponent;