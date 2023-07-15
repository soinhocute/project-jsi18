import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";


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




document.getElementById("Signin").onclick = () =>{
  signInWithEmailAndPassword(auth, Email.value, Password.value)
    if( (Email.value == "admin@gmail.com" && Password.value == "12345678") ){
      alert("Đăng nhập admin thành công")
      window.location.replace("../admin/index.html")
    }
    else{
      alert("Đăng nhập thất bại")
    };
  }