import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);


class App extends Component {
  render() {
    return (
      <div className="App">
          {element}
          ,
  <img src={logo}/>,
  <h2>hihihi </h2>
      </div>
  
    );
  }
}

export default App;
