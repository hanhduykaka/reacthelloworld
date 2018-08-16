import React, { Component } from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

let element = <Welcome name="Sara" />;

class Prop extends Component {
  render() {
    return (
      <div className="Prop">
          {element}
      </div>
  
    );
  }
}

export default Prop;
