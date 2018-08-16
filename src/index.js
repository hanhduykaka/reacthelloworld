import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Prop from './Prop';

import registerServiceWorker from './registerServiceWorker';


function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('time'));
  }
  
  setInterval(tick, 100);


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Prop />, document.getElementById('prop'));


registerServiceWorker();
