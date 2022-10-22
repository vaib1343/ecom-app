import React from 'react';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebaseUtils';

const SignIn = () => {
    const handleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        console.log({user})
        createUserDocumentFromAuth(user);
    };
    return <button onClick={handleSignIn}></button>;
};

export default SignIn;
