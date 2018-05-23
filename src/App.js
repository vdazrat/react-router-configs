import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>This is the root</div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
