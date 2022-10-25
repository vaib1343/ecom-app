import React, { useState } from "react";
import {
    createAuthUserWithEmailPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebaseUtils";
const defaultValue = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultValue);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormFields((preState) => ({
            ...preState,
            [name]: value,
        }));
    };
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            if (password === confirmPassword && email && password) {
                const { user } = await createAuthUserWithEmailPassword(
                    email,
                    password
                );
                await createUserDocumentFromAuth(user, { displayName });
            }
            // createUserDocumentFromAuth();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up with your email and password</h1>
            <div>
                <label htmlFor="name">Display name</label>
                <input
                    type="text"
                    required
                    name="displayName"
                    onChange={handleChange}
                    value={displayName}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    required
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
            </div>
            <div>
                <label htmlFor="email">Password</label>
                <input
                    type="password"
                    required
                    name="password"
                    onChange={handleChange}
                    value={password}
                />
            </div>
            <div>
                <label htmlFor="email">Confirm Password</label>
                <input
                    type="password"
                    required
                    name="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword}
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
