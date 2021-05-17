import firebase from "firebase";
const config = {
    apiKey: "AIzaSyBGzaXEwLOdhtDiH8qZLYGPItraSXb2Y3Q",
    authDomain: "this-is-afrikan.firebaseapp.com",
    databaseURL: "https://this-is-afrikan.firebaseio.com",
    projectId: "this-is-afrikan",
    storageBucket: "this-is-afrikan.appspot.com",
    messagingSenderId: "632820067674",
    appId: "1:632820067674:web:5ce28e0df5fd76b13b1763",
    measurementId: "G-N5DQ9L4FQQ"
};
firebase.initializeApp(config);
export const auth = firebase.auth;