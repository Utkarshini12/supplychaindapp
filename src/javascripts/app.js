console.log("hello");

  function hideAllForms() {
    document.getElementById("sign-up-form").style.display = "none";
    document.getElementById("log-in-form").style.display = "none";
    document.getElementById("payments-form").style.display = "none";
    document.getElementById("approve-form").style.display = "none";
    document.getElementById("finance-form").style.display = "none";
  }

  function deactivateAllButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("active"));
  }

  document.getElementById("sign-up-btn").addEventListener("click", function () {
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
    document.getElementById("approve-form").style.display = "block";
    deactivateAllButtons();
    this.classList.add("active");
  });

  document.getElementById("finance-btn").addEventListener("click", function () {
    hideAllForms();
    document.getElementById("finance-form").style.display = "block";
    deactivateAllButtons();
    this.classList.add("active");
  });

var accounts;
var account;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};



function set(){

// var metaset = StructStorage.deployed();

var fid = document.getElementById("fid").value;
var fname = document.getElementById("fname").value;
var loc = document.getElementById("loc").value;
var crop = document.getElementById("crop").value;
var contact = parseInt(document.getElementById("contact").value);
var quantity = parseInt(document.getElementById("quantity").value);
var exprice = parseInt(document.getElementById("exprice").value);

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

    
  console.log("Account Funded!");
 
    
 
  
  
};



function get(){

var metaget = StructStorage.deployed();

var fid = document.getElementById("fid1").value;

setStatus("Initiating transaction... (please wait)");

metaget.getproduce.call( fid, {from: account}).then(function(value) {
  	
    
    var span_element2 = document.getElementById("getval2");
	var str = web3.toAscii(value[1]);
    span_element2.innerHTML = str;

	var span_element3 = document.getElementById("getval3");
	var str = web3.toAscii(value[2]);
    span_element3.innerHTML = str;	
 
	var str = web3.toAscii(value[3]);
	var span_element4 = document.getElementById("getval4");
	span_element4.innerHTML = str;

	var span_element5 = document.getElementById("getval5");
	span_element5.innerHTML = value[4].valueOf();

	var span_element6 = document.getElementById("getval6");
	span_element6.innerHTML = value[5].valueOf();
	
	var span_element7 = document.getElementById("getval7");
    span_element7.innerHTML = value[6].valueOf();
 
 setStatus("Transaction complete!");
    
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting value; see log.");
  });

  
};

function setQ(){

var metaset = StructStorage.deployed();

var lotno = document.getElementById("lotno").value;
var grade = document.getElementById("grade").value;
var mrp = document.getElementById("mrp").value;
var testdate = document.getElementById("testdate").value;
var expdate = document.getElementById("expdate").value;


setStatus("Initiating transaction... (please wait)");

metaset.quality( lotno,grade,mrp,testdate,expdate, {from: account,gas:400000}).then(function() {
  setStatus("Transaction complete!");
	
  $("#sign-up-form").hide();
  $("#log-in-form").hide();
  $("#payments-form").show();
  $("#approve-form").hide();
  
  $("#sign-up-btn").removeClass("active");
  $("#log-in-btn").removeClass("active");
  $("#payments-btn").addClass("active");
  $("#Approve-btn").removeClass("active");
	
    
  }).catch(function(e) {
    console.log(e);
    setStatus("Error setting value; see log.");
  });

 
  
};

function cgetQ(){

var metaget = StructStorage.deployed();
var lid = document.getElementById("lotnum").value;

setStatus("Initiating transaction... (please wait)");

metaget.getquality.call( lid,{from: account}).then(function(value) {
    
	var str = web3.toAscii(value[0]);
	var cspan_element1 = document.getElementById("cgetval8");
    cspan_element1.innerHTML = str;
 
	var str = web3.toAscii(value[1]);
	var cspan_element1 = document.getElementById("cgetval9");
    cspan_element1.innerHTML = str;


  var str = web3.toAscii(value[2]);
	var cspan_element1 = document.getElementById("cgetval10");
    cspan_element1.innerHTML = value[2].valueOf();

	var str = web3.toAscii(value[3]);
	var cspan_element1 = document.getElementById("cgetval11");
    cspan_element1.innerHTML = str;
	
	var str = web3.toAscii(value[4]);
	var cspan_element1 = document.getElementById("cgetval12");
    cspan_element1.innerHTML = str;

   setStatus("Transaction complete!");
    
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting value; see log.");
  });

  
};


