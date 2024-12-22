// START Login Page
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  x.style.opacity = 1;
  y.style.opacity = 0;
}

function register() {
  x.style.left = "-510px";
  y.style.right = "5px";
  x.style.opacity = 0;
  y.style.opacity = 1;
}
// END Login Page

// START Trips Page

const TripsData = [
  {
    name: "3en shams",
    imageUrl: "../images/3enshams.png",
    timeFCTU1: ["7:30 AM", "9:00AM", "1.5"],
    timeFCTU2: ["9:30 AM", "11:00AM", "1.5"],
    timeFUTC1: ["3:00 PM", "4:30 PM", "1.5"],
    timeFUTC2: ["5:00 PM", "6:30 PM", "1.5"],
    payment: "45",
  },
  {
    name: "6 October",
    imageUrl: "../images/6october.jpeg",
    timeFCTU1: ["7:00 AM", "9:00AM", "2"],
    timeFCTU2: ["9:00 AM", "11:00AM", "2"],
    timeFUTC1: ["3:00 PM", "5:00 PM", "2"],
    timeFUTC2: ["5:00 PM", "7:00 PM", "2"],
    payment: "75",
  },
  {
    name: "Al Azhar",
    imageUrl: "../images/al-azhar.jpeg",
    timeFCTU1: ["7:15 AM", "9:00AM", "1.75"],
    timeFCTU2: ["9:15 AM", "11:00AM", "1.75"],
    timeFUTC1: ["3:00 PM", "4:45 PM", "1.75"],
    timeFUTC2: ["5:00 PM", "6:45 PM", "1.75"],
    payment: "50",
  },
  {
    name: "Alex",
    imageUrl: "../images/alex.jpg",
    timeFCTU1: ["4:00 AM", "9:00AM", "5"],
    timeFCTU2: ["6:00 AM", "11:00AM", "5"],
    timeFUTC1: ["3:00 PM", "8:00 PM", "5"],
    timeFUTC2: ["5:00 PM", "10:00 PM", "5"],
    payment: "120",
  },
  {
    name: "Borsaid",
    imageUrl: "../images/borsaid.jpg",
    timeFCTU1: ["7:45 AM", "9:00AM", "1.25"],
    timeFCTU2: ["9:45 AM", "11:00AM", "1.25"],
    timeFUTC1: ["3:00 PM", "4:15 PM", "1.25"],
    timeFUTC2: ["5:00 PM", "6:15 PM", "1.25"],
    payment: "35",
  },
  {
    name: "Domuat",
    imageUrl: "../images/domuat.jpeg",
    timeFCTU1: ["7:15 AM", "9:00AM", "1.75"],
    timeFCTU2: ["9:15 AM", "11:00AM", "1.75"],
    timeFUTC1: ["3:00 PM", "4:45 PM", "1.75"],
    timeFUTC2: ["5:00 PM", "6:45 PM", "1.75"],
    payment: "55",
  },
  {
    name: "Egypt",
    imageUrl: "../images/egypt.jpg",
    timeFCTU1: ["7:15 AM", "9:00AM", "1.75"],
    timeFCTU2: ["9:15 AM", "11:00AM", "1.75"],
    timeFUTC1: ["3:00 PM", "4:45 PM", "1.75"],
    timeFUTC2: ["5:00 PM", "6:45 PM", "1.75"],
    payment: "55",
  },
  {
    name: "Hlwan",
    imageUrl: "../images/hlwan.jpeg",
    timeFCTU1: ["7:00 AM", "9:00AM", "2"],
    timeFCTU2: ["9:00 AM", "11:00AM", "2"],
    timeFUTC1: ["3:00 PM", "5:00 PM", "2"],
    timeFUTC2: ["5:00 PM", "7:00 PM", "2"],
    payment: "65",
  },
  {
    name: "Mansora",
    imageUrl: "../images/mansora.jpeg",
    timeFCTU1: ["7:00 AM", "9:00AM", "2"],
    timeFCTU2: ["9:00 AM", "11:00AM", "2"],
    timeFUTC1: ["3:00 PM", "5:00 PM", "2"],
    timeFUTC2: ["5:00 PM", "7:00 PM", "2"],
    payment: "75",
  },
  {
    name: "Monofia",
    imageUrl: "../images/monofia.jpeg",
    timeFCTU1: ["6:45 AM", "9:00AM", "2.25"],
    timeFCTU2: ["8:45 AM", "11:00AM", "2.25"],
    timeFUTC1: ["3:00 PM", "5:15 PM", "2.25"],
    timeFUTC2: ["5:00 PM", "7:15 PM", "2.25"],
    payment: "85",
  },
  {
    name: "MUST",
    imageUrl: "../images/must.jpeg",
    timeFCTU1: ["7:45 AM", "9:00AM", "1.25"],
    timeFCTU2: ["9:45 AM", "11:00AM", "1.25"],
    timeFUTC1: ["3:00 PM", "4:15 PM", "1.25"],
    timeFUTC2: ["5:00 PM", "6:15 PM", "1.25"],
    payment: "35",
  },
  {
    name: "Suze",
    imageUrl: "../images/suze.jpg",
    timeFCTU1: ["7:45 AM", "9:00AM", "1.25"],
    timeFCTU2: ["9:45 AM", "11:00AM", "1.25"],
    timeFUTC1: ["3:00 PM", "4:15 PM", "1.25"],
    timeFUTC2: ["5:00 PM", "6:15 PM", "1.25"],
    payment: "35",
  },
  {
    name: "Zgazeg",
    imageUrl: "../images/zgazeg.jpg",
    timeFCTU1: ["7:30 AM", "9:00AM", "1.5"],
    timeFCTU2: ["9:30 AM", "11:00AM", "1.5"],
    timeFUTC1: ["3:00 PM", "4:30 PM", "1.5"],
    timeFUTC2: ["5:00 PM", "6:30 PM", "1.5"],
    payment: "40",
  },
];

