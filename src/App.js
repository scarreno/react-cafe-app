import React, { Component } from 'react'  ;
import './App.css';
import Routes from "./Routes";
import { persistor } from './store/Index';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LoadingView from './componentes/Genericos/LoadingView';

class App extends Component {

  render() {
    
    const childProps = {
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      // the loading and persistor props are both required!
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <div>
          <Routes childProps={childProps}/>
        </div>
      </PersistGate>
      
      
    )
  }
}

export default App;
