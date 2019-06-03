import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import CONSTANTES from './../../Constantes';

export default class RegularTextField extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            errorText: '',
            value: props.value,
            label: props.label,
            placeholder: props.placeholder,
            name: props.name,
            required: props.required || true
        };
    }

    onChange = (event) => {
        const value = event.target.value;
        
        if(this.state.required){
            if(!value){
                this.setState({errorText : CONSTANTES.DEFAULT_MESSAGES.DEFAULT_REQUIRED_FIELD});
            }            
        }
        
    }

    render() {
        return (
            <TextField 
            label={this.state.label}
            placeholder={this.state.placeholder}
            onChange={this.onChange}
            name={this.state.name}
            helperText={this.state.errorText}
            error ={!!this.state.errorText}
            required={this.state.required}
            fullWidth
            onclur
            />
        )
    }
}
