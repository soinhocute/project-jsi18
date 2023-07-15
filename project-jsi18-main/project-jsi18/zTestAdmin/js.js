import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {getFirestore,collection,getDocs,} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDuL-CyR0vWvZRTkFwD_dhq0yq8iXnw3iU",
    authDomain: "project-jsi18.firebaseapp.com",
    projectId: "project-jsi18",
    storageBucket: "project-jsi18.appspot.com",
    messagingSenderId: "537043743152",
    appId: "1:537043743152:web:daa2cfc6770ee1c0716675",
    measurementId: "G-SK5FN4PYXP",
  };

var table = document.getElementsByClassName("table")

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "Ticket"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
});

table = `
<div>
<tr>
  <th>Name</th>
  <th>Email</th>
  <th>Message</th>
  <th>Destination</th>
  <th>DateTime</th>
  <th>id</th>
</tr>
<div/>`;
querySnapshot.forEach((doc) => {
  console.log(doc.id);
    table += `<tr>
        <td>${doc.data().Name}</td>
        <td>${doc.data().Email}</td>
        <td>${doc.data().Message}</td>
        <td>${doc.data().destination}</td>
        <td>${doc.data().DateTime}</td>
        <td>${doc.id} </td>
      </tr>`;
})
document.getElementById("render").innerHTML = table;
document.getElementById("homeAdmin").onclick = async () => {
  window.location.replace("../admin/index.html")
};

