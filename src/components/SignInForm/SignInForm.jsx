import './SignInForm.scss';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { signInWithGooglePopup, SignInAuthUserWithEmailPassword } from '../../utils/firebase/firebaseUtils';

const defaultValue = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultValue);
    const { email, password } = formFields;

    const resetFormField = () => {
        setFormFields(defaultValue);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields((preState) => ({
            ...preState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await SignInAuthUserWithEmailPassword(email, password);
            resetFormField();
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                toast('Wrong Password', {
                    type: 'error',
                });
            } else if (error.code === 'auth/user-not-found') {
                toast('User not found', {
                    type: 'error',
                });
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleSignIn = async () => {
        await signInWithGooglePopup();
    };

    return (
        <div className='sign-in-container'>
            <form onSubmit={handleSubmit}>
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
                    <Button type='button' className='btn-google' onClick={handleSignIn}>
                        Sign In with google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
