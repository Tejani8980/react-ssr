import * as React from 'react'
import ReactDOM from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'
const data = window.__INITIAL_DATA__;
ReactDOM.hydrate(
  <BrowserRouter>
    <App apiData={data} />
  </BrowserRouter>,
  document.getElementById('app')
);