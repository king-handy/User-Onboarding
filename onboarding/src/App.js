import React, { useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form.js'

import logo from './logo.svg';
import './App.css';



const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: '',

}

let schema = yup.object().shape({
  name: yup.string().required('Name is required')
  email: yup.string().email()
})

function App() {
  const [users, setUsers] = useState({
    name: '',
    email: '',
    password: '',
    termsOfService: ''
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
