// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDuL-CyR0vWvZRTkFwD_dhq0yq8iXnw3iU",
  authDomain: "project-jsi18.firebaseapp.com",
  projectId: "project-jsi18",
  storageBucket: "project-jsi18.appspot.com",
  messagingSenderId: "537043743152",
  appId: "1:537043743152:web:daa2cfc6770ee1c0716675",
  measurementId: "G-SK5FN4PYXP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


  document.getElementById("Signout").onclick = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Dang xuat thanh cong")
        alert("Bạn đã đăng xuất")
        window.location.replace("./index.html")
      }).catch((error) => {
        // An error happened.
        console.log("That bai",error.message)
      });
}

  
