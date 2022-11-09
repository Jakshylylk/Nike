import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUpIA1p7x7Car6xWjp80_P49JCsyL7hRc",
  authDomain: "js25-online-shop-49c79.firebaseapp.com",
  projectId: "js25-online-shop-49c79",
  storageBucket: "js25-online-shop-49c79.appspot.com",
  messagingSenderId: "880264274870",
  appId: "1:880264274870:web:fedde76c4b9d3f72c11717",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
