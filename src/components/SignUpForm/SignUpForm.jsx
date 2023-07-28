import { useState } from 'react';
import App from '../../pages/App/App'

export default function SignUpForm() {
    const [userForm, setUserForm] = useState({
        name:'',
        email:'',
        password:'',
        confirm:''
    })
    async function handleSubmit(evt) {
        evt.preventDefault();
    }

    function handleChange(evt) {
        setUserForm({
            [evt.target.name]:evt.target.value,
            error:''
        });

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={userForm.name}
                onChange={handleChange}
                placeholder='Name'
                name='name'
             />
            <input 
                type="text"
                value={userForm.email}
                onChange={handleChange}
                placeholder='Email'
                name='email'
             />
            <input 
                type="text"
                value={userForm.password}
                onChange={handleChange}
                placeholder='Password'
                name='password'
             />
            <input 
                type="text"
                value={userForm.confirm}
                onChange={handleChange}
                placeholder='Confirm Password'
                name='confirmPassword'
             />
        </form>
        <button>Sign Up</button>

        </>
    );
}