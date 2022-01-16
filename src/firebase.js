import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig={
    apiKey: "AIzaSyBkmKwLPNcpS2xSPKd6Vj1TJm1rZaSBzsg",
  authDomain: "sapphire-12881.firebaseapp.com",
  projectId: "sapphire-12881",
  storageBucket: "sapphire-12881.appspot.com",
  messagingSenderId: "633399300641",
  appId: "1:633399300641:web:a93ede26aa529d16298960"
};

firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
const firestore=firebase.firestore();
export const database={
    users: firestore.collection('users'),
    getTimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
}
export const storage= firebase.storage()