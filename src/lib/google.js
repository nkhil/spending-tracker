import firebase from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();

// eslint-disable-next-line import/prefer-default-export
export const signInWithGoogle = () => {
  firebase.auth().signInWithRedirect(provider);
};