const section = document.getElementById("sec");

for (let i = 0; i < TripsData.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card", "m-lg-5");
  card.style.width = "18rem";

  card.innerHTML = `
        <img src="${TripsData[i].imageUrl}" class="card-img-top" alt="${TripsData[i].name}" />
        <div class="card-body">
          <h5 class="card-title">${TripsData[i].name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" class="btn-information" data-bs-toggle="modal" data-bs-target="#info${[i]}" data-bs-whatever="@Tofa7a">
            More Detalis
          </button>
          <div
            class="modal fade"
            id="info${[i]}"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="infoLabel${[i]}"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="infoLabel1">${TripsData[i].name} University</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src="${TripsData[i].imageUrl}" class="card-img-top" alt="${TripsData[i].name}" />
                  <table class="table">
                    <thead class="table-primary">
                      <td colspan="4" class="text-center bg-secondary">From Your city To ${TripsData[i].name} Univeristy</td>
                      <tr>
                        <th>Time to Leave</th>
                        <th>Time to Reach</th>
                        <th>Duration</th>
                        <th>Statue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>${TripsData[i].timeFCTU1[0]}</td>
                        <td>${TripsData[i].timeFCTU1[1]}</td>
                        <td>${TripsData[i].timeFCTU1[2]} Hourse</td>
                        <td>
                          <input type="radio" id="firstF" name="tripTimeF" value="firstF" />
                          <label for="firstF">OK</label>
                        </td>
                      </tr>
                      <tr>
                        <td>${TripsData[i].timeFCTU2[0]}</td>
                        <td>${TripsData[i].timeFCTU2[1]}</td>
                        <td>${TripsData[i].timeFCTU2[2]} Hourse</td>
                        <td>
                          <input type="radio" id="secondF" name="tripTimeF" value="secondF" />
                          <label for="secondF">OK</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="table">
                    <thead class="table-info">
                      <td colspan="4" class="text-center bg-secondary">From ${TripsData[i].name} Univeristy To Your City</td>
                      <tr>
                        <th>Time to Leave</th>
                        <th>Time to Reach</th>
                        <th>Duration</th>
                        <th>Statue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>${TripsData[i].timeFUTC1[0]}</td>
                        <td>${TripsData[i].timeFUTC1[1]}</td>
                        <td>${TripsData[i].timeFUTC1[2]} Hourse</td>
                        <td>
                          <input type="radio" id="firstT" name="tripTimeT" value="firstT" />
                          <label for="firstT">OK</label>
                        </td>
                      </tr>
                      <tr>
                        <td>${TripsData[i].timeFUTC2[0]}</td>
                        <td>${TripsData[i].timeFUTC2[1]} PM</td>
                        <td>${TripsData[i].timeFUTC2[2]} Hourse</td>
                        <td>
                          <input type="radio" id="secondT" name="tripTimeT" value="secondT" />
                          <label for="secondT">OK</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Recipient:</label>
                      <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Message:</label>
                      <textarea class="form-control" id="message-text"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button class="btn-information" data-bs-target="#payment${[i]}" data-bs-toggle="modal">Open Payment</button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="payment${[i]}" aria-hidden="true" aria-labelledby="paymentLabel${[i]}" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="paymentLabel${[i]}">Modal 2</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h4 class="mb-3">Payment ${TripsData[i].payment}$</h4>

                  <div class="my-3">
                    <div class="form-check">
                      <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                      <label class="form-check-label" for="credit">Credit card</label>
                    </div>
                    <div class="form-check">
                      <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                      <label class="form-check-label" for="debit">Debit card</label>
                    </div>
                    <div class="form-check">
                      <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                      <label class="form-check-label" for="paypal">PayPal</label>
                    </div>
                  </div>

                  <div class="row gy-3">
                    <div class="col-md-6">
                      <label for="cc-name" class="form-label">Name on card</label>
                      <input type="text" class="form-control" id="cc-name" placeholder="" required />
                      <small class="text-body-secondary">Full name as displayed on card</small>
                      <div class="invalid-feedback">Name on card is required</div>
                    </div>

                    <div class="col-md-6">
                      <label for="cc-number" class="form-label">Credit card number</label>
                      <input type="text" class="form-control" id="cc-number" placeholder="" required />
                      <div class="invalid-feedback">Credit card number is required</div>
                    </div>

                    <div class="col-md-3">
                      <label for="cc-expiration" class="form-label">Expiration</label>
                      <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                      <div class="invalid-feedback">Expiration date required</div>
                    </div>

                    <div class="col-md-3">
                      <label for="cc-cvv" class="form-label">CVV</label>
                      <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                      <div class="invalid-feedback">Security code required</div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button class="btn btn-secondary" data-bs-target="#info${[i]}" data-bs-whatever="@Tofa7a" data-bs-toggle="modal">
                    Back to Informations
                  </button>
                  <button
                    class="btn-information"
                    data-bs-target="#submit${[i]}"
                    data-bs-whatever="@Tofa7a"
                    data-bs-nameUni="${TripsData[i].name} University"
                    data-bs-toggle="modal"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="submit${[i]}" aria-hidden="true" aria-labelledby="submitLabel${[i]}" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="submitLabel${[i]}">Modal ${[i]}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h3></h3>
                </div>
              </div>
              <div class="modal-footer">
                <!-- <button class="btn btn-secondary" data-bs-target="#info${[i]}" data-bs-whatever="@Tofa7a" data-bs-toggle="modal">
                    Back to first
                  </button>
                  <button class="btn-information" data-bs-target="#info" data-bs-whatever="@Tofa7a" data-bs-nameUni="${
                    TripsData[i].name
                  } University" data-bs-toggle="modal">
                    Submit
                  </button> -->
              </div>
            </div>
          </div>
        </div>
  `;
  section.appendChild(card);
  // section.innerHTML += card;
}
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");
const info5 = document.getElementById("info5");
const info6 = document.getElementById("info6");
const info7 = document.getElementById("info7");
const info8 = document.getElementById("info8");
const info9 = document.getElementById("info9");
const info10 = document.getElementById("info10");
const info11 = document.getElementById("info11");
const info12 = document.getElementById("info12");
const info13 = document.getElementById("info13");

