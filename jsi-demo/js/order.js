import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
const name = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");

console.log("hello");

const firebaseConfig = {
  apiKey: "AIzaSyDuL-CyR0vWvZRTkFwD_dhq0yq8iXnw3iU",
  authDomain: "project-jsi18.firebaseapp.com",
  projectId: "project-jsi18",
  storageBucket: "project-jsi18.appspot.com",
  messagingSenderId: "537043743152",
  appId: "1:537043743152:web:daa2cfc6770ee1c0716675",
  measurementId: "G-SK5FN4PYXP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const querySnapshot = await getDocs(collection(db, "Ticket"));

// querySnapshot.forEach((doc) => {
//     console.log(doc.data());
// });

document.getElementById("order").onclick = async () => {
  try {
  const docRef = await addDoc(collection(db, "Ticket"), {
      Name: name.value,
      Email: email.value,
      Message: mess.value,
  });
  console.log("Document written with ID: ", docRef.id);
  } catch (e) {
  console.error("Error adding document: ", e);
  }

  console.log("oke");
};
