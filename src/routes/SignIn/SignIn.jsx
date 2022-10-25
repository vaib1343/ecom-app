import React, { Fragment, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
} from "../../utils/firebase/firebaseUtils";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignIn = () => {
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
            <button onClick={handleSignIn}>Sign in with google popup</button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with google redirect
            </button>
            <SignUpForm />
        </Fragment>
    );
};

export default SignIn;
