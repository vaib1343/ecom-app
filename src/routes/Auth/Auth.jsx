import './Auth.scss';
import React, { Fragment, useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from '../../utils/firebase/firebaseUtils';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

const Auth = () => {
    const handleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };

    useEffect(() => {
        getRedirectResult(auth).then((response) => {
            if (response) {
                const { user } = response;
                createUserDocumentFromAuth(user);
            }
        });
    }, []);

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
