import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import Form from './Form.js'

import logo from './logo.svg';
import './App.css';

// let schema = yup.object().shape({
//   name: yup.string().required('Name is required')
//   email: yup.string().email()
//   password: yep.string().required('Password is required')

// })

function App() {
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    yup.isSchema.isValid(form).then(valid => setDisabled(!valid))
  }, [form])

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
