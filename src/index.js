import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Welcome } from './views/Welcome';

ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);
