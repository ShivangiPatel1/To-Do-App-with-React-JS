import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter} from 'react-router-dom'

// const DATA = [
//   { id: "todo-0", name: "Eat", completed: true },
//   { id: "todo-1", name: "Sleep", completed: false },
//   { id: "todo-2", name: "Repeat", completed: false }
// ];

ReactDOM.render(
  
  <React.StrictMode>
  <BrowserRouter>
    <App/></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

