import React from 'react'

export default function Form() {
    
    
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
                <label>
                    Terms of Service:
                    <input value={form.terms} name='terms' type='checkbox' onChange={handleChange} />
            </form>
        </div>
    )
}