function getQ(){

var metaget = StructStorage.deployed();
var fid = document.getElementById("getfid").value;

setStatus("Initiating transaction... (please wait)");


metaget.getproduce.call( fid,{from: account}).then(function(value) {
    	
	var cspan_element1 = document.getElementById("cgetval1");
    var cstr = web3.toAscii(value[0]);  
    cspan_element1.innerHTML = cstr;
 	
    var cspan_element2 = document.getElementById("cgetval2");
	var cstr = web3.toAscii(value[1]);
    cspan_element2.innerHTML = cstr;

	var cspan_element3 = document.getElementById("cgetval3");
	var cstr = web3.toAscii(value[2]);
	cspan_element3.innerHTML = cstr;
    
	var cstr = web3.toAscii(value[3]);
	var cspan_element4 = document.getElementById("cgetval4");
	cspan_element4.innerHTML = cstr;   
	
	var cspan_element5 = document.getElementById("cgetval5");
	cspan_element5.innerHTML = value[4].valueOf();

	var cspan_element6 = document.getElementById("cgetval6");
	cspan_element6.innerHTML = value[5].valueOf();	
   
	var cspan_element7 = document.getElementById("cgetval7");
	cspan_element7.innerHTML = value[6].valueOf();
   
   setStatus("Transaction complete!");
    
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting value; see log.");
  });

  
};

function printTransaction(txHash) {
	
  var txHash = web3.eth.getBlock("latest").transactions[0];
  var tx = web3.eth.getTransaction(txHash);
  
  if (tx != null) {
    console.log("  tx hash          : " + tx.hash + "\n"
      + "   nonce           : " + tx.nonce + "\n"
      + "   blockHash       : " + tx.blockHash + "\n"
      + "   blockNumber     : " + tx.blockNumber + "\n"
      + "   transactionIndex: " + tx.transactionIndex + "\n"
      + "   from            : " + tx.from + "\n" 
      + "   to              : " + tx.to + "\n"
      + "   value           : " + tx.value + "\n"
      + "   gasPrice        : " + tx.gasPrice + "\n"
      + "   gas             : " + tx.gas + "\n"
      + "   input           : " + tx.input);
  
  
  
  }
}

function printBlock() {
	
  var block = web3.eth.blockNumber;
  console.log("Block number     : " + web3.eth.blockNumber + "\n"
    + " hash            : " + web3.eth.getBlock(block).hash + "\n"
    + " parentHash      : " + web3.eth.getBlock(block).parentHash + "\n"
    + " nonce           : " + web3.eth.getBlock(block).nonce + "\n"
    + " sha3Uncles      : " + web3.eth.getBlock(block).sha3Uncles + "\n"
    + " logsBloom       : " + web3.eth.getBlock(block).logsBloom + "\n"
    + " transactionsRoot: " + web3.eth.getBlock(block).transactionsRoot + "\n"
    + " stateRoot       : " + web3.eth.getBlock(block).stateRoot + "\n"
    + " miner           : " + web3.eth.getBlock(block).miner + "\n"
    + " difficulty      : " + web3.eth.getBlock(block).difficulty + "\n"
    + " totalDifficulty : " + web3.eth.getBlock(block).totalDifficulty + "\n"
    + " extraData       : " + web3.eth.getBlock(block).extraData + "\n"
    + " size            : " + web3.eth.getBlock(block).size + "\n"
    + " gasLimit        : " + web3.eth.getBlock(block).gasLimit + "\n"
    + " gasUsed         : " + web3.eth.getBlock(block).gasUsed + "\n"
    + " timestamp       : " + web3.eth.getBlock(block).timestamp + "\n"
    + " transactions    : " + web3.eth.getBlock(block).transactions + "\n"
    + " uncles          : " + web3.eth.getBlock(block).uncles);
    if (web3.eth.getBlock(block).transactions != null) {
      console.log("--- transactions ---");
      web3.eth.getBlock(block).transactions.forEach( function(e) {
        printTransaction(e);
      })
    }
	
	var blocknum = document.getElementById("blocknum");
  blocknum.innerHTML = block.valueOf();
};



