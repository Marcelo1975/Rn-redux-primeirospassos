import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducers from './src/Reducers';

import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Login from './src/Login';

let store = createStore(Reducers);

const Navegador = StackNavigator({
  Home:{
    screen:Home
  },
  Cadastro:{
    screen:Cadastro
  },
  Login:{
    screen:Login
  }
  
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navegador />
      </Provider>
    );
  }
}