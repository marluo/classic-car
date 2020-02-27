import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCpBywgSRcS2fFSNLYPNvIPXXhxkFyaWfQ",
  authDomain: "octane-94589.firebaseapp.com",
  databaseURL: "https://octane-94589.firebaseio.com",
  projectId: "octane-94589",
  storageBucket: "octane-94589.appspot.com",
  messagingSenderId: "760734562492",
  appId: "1:760734562492:web:b9bb2bf14553f6bcabf8b9",
  measurementId: "G-XNW91JHR3J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
