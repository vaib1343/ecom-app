import './SignInForm.scss';
import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const defaultValue = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultValue);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields((preState) => ({
            ...preState,
            [name]: value,
        }));
    };
    return (
        <div className='sign-in-container'>
            <form>
                <h2>Already have an account</h2>
                <span>Sign In with yuur email and password</span>
                <div>
                    <FormInput label='Email' type='email' required name='email' onChange={handleChange} value={email} />
                </div>
                <div>
                    <FormInput label='Password' type='password' required name='password' onChange={handleChange} value={password} />
                </div>
                <div className='btn-container'>
                    <Button>Sign In</Button>
                    <Button className='btn-google'>Sign In with google</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
