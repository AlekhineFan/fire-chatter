import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBmh6ziqOxqZBBQQxPsCGj6td7xFxMErYo',
  authDomain: 'blogz-project.firebaseapp.com',
  projectId: 'blogz-project',
  storageBucket: 'blogz-project.appspot.com',
  messagingSenderId: '1026157737976',
  appId: '1:1026157737976:web:1ae9ab171923c2393ec80d',
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