function modelInfo(parmes, infoNum) {
  const button = parmes.relatedTarget;
  const recipient = button.getAttribute("data-bs-whatever");
  const modalTitle = infoNum.querySelector(".modal-title");
  const modalBodyInput = infoNum.querySelector('.modal-body input[type="text"]');

  modalTitle.textContent = `New message to ${recipient}`;
  modalBodyInput.value = recipient;
}
if (info1) info1.addEventListener("show.bs.modal", (event) => modelInfo(event, info1));
if (info2) info2.addEventListener("show.bs.modal", (event) => modelInfo(event, info2));
if (info3) info3.addEventListener("show.bs.modal", (event) => modelInfo(event, info3));
if (info4) info4.addEventListener("show.bs.modal", (event) => modelInfo(event, info4));
if (info5) info5.addEventListener("show.bs.modal", (event) => modelInfo(event, info5));
if (info6) info6.addEventListener("show.bs.modal", (event) => modelInfo(event, info6));
if (info7) info7.addEventListener("show.bs.modal", (event) => modelInfo(event, info7));
if (info8) info8.addEventListener("show.bs.modal", (event) => modelInfo(event, info8));
if (info9) info9.addEventListener("show.bs.modal", (event) => modelInfo(event, info9));
if (info10) info10.addEventListener("show.bs.modal", (event) => modelInfo(event, info10));
if (info11) info11.addEventListener("show.bs.modal", (event) => modelInfo(event, info11));
if (info12) info12.addEventListener("show.bs.modal", (event) => modelInfo(event, info12));
if (info13) info13.addEventListener("show.bs.modal", (event) => modelInfo(event, info13));
// const payment = document.getElementById('payment')
// if (info) {
//   info.addEventListener('show.bs.modal', event => {
//     // Button that triggered the modal
//     const button = event.relatedTarget;
//     // Extract info from data-bs-* attributes
//     const recipient = button.getAttribute('data-bs-whatever');
//     // If necessary, you could initiate an Ajax request here
//     // and then do the updating in a callback.

