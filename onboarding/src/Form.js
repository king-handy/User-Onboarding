import React, { useState } from 'react'
import axios from 'axios'

export default function Form(props) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        terms: false,
    })

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox'? checked : value
        setForm({...form, [name]: valueToUse})
    }
        const { push } = props.history

    const submit = event => {
        event.preventDefault()
        const newForm = { name: form.name.trim(), email: form.email.trim(), password: form.password.trim(), terms: form.terms }
        axios.post('https://reqres.in/api/users', newForm)
            .then(res => {
                setForm({ name: '', email: '', password: '', terms: false })
            })
            .catch(err => {
                debugger
            })
    }   
    
    return (
        <div>
            <form>
                <label type='text'>
                    Name:
                    <input onChange={change} value={form.user} name='name' type='text'  />
                </label>
                <label>
                    Email:
                    <input onChange={change} value={form.email} name='email' type='text' />
                </label>
                <label>
                    Password:
                    <input onChange={change} value={form.password} name='password' type='text' />
                </label>
                <label>
                    Terms of Service:
                    <input onChange={change} checked={form.termsOfService} name='terms' type='checkbox' />
                </label>
            </form>
            <button onClick={() => push('/')}>Return Home</button>
        </div>
    )
}