import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAihwzKZLYEj0NbFpbQFodVTdxFPw_pDm8",
    authDomain: "crwn-clothing-db-4afb4.firebaseapp.com",
    projectId: "crwn-clothing-db-4afb4",
    storageBucket: "crwn-clothing-db-4afb4.appspot.com",
    messagingSenderId: "258208168495",
    appId: "1:258208168495:web:ffdf99329caf629fb364da",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, provider);
export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    try {
        const userDocRef = doc(db, "users", userAuth.uid);
        const userSnapshot = await getDoc(userDocRef);
        if (!userSnapshot.exists()) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }
    } catch (error) {
        console.log({ error });
    }
};

export const createAuthUserWithEmailPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInAuthUserWithEmailPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};
