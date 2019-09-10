// Bibliotecas
import React, { Component } from 'react';
import Routes from './router';

// Styles
import './app.css';

// Components
import Header from './components/template/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
