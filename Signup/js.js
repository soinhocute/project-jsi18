// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyByOJABrPb9Jzm4cTFcrjHQI13EvV2Ten8",
//   authDomain: "buoi6-c05ea.firebaseapp.com",
//   projectId: "buoi6-c05ea",
//   storageBucket: "buoi6-c05ea.appspot.com",
//   messagingSenderId: "977767031404",
//   appId: "1:977767031404:web:48cf2190d4d7e9e57bae49"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDuL-CyR0vWvZRTkFwD_dhq0yq8iXnw3iU",
  authDomain: "project-jsi18.firebaseapp.com",
  projectId: "project-jsi18",
  storageBucket: "project-jsi18.appspot.com",
  messagingSenderId: "537043743152",
  appId: "1:537043743152:web:daa2cfc6770ee1c0716675",
  measurementId: "G-SK5FN4PYXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Email = document.getElementById("Email")
const Password = document.getElementById("Password")


document.getElementById("Signup").onclick = () => {

createUserWithEmailAndPassword(auth, Email.value , Password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Đăng kí thành công")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
    // ..
  });

}











