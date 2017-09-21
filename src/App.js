import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Index from './components/Index'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

export default App;
