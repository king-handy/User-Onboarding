import React, { useState } from 'react'

export default function Form() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        terms: false,
    })

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox'? check : value
        setForm({...form, [name]: valueToUse})
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
        </div>
    )
}