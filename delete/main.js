import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const pk_render = document.getElementById("packages_render");
const del = document.getElementById("Delete");

{
  var country = document.getElementById("country");
  var cost = document.getElementById("cost");
  var link = document.getElementById("link");
  var table = document.getElementsByClassName("table");
  var day = document.getElementById("days");
  var person = document.getElementById("person");
  var content = document.getElementById("content");
  var i = 0
  var p = document.getElementById("parent");
}
document.getElementById("add").onclick = async () => {
  try {
    const docRef = await addDoc(collection(db, "Admins"), {
      country: country.value,
      cost: cost.value,
      link: link.value,
      day: day.value,
      person: person.value,
      content: content.value,
    });
    console.log("Document written with ID: ", docRef.id);
    location.reload();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const querySnapshot = await getDocs(collection(db, "Admins"));
table = `
<div>
<tr>
  <th>Country</th>
  <th>Cost</th>
  <th>Link</th>
  <th>Days</th>
  <th>Person</th>
  <th>Content</th>
  <th>Id</th>
</tr>
<div/>`;

querySnapshot.forEach((item) => {
  table = `<tr>
        <td>${item.data().country}</td>
        <td>${item.data().cost}</td>
        <td> <a href="${item.data().link}"> ảnh </a></td>
        <td>${item.data().day}</td>
        <td>${item.data().person}</td>
        <td>${item.data().content}</td>
        <td>${item.id} </td>
        <td id="${item.id}-td"><td>
      </tr>`;

  const newBtn = document.createElement("button");
  newBtn.setAttribute("id", `${item.id}`);
  newBtn.innerHTML = "Xóa~";
  // document.getElementById("render").innerHTML += table;
  newBtn.addEventListener("click", handleDelete);
  function handleDelete() {
    console.log(item.id)
    deleteDoc(doc(db, "Admins", item.id));
  }
  
  document.getElementById("render").innerHTML += table;
  
    document.getElementById(`${item.id}-td`).appendChild(newBtn);
    i+=1
    console.log(i)
    console.log(document.getElementById("render"))
});

// del.addEventListener("click", async function() {
// function deleti(v) {
//     v=v.toString();

//     console.log(v);
//         db.collection("Admins").doc(v).delete().then(function() {
//             console.log("Document successfully deleted!");
//         }).catch(function(error) {
//             console.error("Error removing document: ", error);
//         });

//     }
//     deleti(v)
// })

// await deleteDoc(doc(db, "Admins", id_delete));

//  del.onclick = () => {
//     Delete()
// }

// function deleti(v) {
//     v=v.toString();

//     console.log(v);
//         db.collection("Admins").doc(v).delete().then(function() {
//             console.log("Document successfully deleted!");
//         }).catch(function(error) {
//             console.error("Error removing document: ", error);
//         });

//     }

// document.getElementById(doc.id).appendChild(newBtn)

// handleDelete = (item) => {
//   const newsId = item.id;
//   console.log(newsId);
// }
