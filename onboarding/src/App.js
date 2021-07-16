import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import * as yup from 'yup'
import Form from './Form.js'

import logo from './logo.svg';
import './App.css';

let schema = yup.object().shape({
  name: yup.string().required('Name is required')
  email: yup.string().email()
  password: yep.string().required('Password is required')

})

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/form'>Form Data</Link>

          <Route exact path='/' component={App} />
          <Route path='/form' component={Form} />
        </Router>
      </header>
    </div>
  );
}

export default App;
