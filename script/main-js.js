//-------------------------------project page----------------------------------
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
//-----------------------account page-----------------------
const getS = selector => document.querySelector(selector);
let uerInfo = [];

function showModal() {
  event.preventDefault();
  let user = {};
  user.companyName = formTwo.companyName.value;
  user.companyAddress = formTwo.companyAddress.value;
  user.country = formTwo.country.value;
  user.city = formTwo.city.value;
  user.state = formTwo.state.value;
  user.postalCode = formTwo.postalCode.value;
  uerInfo.push(user);
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