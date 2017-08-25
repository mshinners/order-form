'use strict';

if (localStorage.getItem('submittedOrders')) {
  var savedOrders = JSON.parse(localStorage.getItem('submittedOrders'));
} else {
  var savedOrders = [];
}

var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass'];

var paths = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dogduck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/petsweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/watercan.jpg', 'img/wineglass.jpg'];

function Product(name, paths) {
  this.name = name;
  this.paths = paths;
}

function createDropDownMenu() {
  var table = document.getElementById('productInformation');
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td = document.createElement('td');
  td.setAttribute('id', 'whichProduct');
  tr.appendChild(td);
  td = document.createElement('td');
  td.setAttribute('id', 'counter');
  tr.appendChild(td);
  td = document.getElementById('whichProduct');
  var select = document.createElement('select');
  select.setAttribute('id', 'product');
  td.appendChild(select);
  for (var i = 0; i < names.length; i++) {
    var option = document.createElement('option');
    option.innerText = names[i];
    select.appendChild(option);
  }
  td = document.createElement('td');
  tr.appendChild(td);
  var input = document.createElement('input');
  input.setAttribute('id', 'quantity');
  input.setAttribute('type', 'number');
  input.setAttribute('placeholder', 'Quantity');
  input.setAttribute('value', '1');
  td.appendChild(input);
}

var submit = document.getElementById('form');
submit.addEventListener('submit', handleSubmit);

function Order(custName, custPhone, custAddress, custCity, custState, custZip, custProduct, custQuantity, custCredit, custExp, custCsv) {
  this.custName = custName;
  this.custPhone = custPhone;
  this.custAddress = custAddress;
  this.custCity = custCity;
  this.custState = custState;
  this.custZip = custZip;
  this.custProduct = custProduct;
  this.custQuantity = custQuantity;
  this.custCredit = custCredit;
  this.custExp = custExp;
  this.custCsv = custCsv;
}

function handleSubmit(event) {
  event.preventDefault();
  var newOrder = new Order(event.target.name.value, event.target.phone.value, event.target.address.value, event.target.city.value, event.target.state.value, event.target.zip.value, event.target.product.value, event.target.quantity.value, event.target.ccNum.value, event.target.expDate.value, event.target.csv.value);
  savedOrders.push(newOrder);
  var dataToSave = JSON.stringify(savedOrders);
  localStorage.setItem('submittedOrders', dataToSave);
  var form = document.getElementById('form');
  form.reset();
}

createDropDownMenu();
