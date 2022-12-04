import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from "firebase/firestore";

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

export const addDocumentAndCollection = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log("done");
};

export const getCategoriesAndDocument = async () => {
    try {
        const collectionRef = collection(db, "categories");
        const q = query(collectionRef);
        const querySnapshot = await getDocs(q);
        const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
            const { title, items } = docSnapshot.data();
            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
        return categoryMap;
    } catch (error) {
        console.log({ error });
    }
};

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

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);

export const SignOutUser = () => signOut(auth);
