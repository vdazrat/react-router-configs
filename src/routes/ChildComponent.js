import React, { Component } from 'react';
import '../App.css';

class ChildComponent extends Component {
  render() {
    return (
      <div className="child">
      	Hey This is a child.
      </div>
    );
  }
}

export default ChildComponent;