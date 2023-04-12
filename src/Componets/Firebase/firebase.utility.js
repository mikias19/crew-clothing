import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useRef } from "react";

const config = {
  apiKey: "AIzaSyDBlyOa7nx1RJhu2vUQIBBcoYk3Vg4bCGc",
  authDomain: "crwn-db-34913.firebaseapp.com",
  databaseURL: "https://crwn-db-34913-default-rtdb.firebaseio.com",
  projectId: "crwn-db-34913",
  storageBucket: "crwn-db-34913.appspot.com",
  messagingSenderId: "581678438288",
  appId: "1:581678438288:web:14dbd830b6ee8e61a64515",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const createUserProfileDocument = async (userAuth, addtinalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`Users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(firestore.doc("users/mhdhfydf124jbbddjdj"));
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({ displayName, email, createdDate, ...addtinalData });
    } catch (error) {
      console.log("error at Creating user", error.message);
    }
  }
  console.log(useRef);
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  firebase.auth().signInWithRedirect(provider);

export default firebase;
