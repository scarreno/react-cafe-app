
import mainState from './store/state';
import React, { Component } from 'react'  ;
import './App.css';
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
  

  }

  userHasAuthenticated = value =>{
    this.setState({ isAuthenticated: value });
  }

  render() {
    console.log(this.state);
    
    const childProps = {
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div>
        <Routes childProps={childProps}/>
      </div>
      
    )
  }
}

export default App;
