import './Auth.scss';
import React, { Fragment } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

const Auth = () => {
    return (
        <Fragment>
            <div className='auth-container'>
                <SignInForm />
                <SignUpForm />
            </div>
        </Fragment>
    );
};

export default Auth;
