// display error messege when leaving the input / blur

let email = document.getElementById("email");
let validator = document.querySelector(".email");

email.addEventListener("blur", () => {
  if (email.validity.valid) {
    validator.innerHTML = "YEY! &#129304;";
  } else {
    validator.innerHTML = "please provide a valid email account";
  }
});

let password = document.querySelector("#password");
let firstPasswordValidator = document.querySelector(".password1");
const passwordValidator = RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");

password.addEventListener("blur", () => {
  if (password.validity.valid && passwordValidator.test(password.value)) {
    firstPasswordValidator.innerHTML = "u got this! &#128077";
  } else {
    firstPasswordValidator.innerHTML =
      "Minimum eight characters, at least one Upper case letter and one number:";
  }
});

let password2 = document.querySelector("#confirmation");
let secondPasswordValidator = document.querySelector(".password2");

password2.addEventListener("input", () => {
  if (password2.value === password.value) {
    secondPasswordValidator.innerHTML = "A perfect match &#128143;";
  } else {
    secondPasswordValidator.innerHTML = "Does not match..";
  }
});

let country = document.querySelector("#country");
let countryValidator = document.querySelector(".country");
const validatorCT = RegExp("^[a-zA-Z]+$");

country.addEventListener("blur", () => {
  if (validatorCT.test(country.value)) {
    countryValidator.innerHTML = "Cool! 🏠";
  } else {
    countryValidator.innerHTML = "Do you really live there?";
  }
});

let zipcode = document.querySelector("#zipcode");
let zipcodeValidator = document.querySelector(".zipcode");
const zipcodeVal = RegExp("^[0-9]+$");

zipcode.addEventListener("blur", () => {
  if (zipcodeVal.test(zipcode.value)) {
    zipcodeValidator.innerHTML = "yeah";
  } else {
    zipcodeValidator.innerHTML = "I dont think so";
  }
});
