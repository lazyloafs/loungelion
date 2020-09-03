import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  render() {
    return (
      <>
      <div className='header'>
        <h1> Lounge Lion</h1>
      </div>
      <a href="/CoffeeFinder"><button className='button'> See your local lounges </button> </a>
      </>
    );
  }
}

export default App;