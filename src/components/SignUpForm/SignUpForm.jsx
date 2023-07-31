import { useState } from 'react';
import { signUp } from '../../utilities/users-service';

export default function SignUpForm() {
    const [userForm, setUserForm] = useState({
        name:'',
        email:'',
        password:'',
        confirm:''
    });
    // async function handleSubmit(evt) {
    //     evt.preventDefault();
    //     try {
    //         const {name, email, password} = userForm;
    //         const formData = {name, email, password};
    //         const user = await signUp(formData);
    //         setUserForm(prevUserForm => ({
    //             ...prevUserForm,
    //             ...user,
    //           }));
    //     } catch {
    //         console.log('Sign Up API Error:', error.message); // Log the specific error message
    //         setUserForm(prevUserForm => ({
    //           ...prevUserForm,
    //         error: 'Sign Up Failed - Try Again!' //
    //       }
        
    //     }
    // }
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          const { name, email, password } = userForm;
          const formData = { name, email, password };
          const user = await signUp(formData);
          setUserForm(prevUserForm => ({
            ...prevUserForm,
            ...user,
          }));
        } catch (error) {
          console.log('Sign Up API Error:', error.message); // Log the specific error message
          setUserForm(prevUserForm => ({
            ...prevUserForm,
            error: 'Sign Up Failed - Try Again!', // Set the error property in state
          }));
        }
    }
    
    function handleChange(evt) {
        setUserForm({
            ...userForm,
            [evt.target.name]:evt.target.value,
            error:''
        });
    }
    const disable = userForm.password !== userForm.confirm;
    
    return(
        <div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={userForm.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={userForm.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={userForm.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={userForm.confirm} onChange={handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{userForm.error}</p>
        </div>
    );
}