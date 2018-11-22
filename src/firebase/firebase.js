import * as firebase from "firebase";

const prodConfig = {
    apiKey: "AIzaSyCiHsamancSucIN4i4AQOupkrbouKQXOas",
    authDomain: "mongouter-36813.firebaseapp.com",
    databaseURL: "https://mongouter-36813.firebaseio.com",
    projectId: "mongouter-36813",
    storageBucket: "mongouter-36813.appspot.com",
    messagingSenderId: "905342620296"
};

const devConfig = {
    apiKey: "AIzaSyCiHsamancSucIN4i4AQOupkrbouKQXOas",
    authDomain: "mongouter-36813.firebaseapp.com",
    databaseURL: "https://mongouter-36813.firebaseio.com",
    projectId: "mongouter-36813",
    storageBucket: "mongouter-36813.appspot.com",
    messagingSenderId: "905342620296"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

window.auth = auth;

export {
    db,
    auth
};