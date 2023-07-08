import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
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

{
  var Id = " ";
  var country = document.getElementById("country");
  var cost = document.getElementById("cost");
  var link = document.getElementById("link");
  var table = document.getElementsByClassName("table");
  var day = document.getElementById("days");
  var person = document.getElementById("person");
  var content = document.getElementById("content");
  var i = 0;
  var p = document.getElementById("parent");
}
document.getElementById("add").onclick = async () => {
  if (i === 1) {
    console.log("chạy if");
    console.log(Id);
    await updateDoc(doc(db, "Admins", Id), {
      country: country.value,
      cost: cost.value,
      link: link.value,
      day: day.value,
      person: person.value,
      content: content.value,
    });
    i = 0;
    console.log("i =: ", i);
    location.reload();
  } else {
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
  table += `<tr>
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
  const Btn = document.createElement("button");
  newBtn.setAttribute("id", `${item.id}`);
  newBtn.setAttribute("class", "btn btn-sm btn-primary px-3 border-end")
  Btn.setAttribute("id", `${item.id}`);
  Btn.setAttribute("class", "btn btn-sm btn-primary px-3 border-end")
  newBtn.innerHTML = "Xóa~";
  Btn.innerHTML = "Sửa";
  newBtn.addEventListener("click", handleDelete);
  Btn.addEventListener("click", handleUpdate);
  function handleUpdate() {
    country.value = `${item.data().country}`;
    cost.value = `${item.data().cost}`;
    link.value = `${item.data().link} `;
    day.value = `${item.data().day} `;
    person.value = `${item.data().person} `;
    content.value = `${item.data().content} `;
    Id = `${item.id}`;
    i = 1;
    console.log("i =: ", i);
    console.log(`${item.id}`)
  }
  function handleDelete() {
    deleteDoc(doc(db, "Admins", item.id));
    console.log(item.id);
  }

  document.getElementById("render").innerHTML = table;

  document.getElementById(`${item.id}-td`).appendChild(newBtn);
  document.getElementById(`${item.id}-td`).appendChild(Btn);
  i += 1;
  console.log(i);
  console.log(document.getElementById("render"));
  // ----------------------------------------------------
  // const Btn = document.createElement("button");
  // Btn.setAttribute("id", `${item.id}`);
  // Btn.innerHTML = "Sửa";
  // document.getElementById("render").innerHTML += table;
  // Btn.addEventListener("click", handleUpdate);
  // function handleUpdate() {
  //   country.value = `${item.data().country}`;
  //   cost.value = `${item.data().cost}`;
  //   link.value = `${item.data().link} `;
  //   day.value = `${item.data().day} `;
  //   person.value = `${item.data().person} `;
  //   content.value = `${item.data().content} `;
  //   Id = `${item.id}`;
  //   i = 1;
  //   console.log("i =: ", i);
  // }
  // document.getElementById("render").innerHTML = table;

  // document.getElementById(`${item.id}-td`).appendChild(Btn);
});