
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
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential.user,"Dang nhap thanh cong")
    alert("Đăng nhập thành công")
    window.location.replace("../index2.html")
    document.getElementById("title01").innerHTML = Email.value
    // ...
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = errorCode.message;
    console.log(errorMessage,"Dang nhap that bai")
    console.log("lỗi: ", error)
    alert("Đăng nhập thất bại")
  });
}


    



