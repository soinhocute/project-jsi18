import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  
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
{
  var country = document.getElementById("country");
  var cost = document.getElementById("cost");
  var link = document.getElementById("link");
  var table = document.getElementsByClassName("table");
  var day = document.getElementById("days")
  var person = document.getElementById("person")
  var content = document.getElementById("content")
  var bag = " " ;
  
}
document.getElementById("add").onclick = async () => {
  try {
    const docRef = await addDoc(collection(db, "Admins"), {
      country: country.value,
      cost: cost.value,
      link: link.value,
      day: day.value,
      person: person.value,
      content: content.value
    });
    console.log("Document written with ID: ", docRef.id);
    location.reload();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
// var du_lieu = [];

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
querySnapshot.forEach((doc) => {
  console.log(doc.id);
    table += `<tr>
      <td>${doc.data().country}</td>
        <td>${doc.data().cost}</td>
        <td> <a href="${doc.data().link}"> ảnh </a></td>
        <td>${doc.data().day}</td>
        <td>${doc.data().person}</td>
        <td>${doc.data().content}</td>
        <td>${doc.id} </td>
        <td></td>
      </tr>`;
  

  bag += `
  <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div class="package-item">
      <div class="overflow-hidden">
          <img class="img-fluid" style="width: 475px ;" src="${doc.data().link}" alt="">
      </div>
      <div class="d-flex border-bottom">
          <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt text-primary me-2"></i>${doc.data().country}</small>
          <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>${doc.data().day} days</small>
          <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>${doc.data().person} Person</small>
      </div>
      <div class="text-center p-4">
          <h3 class="mb-0">${doc.data().cost}</h3>
          <div class="mb-3">
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
          </div>
          <p>${doc.data().content}</p>
          <div class="d-flex justify-content-center mb-2">
              <a href="#" class="btn btn-sm btn-primary px-3 border-end" style="border-radius: 30px 0 0 30px;">Read More</a>
              <a href="./booking.html" class="btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;">Book Now</a>
          </div>
      </div>
  </div>
</div>
  `

});

document.getElementById("render").innerHTML = table;
// pk_render.innerText = " "
pk_render.innerHTML = bag;