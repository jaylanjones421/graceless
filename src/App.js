import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        {routes}
        <Footer/>
      </div>
    );
  }
}

export default App;
