//-------------------------------project page----------------------------------
const getS = selector => document.querySelector(selector);
let getAll = document.querySelectorAll('.animaded-text, a, h4 ,p');
let getAllBg = document.querySelectorAll('.animation-block, .settings-wraper, body');
// drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
//change font
function changeFont() {
  for (const elem of getAll) {
    elem.style.fontFamily = event.target.value;
  }
}
//change font size
function fSize() {
  for (const elem of getAll) {
    elem.style.fontSize = event.target.value;
  }
}
//change background Image
function changeBg() {
  if (event.target.className === 'box') {
    for (const elem of getAllBg) {
      elem.style.backgroundImage = event.target.style.backgroundImage;
    }
  }
}

//-----------------------account page-----------------------
let userInfo = [];

function showModal() {
  event.preventDefault();
  let user = {};
  user.companyName = formTwo.companyName.value;
  user.companyAddress = formTwo.companyAddress.value;
  user.country = formTwo.country.value;
  user.city = formTwo.city.value;
  user.state = formTwo.state.value;
  user.postalCode = formTwo.postalCode.value;
  userInfo.push(user);
  formTwo.reset();
  getS('.modal-container').setAttribute('style', 'display:flex');
  //set data in text content and html
  getS('#title-company-name').innerHTML += user.companyName;
  getS('#companyName').textContent = user.companyName;
  //or set in values
  formModal.companyAddress.value = user.companyAddress;
  formModal.country.value = user.country;
  formModal.city.value = user.city;
  formModal.state.value = user.state;
  formModal.postalCode.value = user.postalCode;
}

function hideModal() {
  getS('.modal-container').setAttribute('style', 'display:none');
}