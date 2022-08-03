var welcome = "Welcome!";
var question = "Are you ready to take a tour?";
var option = "You can travel to Berlin";
var option2 = "You can travel to London!";
var option3 = "You can travel to New York!";
var warning = "you used other types of symbols or your amount of money is too big, please try again!";
var sorry = "You do not have enough amount of money!";


var elInner = document.querySelector(".intro__inner");
var elTitle = document.querySelector(".intro__title");
var elList = document.querySelector(".intro__list");
var elBerlin = document.querySelector(".berlin");
var elLondon = document.querySelector(".london");
var elNewYork = document.querySelector(".new-york");
var elForm = document.querySelector(".intro__form");
var elInput = document.querySelector(".intro__input");
var elSubmit = document.querySelector(".intro__submit-btn");
var elCancel = document.querySelector(".intro__cancel-btn");
var elP = document.createElement("span");


elInner.appendChild(elTitle);
elInner.appendChild(elForm);
elInner.appendChild(elList);
elList.appendChild(elBerlin);
elList.appendChild(elLondon);
elList.appendChild(elNewYork);
elForm.appendChild(elInput);
elForm.appendChild(elSubmit);
elForm.appendChild(elCancel);
elForm.appendChild(elP);


var alertWelcome = alert(welcome);
var alertQiestion = confirm(question);

console.log(elP);


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

if (elInput.value >= 500 && elInput.value <= 1000) {
  console.log(option);
  elP.textContent = option;
} 
else if (elInput.value >= 1001 && elInput.value <= 2000) {
  console.log(option2);
  elP.textContent = option2;
} 
else if (elInput.value >= 2001 && elInput.value <= 3000) {
  console.log(option3);
  elP.textContent = option3;
} 
else if(elInput < 500){
  console.log(sorry);
  elP.textContent = sorry;
}
else {
  console.log(warning);
  elP.textContent = warning;
}})