//     // Update the modal's content.
//     const modalTitle = info.querySelector('.modal-title');
//     const modalBodyInput = info.querySelector('.modal-body input[type="text"]');

//     modalTitle.textContent = `New message to ${recipient}`;
//     modalBodyInput.value = recipient;
//   })
// }
const submit1 = document.getElementById("submit1");
const submit2 = document.getElementById("submit2");
const submit3 = document.getElementById("submit3");
const submit4 = document.getElementById("submit4");
const submit5 = document.getElementById("submit5");
const submit6 = document.getElementById("submit6");
const submit7 = document.getElementById("submit7");
const submit8 = document.getElementById("submit8");
const submit9 = document.getElementById("submit9");
const submit10 = document.getElementById("submit10");
const submit11 = document.getElementById("submit11");
const submit12 = document.getElementById("submit12");
const submit13 = document.getElementById("submit13");

function modelSubmit(parmes, submitNum) {
  const button = parmes.relatedTarget;
  const recipient = button.getAttribute("data-bs-whatever");
  const nameUniveristy = button.getAttribute("data-bs-nameUni");
  const modalTitle = submitNum.querySelector(".modal-title");
  const modalBodyInput = submitNum.querySelector(".modal-body h3");

  modalTitle.textContent = `Confirm ${recipient}`;
  modalBodyInput.innerText = nameUniveristy;
}
if (submit1) submit1.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit1));
if (submit2) submit2.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit2));
if (submit3) submit3.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit3));
if (submit4) submit4.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit4));
if (submit5) submit5.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit5));
if (submit6) submit6.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit6));
if (submit7) submit7.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit7));
if (submit8) submit8.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit8));
if (submit9) submit9.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit9));
if (submit10) submit10.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit10));
if (submit11) submit11.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit11));
if (submit12) submit12.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit12));
if (submit13) submit13.addEventListener("show.bs.modal", (event) => modelSubmit(event, submit13));
// END Trips Page


// START Admin page

// END Admin Page

