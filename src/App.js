import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeView from './components/HomeView/HomeView';
import ItemView from './components/ItemView/ItemView'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <HomeView/>
        <Footer/>
      </div>
    );
  }
}

export default App;
