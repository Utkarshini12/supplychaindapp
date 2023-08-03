
function hideAllForms() {
  const forms = document.querySelectorAll(".form");
  forms.forEach((form) => (form.style.display = "none"));
}

// Function to deactivate all buttons
function deactivateAllButtons() {
  const buttons = document.querySelectorAll(".btn-selector");
  buttons.forEach((btn) => btn.classList.remove("active"));
}

document.getElementById("sign-up-btn").addEventListener("click", function () {
  console.log("i am called for farmer");
  hideAllForms();
  document.getElementById("sign-up-form").style.display = "block";
  deactivateAllButtons();
  this.classList.add("active");
});

document.getElementById("log-in-btn").addEventListener("click", function () {
  hideAllForms();
  document.getElementById("log-in-form").style.display = "block";
  deactivateAllButtons();
  this.classList.add("active");
});

document.getElementById("payments-btn").addEventListener("click", function () {
  hideAllForms();
  document.getElementById("payments-form").style.display = "block";
  deactivateAllButtons();
  this.classList.add("active");
});

document.getElementById("Approve-btn").addEventListener("click", function () {
  hideAllForms();
  document.getElementById("payments-form").style.display = "block";
  deactivateAllButtons();
  this.classList.add("active");
});





var accounts;
var account;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};


async function set() {
  

  var fid = document.getElementById("fid").value;
  var fname = document.getElementById("fname").value;
  var loc = document.getElementById("loc").value;
  var crop = document.getElementById("crop").value;
  var contact = parseInt(document.getElementById("contact").value);
  var quantity = parseInt(document.getElementById("quantity").value);
  var exprice = parseInt(document.getElementById("exprice").value);
  localStorage.setItem("farmerAadhar", fid);
  localStorage.setItem("fname", fname);
  localStorage.setItem("loc", loc);
  localStorage.setItem("crop", crop);
  localStorage.setItem("contact", contact);
  localStorage.setItem("quantity", quantity);
  localStorage.setItem("exprice", exprice);
 
  var grade = "Organic"

  var testdate = new Date();
  const apprDate = testdate.setMonth(testdate.getMonth() + 4);

  localStorage.setItem("grade", grade);
  localStorage.setItem("mrp", exprice);
  localStorage.setItem("testdate", testdate);
  localStorage.setItem("expirydate", apprDate);

  const signUpForm = document.getElementById("sign-up-form");
  const logInForm = document.getElementById("log-in-form");
  const paymentsForm = document.getElementById("payments-form");

  const signUpBtn = document.getElementById("sign-up-btn");
  const logInBtn = document.getElementById("log-in-btn");
  const paymentsBtn = document.getElementById("payments-btn");

  signUpForm.style.display = "none";
  logInForm.style.display = "block";
  paymentsForm.style.display = "none";

  signUpBtn.classList.remove("active");
  logInBtn.classList.add("active");
  paymentsBtn.classList.remove("active");


  console.log("Account Added!");
  const response = await fetch('http://localhost:7545/migrate');
  const message = await response.text();
  console.log(message);
  console.log(response);

};



function get() {

  var span_element2 = document.getElementById("getval2");
  var str = localStorage.getItem("fname");
  span_element2.innerHTML = str;

  var span_element3 = document.getElementById("getval3");
  var str = localStorage.getItem("loc")
  span_element3.innerHTML = str;

  var str = localStorage.getItem("crop")
  var span_element4 = document.getElementById("getval4");
  span_element4.innerHTML = str;

  var span_element5 = document.getElementById("getval5");
  span_element5.innerHTML = localStorage.getItem("contact")

  var span_element6 = document.getElementById("getval6");
  span_element6.innerHTML = localStorage.getItem("quantity")

  var span_element7 = document.getElementById("getval7");
  span_element7.innerHTML = localStorage.getItem("mrp");

  
};

function approveProduce() {

  console.log("Account Added!");
};

function getForCustomer() {

  var span_element1 = document.getElementById("cgetval1");
  var str = localStorage.getItem("farmerAadhar");
  span_element1.innerHTML = str;

  var span_element2 = document.getElementById("cgetval2");
  var str = localStorage.getItem("fname")
  span_element2.innerHTML = str;

  var str = localStorage.getItem("loc")
  var span_element3 = document.getElementById("cgetval3");
  span_element3.innerHTML = str;

  var span_element4 = document.getElementById("cgetval4");
  span_element4.innerHTML = localStorage.getItem("crop")

  var span_element5 = document.getElementById("cgetval5");
  span_element5.innerHTML = localStorage.getItem("contact")

  var span_element6 = document.getElementById("cgetval6");
  span_element6.innerHTML = localStorage.getItem("quantity");

  var span_element7 = document.getElementById("cgetval7");
  span_element7.innerHTML = localStorage.getItem("exprice");

  var span_element9 = document.getElementById("cgetval9");
  span_element9.innerHTML = localStorage.getItem("grade");

  var span_element10 = document.getElementById("cgetval10");
  span_element10.innerHTML = localStorage.getItem("mrp");

  var span_element11 = document.getElementById("cgetval11");
  span_element11.innerHTML = localStorage.getItem("testdate");

  var span_element11 = document.getElementById("cgetval12");
  span_element11.innerHTML = localStorage.getItem("expirydate");

};









