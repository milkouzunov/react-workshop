import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDqxX6JZJ8ClIHcLpEciXOIUaWxUlVBUJ8',
    authDomain: 'react-my-pets-f1868.firebaseapp.com',
    projectId: 'react-my-pets-f1868',
    storageBucket: 'react-my-pets-f1868.appspot.com',
    messagingSenderId: '202423941600',
    appId: '1:202423941600:web:692fdef33acd542ae29385'
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); 
}

export default firebase;

export const auth = firebase.auth();