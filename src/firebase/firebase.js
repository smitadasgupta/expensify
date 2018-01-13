import * as firebase from 'firebase';


/* var config = {
    apiKey: "AIzaSyDMaFpCxANOo4-fnO9Q11TJ0M9x0kBZ3R0",
    authDomain: "expensify-43a08.firebaseapp.com",
    databaseURL: "https://expensify-43a08.firebaseio.com",
    projectId: "expensify-43a08",
    storageBucket: "expensify-43a08.appspot.com",
    messagingSenderId: "210932431073"
}; */

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };