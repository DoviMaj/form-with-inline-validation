const emailEvent = () => {
  let email = document.getElementById("email");
  let validationMsg = document.querySelector(".email");
  email.addEventListener("blur", () => {
    if (emailCheck()) {
      validationMsg.innerHTML = "YEY! &#129304;";
    } else {
      validationMsg.innerHTML = "please provide a valid email account";
    }
  });
};

const emailCheck = () => {
  let email = document.getElementById("email");
  if (email.validity.valid) {
    return true;
  }
};

const passwordEvent = () => {
  let password = document.querySelector("#password");
  let firstPasswordValidatorMsg = document.querySelector(".password1");
  password.addEventListener("blur", () => {
    if (passwordCheck()) {
      firstPasswordValidatorMsg.innerHTML = "u got this! &#128077";
    } else {
      firstPasswordValidatorMsg.innerHTML =
        "Minimum eight characters, at least one Upper case letter and one number:";
    }
  });
};

const passwordCheck = () => {
  let password = document.querySelector("#password");
  const passwordValidator = RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");
  if (password.validity.valid && passwordValidator.test(password.value)) {
    return true;
  }
};

const password2Event = () => {
  let password2 = document.querySelector("#confirmation");
  password2.addEventListener("input", () => {
    let secondPasswordValidatorMsg = document.querySelector(".password2");
    if (password2Check()) {
      secondPasswordValidatorMsg.innerHTML = "A perfect match &#128143;";
    } else {
      secondPasswordValidatorMsg.innerHTML = "Does not match..";
    }
  });
};

const password2Check = () => {
  let password2 = document.querySelector("#confirmation");
  if (password2.value === password.value) {
    return true;
  }
};

const countryEvent = () => {
  let country = document.querySelector("#country");
  let countryValidatorMsg = document.querySelector(".country");
  country.addEventListener("blur", () => {
    if (countryCheck()) {
      countryValidatorMsg.innerHTML = "Cool! 🏠";
    } else {
      countryValidatorMsg.innerHTML = "Do you really live there?";
    }
  });
};

const countryCheck = () => {
  let country = document.querySelector("#country");
  const validatorCT = RegExp("^[a-zA-Z]+$");
  if (validatorCT.test(country.value)) {
    return true;
  }
};

const zipcodeEvent = () => {
  let zipcode = document.querySelector("#zipcode");
  let zipcodeValidatorMsg = document.querySelector(".zipcode");
  zipcode.addEventListener("blur", () => {
    if (zipcodeCheck()) {
      zipcodeValidatorMsg.innerHTML = "yeah";
    } else {
      zipcodeValidatorMsg.innerHTML = "I dont think so";
    }
  });
};

const zipcodeCheck = () => {
  let zipcode = document.querySelector("#zipcode");
  const zipcodeVal = RegExp("^[0-9]+$");
  if (zipcodeVal.test(zipcode.value)) {
    return true;
  }
};

const checkForm = () => {
  if (
    zipcodeCheck() &&
    countryCheck() &&
    emailCheck() &&
    passwordCheck() &&
    password2Check()
  ) {
    cleanFields();
    document.querySelector(".form").innerHTML =
      "U did it! Congrats! &#129309; &#128526;";
    return false;
  } else {
    document.querySelector(".form").innerHTML = "Almost there...";
    return false;
  }
};

const cleanFields = () => {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
  document.querySelectorAll(".validator").forEach((msg) => {
    msg.innerHTML = "";
  });
};

zipcodeEvent();
countryEvent();
emailEvent();
passwordEvent();
password2Event();
