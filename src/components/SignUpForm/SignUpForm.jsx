import './SignUpForm.scss';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { createAuthUserWithEmailPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebaseUtils';
import { useNavigate } from 'react-router-dom';

const defaultValue = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const navigate = useNavigate()
    const [formFields, setFormFields] = useState(defaultValue);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormFields((preState) => ({
            ...preState,
            [name]: value,
        }));
    };

    const resetFormField = () => {
        setFormFields(defaultValue);
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            if (password === confirmPassword) {
                const { user } = await createAuthUserWithEmailPassword(email, password);
                await createUserDocumentFromAuth(user, { displayName });
                navigate('/')
                resetFormField();
            } else {
                toast("Password doesn't match", {
                    type: 'error',
                });
            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                toast('Cannot create user, email already in use', {
                    type: 'error',
                });
            } else {
                toast.error(error?.message)
                console.log('user creation encountered an error', error);
            }
        }
    };

    return (
        <div className='sign-up-container'>
            <form onSubmit={handleSubmit}>
                <h2>Don't have an account?</h2>
                <span>Sign Up with your email and password</span>
                <div>
                    <FormInput label='Display name' type='text' required name='displayName' onChange={handleChange} value={displayName} />
                </div>
                <div>
                    <FormInput label='Email' type='email' required name='email' onChange={handleChange} value={email} />
                </div>
                <div>
                    <FormInput label='Password' type='password' required name='password' onChange={handleChange} value={password} />
                </div>
                <div>
                    <FormInput label='Confirm Password' type='password' required name='confirmPassword' onChange={handleChange} value={confirmPassword} />
                </div>
                <Button type='submit' buttonType='inverted'>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
