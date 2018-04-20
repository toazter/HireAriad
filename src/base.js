import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAP1MJSpRmsGMW-o1tQtP-6YszPf1q1nRw",
    authDomain: "hireariad.firebaseapp.com",
    databaseURL: "https://hireariad.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
