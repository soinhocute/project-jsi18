import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDuL-CyR0vWvZRTkFwD_dhq0yq8iXnw3iU",
    authDomain: "project-jsi18.firebaseapp.com",
    projectId: "project-jsi18",
    storageBucket: "project-jsi18.appspot.com",
    messagingSenderId: "537043743152",
    appId: "1:537043743152:web:daa2cfc6770ee1c0716675",
    measurementId: "G-SK5FN4PYXP",
  };

const Name = document.getElementById("Name")
const Email = document.getElementById("Email")
const Message = document.getElementById("Message")
const Destination = document.getElementById("destination")
const DateTime = document.getElementById("Name")
const table = document.getElementById("table")



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const querySnapshot = await getDocs(collection(db, "Ticket"));
table = `
<div>
<tr>
  <th>Name</th>
  <th>Email</th>
  <th>Message</th>
  <th>Destination</th>
  <th>DateTime</th>
</tr>
<div/>`;
querySnapshot.forEach((doc) => {
  console.log(doc.id);
    table += `<tr>
        <td>${doc.data().Name}</td>
        <td>${doc.data().Email}</td>
        <td>${doc.data().Message}</td>
        <td>${doc.data().Destination}</td>
        <td>${doc.data().DateTime}</td>
        <td>${doc.id} </td>
      </tr>`;
})

document.getElementById("render").innerHTML = table;