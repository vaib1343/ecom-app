import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
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
export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (userAuth) => {
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
            });
        }
    } catch (error) {
        console.log({ error });
    }
};
