// Bibliotecas
import React, { Component } from 'react';

// Styles
import './app.css';

// Views
import Main from './views/main';

// Components
import Header from './components/template/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
