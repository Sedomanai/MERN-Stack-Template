import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

console.log("TEST IN MAIN.JS");

//ReactDOM.render(<App/>, document.getElementById('root')); 
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  console.log('hydrate');
  ReactDOM.hydrate(<App/>, rootElement);
} else {
  console.log('render');
  ReactDOM.render(<App/>, rootElement);
}