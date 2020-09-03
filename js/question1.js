// question 1

const form = document.querySelector("#contactForm");
const firstName =  document.querySelector("#firstName");
const nameError = document.querySelector(".error");

validateForm = function(){
  event.preventDefault();
  if (firstName.value.length < 5) {
    nameError.style.display = "block";
  }
  else{
    nameError.style.display = "none";
  };
};

form.addEventListener("submit", validateForm);