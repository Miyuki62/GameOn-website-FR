function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function validate ()                             
{ 
//form var
var first = document.forms["reserve"]["first"];
var last = document.forms["reserve"]["last"];              
var email = document.forms["reserve"]["email"]; 
var quantity = document.forms["reserve"]["quantity"];
var location1 = document.forms["reserve"]["location1"];
var location2 = document.forms["reserve"]["location2"];
var location3 = document.forms["reserve"]["location3"];
var location4 = document.forms["reserve"]["location4"];
var location5 = document.forms["reserve"]["location5"];
var location6 = document.forms["reserve"]["location6"];

//form verif
if (first.value == "")                                  
    { 
        alert("Mettez votre Prénom."); 
        first.focus(); 
        return false; 
    }
    if (last.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        last.focus(); 
        return false; 
    }    
    if (email.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }     
    if (quantity.value == "")                                  
    { 
        alert("Mettez un nombre valide."); 
        quantity.focus(); 
        return false; 
    }
    if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked)                                  
    { 
        alert("Veuillez choisir une ville."); 
        return false; 
    }
    return true;
}