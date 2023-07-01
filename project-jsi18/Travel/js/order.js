import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
const name = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");
const dateTime = document.getElementById("datetime")
const select = document.getElementById("select")

const pk_render = document.getElementById("packages_render");
{
  var country = document.getElementById("country");
  var cost = document.getElementById("cost");
  var link = document.getElementById("link");
  var table = document.getElementsByClassName("table");
  var day = document.getElementById("days")
  var person = document.getElementById("person")
  var content = document.getElementById("content")
  var bag = null;
  
}

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
      DateTime: dateTime.value,
      destination: destination,
      Message: mess.value,
  });
  console.log("Document written with ID: ", docRef.id);
  } catch (e) {
  console.error("Error adding document: ", e);
  }
  
  console.log("oke");
};


document.getElementById("add").onclick = async () => {
  console.log(country.value, cost.value, link.value);
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
var du_lieu = [];
var Id = [];
// console.log(docRef.id)

const querySnapshot = await getDocs(collection(db, "Admins"));
querySnapshot.forEach((doc) => {
  console.log(doc.id);
  du_lieu.push({ ...doc.data(), id: doc.id });
  Id.push(doc.id);
  console.log(du_lieu);
  console.log(du_lieu);
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
  for (let i = 0; i < du_lieu.length; i++) {
    table += `<tr>
      <td>${du_lieu[i].country}</td>
        <td>${du_lieu[i].cost}</td>
        <td>${du_lieu[i].link}</td>
        <td>${du_lieu[i].day}</td>
        <td>${du_lieu[i].person}</td>
        <td>${du_lieu[i].content}</td>
        <td>${du_lieu[i].id} </td>
        <td></td>
      </tr>`;
  

  bag += `
  <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div class="package-item">
      <div class="overflow-hidden">
          <img class="img-fluid" src="${du_lieu[i].link}" alt="">
      </div>
      <div class="d-flex border-bottom">
          <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt text-primary me-2"></i>${du_lieu[i].country}</small>
          <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>${du_lieu[i].day} days</small>
          <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>2 Person</small>
      </div>
      <div class="text-center p-4">
          <h3 class="mb-0">$${du_lieu[i].cost}</h3>
          <div class="mb-3">
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
              <small class="fa fa-star text-primary"></small>
          </div>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
          <div class="d-flex justify-content-center mb-2">
              <a href="#" class="btn btn-sm btn-primary px-3 border-end" style="border-radius: 30px 0 0 30px;">Read More</a>
              <a href="./booking.html" class="btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;">Book Now</a>
          </div>
      </div>
  </div>
</div>
  `
  }
});

document.getElementById("render").innerHTML = table;
pk_render.innerHTML = bag;