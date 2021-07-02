import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALJuhLgRBgSgjt2jEFBTULzrdm7APY81U",
  authDomain: "catch-of-the-day-fanny-ibz.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-fanny-ibz-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

//this is a default export
export default base;
