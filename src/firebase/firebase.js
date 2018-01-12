import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyDMaFpCxANOo4-fnO9Q11TJ0M9x0kBZ3R0",
    authDomain: "expensify-43a08.firebaseapp.com",
    databaseURL: "https://expensify-43a08.firebaseio.com",
    projectId: "expensify-43a08",
    storageBucket: "expensify-43a08.appspot.com",
    messagingSenderId: "210932431073"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'smita'
});