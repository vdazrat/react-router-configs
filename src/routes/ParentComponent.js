import React, { Component } from 'react';
import '../App.css';

class ParentComponent extends Component {
  render() {
    return (
      <div className="parent">
      	<div>This is the parent component</div>
        {this.props.children}
      </div>
    );
  }
}

export default ParentComponent;