import React, { useState } from 'react'

export default function Form() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        termsOfService: false,
    })

    const handleChange = event => {
        console.log('change!')
    }
    
    return (
        <div>
            <form>
                <label type='text'>
                    Name:
                    <input value={form.user} name='name' type='text' onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input value={form.email} name='email' type='text' onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input value={form.password} name='password' type='text' onChange={handleChange} />
                </label>
                <label>
                    Terms of Service:
                    <input value={form.termsOfService} name='terms' type='checkbox' onChange={handleChange} />
                </label>
            </form>
        </div>
    )
}