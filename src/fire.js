import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtNnwxL_-HsPd5Gjq3O_kRn0-KDQ5Mrrk",
  authDomain: "nike-jaku-adik.firebaseapp.com",
  projectId: "nike-jaku-adik",
  storageBucket: "nike-jaku-adik.appspot.com",
  messagingSenderId: "312771973461",
  appId: "1:312771973461:web:c140cc4221c8487c601fdc",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
