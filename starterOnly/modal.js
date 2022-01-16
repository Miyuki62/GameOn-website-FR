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

//form const verification
const form = document.getElementById ('form');
const first = document.getElementById ('first');
const last = document.getElementById ('last');
const mail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantity = document.getElementById ('quantity');
const location1 = document.getElementById ('location1');
const location2 = document.getElementById ('location2');
const location3 = document.getElementById ('location3');
const location4 = document.getElementById ('location4');
const location5 = document.getElementById ('location5');
const location6 = document.getElementById ('location6');

//const affichage erreur
const firstErrorMsg = document.getElementById ('first-error-msg');
const lastErrorMsg = document.getElementById ('last-error-msg');
const mailErrorMsg = document.getElementById ('email-error-msg');
const birthdateErrorMsg = document.getElementById ('birthdate-error-msg');
const quantityErrorMsg = document.getElementById ('quantity-error-msg');
const locationErrorMsg = document.getElementById ('location-error-msg');
const CGU = document.getElementById ('checkbox1')
const CGUErrorMsg = document.getElementById ('CGU-error-msg')

//const message de validation
const valid = document.getElementById ('valid');
const validCloseBtn = document.getElementsByClassName('btn-close');

//enpeche l'action par defaut du bouton submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
})

//form etape verification
function validate ()   
{ 
  let firstChecked;
  let lastChecked;
  let emailChecked;
  let birthdateChecked;
  let quantityChecked;
  let locationChecked;
  let CGUChecked;

  //form verifie que le prénom possède bien 2 caractères et que se soit bien des lettre
  if (!first.value.match(/(.*[a-z]){2}/i) || first.value == ' ' || first.value.length < 2) {
    //si non affiche les erreur
    firstErrorMsg.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.';
    firstErrorMsg.style.color = 'red';
    firstErrorMsg.style.fontSize = '0.8rem';
    firstErrorMsg.style.marginTop = '10px';
    first.style.border = 'solid red 2px';
    firstErrorMsg.style.display = 'block';
    firstChecked = false;
  } else {
    //si oui enlève les erreur
    firstErrorMsg.style.display = 'none';
    first.style.border = 'none';
    firstChecked = true;
  };
   //form verifie que le nom possède bien 2 caractères et que se soit bien des lettre
  if (!last.value.match(/(.*[a-z]){2}/i) || last.value == ' ' || last.value.length < 2) { 
    //si non affiche les erreur
    lastErrorMsg.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du Nom.';
    lastErrorMsg.style.color = 'red';
    lastErrorMsg.style.fontSize = '0.8rem';
    lastErrorMsg.style.marginTop = '10px';
    last.style.border = 'solid red 2px';
    lastErrorMsg.style.display = 'block';
    lastChecked = false;      
  }  else {
    //si oui enlève les erreur
    lastErrorMsg.style.display = 'none';
    last.style.border = 'none';
    lastChecked = true;
  };
//form verifie que le l'email soit bien un format email
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) { 
    //si non affiche les erreur
    mailErrorMsg.innerText = 'Veuillez entrer une email valide';
    mailErrorMsg.style.color = 'red';
    mailErrorMsg.style.fontSize = '0.8rem';
    mailErrorMsg.style.marginTop = '10px';
    mailErrorMsg.style.display = 'block';
    mail.style.border = 'solid red 2px'; 
    emailChecked = false;        
  }  else {
    //si oui enlève les erreur
    mailErrorMsg.style.display = 'none';
    mail.style.border = 'none';
    emailChecked = true;
  };
//form verifie que se soit bien une date
  if (!birthDate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) { 
    //si non affiche les erreur
    birthdateErrorMsg.innerText = 'Veuillez saisir votre date de naissance';
    birthdateErrorMsg.style.color = 'red';
    birthdateErrorMsg.style.fontSize = '0.8rem';
    birthdateErrorMsg.style.marginTop = '10px';
    birthDate.style.border = 'solid red 2px';
    birthdateErrorMsg.style.display = 'block';
    birthdateChecked = false;   
  } else {
    //si oui enlève les erreur
    birthdateErrorMsg.style.display = 'none';
    birthDate.style.border = 'none';
    birthdateChecked = true;      
  }
//form verifie que se soit bien un nombre
  if (!quantity.value.match(/^[0-9]+$/)) { 
    //si non affiche les erreur
    quantityErrorMsg.innerText = 'Vous devez indiquer un nombre';
    quantityErrorMsg.style.color = 'red';
    quantityErrorMsg.style.fontSize = '0.8rem';
    quantityErrorMsg.style.marginTop = '10px';
    quantity.style.border = 'solid red 2px';
    quantityErrorMsg.style.display = 'block';
    quantityChecked = false;   
  } else {
    //si oui enlève les erreur
    quantityErrorMsg.style.display = 'none';
    quantity.style.border = 'none';
    quantityChecked = true;
  };
//form verifie que une location est bien sélectionner 
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) { 
    //si non affiche les erreur
    locationErrorMsg.innerText = 'Vous devez choisir une ville pour participer';
    locationErrorMsg.style.color = 'red';
    locationErrorMsg.style.fontSize = '0.8rem';
    locationErrorMsg.style.marginTop = '10px';
    locationErrorMsg.style.display = 'block';
    locationChecked = false;            
  } else {
    //si oui enlève les erreur
    locationErrorMsg.style.display = 'none';
    locationChecked = true;
  };
//form verifie que les CGU sont bien cochée
  if (!CGU.checked) {
    //si non affiche les erreur
    CGUErrorMsg.innerText = 'Vous devez vérifier que vous acceptez les termes et conditions';
    CGUErrorMsg.style.color = 'red';
    CGUErrorMsg.style.fontSize = '0.8rem';
    CGUErrorMsg.style.marginTop = '10px';
    CGUErrorMsg.style.marginBottom = '20px';
    CGUErrorMsg.style.display = 'block';
    CGUChecked = false;   
  } else {
    //si oui enlève les erreur
    CGUErrorMsg.style.display = 'none';
    CGUChecked = true;
  };
  //verifie que chaque champ du formulaire est valide
  if (firstChecked == true && lastChecked == true && emailChecked == true && birthdateChecked == true && quantityChecked == true && locationChecked == true && CGUChecked == true) {
    form.style.display = "none";
    valid.style.display = "flex";
  }
}
//ecoute un click pour fermer le form
validCloseBtn[0].addEventListener("click", closeModal);