import "./styles.css";

const getFormElements = () => {
  // Form Inputs
  const form = document.querySelector(".form");
  const email = document.querySelector(".email");
  const country = document.querySelector("#country");
  const postalCode = document.querySelector(".postal-code");
  const password = document.querySelector(".password");
  const confirmPass = document.querySelector(".confirm-password");

  // Error Messages
  const emailError = document.querySelector(".email-error");
  const countryError = document.querySelector(".country-error");
  const postalCodeError = document.querySelector(".postal-code-error");
  const passwordError = document.querySelector(".password-error");
  const confirmPassError = document.querySelector(".confirm-password-error");

  const dialog = document.querySelector(".dialog");

  return {
    form,
    email,
    emailError,
    country,
    countryError,
    postalCode,
    postalCodeError,
    password,
    passwordError,
    confirmPass,
    confirmPassError,
    dialog,
  };
};

const validateForm = () => {
  const setErrorMessage = (errorElement, errorMessage) => {
    errorElement.textContent = `${errorMessage}`;
  };

  const validateEmail = (email, emailError) => {
    if (email.validity.valueMissing) {
      setErrorMessage(emailError, "Please enter an email.");
      emailError.classList.add("active");
      return false;
    } else if (email.validity.typeMismatch) {
      emailError.classList.add("active");
      setErrorMessage(emailError, `Please enter a valid email address.`);
      return false;
    } else {
      emailError.classList.remove("active");
      return true;
    }
  };

  const validateCountry = (country, countryError) => {
    if (country.validity.valueMissing) {
      setErrorMessage(countryError, "Please select a country.");
      countryError.classList.add("active");
      return false;
    } else {
      countryError.classList.remove("active");
      return true;
    }
  };

  const validatePostalCode = (postalCode, postalCodeError) => {
    console.log(postalCode, postalCodeError);
    if (postalCode.validity.valueMissing) {
      setErrorMessage(postalCodeError, "Please enter a postal code.");
      postalCodeError.classList.add("active");
      return false;
    } else if (postalCode.validity.tooShort) {
      setErrorMessage(
        postalCodeError,
        `Please enter a postal code that is atleast ${postalCode.minLength} digits e.g 1111.`
      );
      postalCodeError.classList.add("active");
      return false;
    } else {
      postalCodeError.classList.remove("active");
      return true;
    }
  };

  const validatePassword = (password, passwordError) => {
    if (password.validity.valueMissing) {
      setErrorMessage(passwordError, "Please enter a password.");
      passwordError.classList.add("active");
      return false;
    } else if (password.validity.tooShort) {
      setErrorMessage(
        passwordError,
        `Please enter a password that is atleast ${password.minLength} characters long.`
      );
      passwordError.classList.add("active");
      return false;
    } else {
      passwordError.classList.remove("active");
      return true;
    }
  };

  const validateConfirmPass = (password, confirmPass, confirmPassError) => {
    if (confirmPass.validity.valueMissing) {
      setErrorMessage(confirmPassError, "Please confirm your password.");
      confirmPassError.classList.add("active");
      return false;
    } else if (password.value !== confirmPass.value) {
      setErrorMessage(confirmPassError, "Please enter the same password.");
      confirmPassError.classList.add("active");
      return false;
    } else {
      confirmPassError.classList.remove("active");
      return true;
    }
  };

  return {
    validateEmail,
    validateCountry,
    validatePostalCode,
    validatePassword,
    validateConfirmPass,
  };
};

const setupForm = () => {
  const {
    form,
    email,
    emailError,
    country,
    countryError,
    postalCode,
    postalCodeError,
    password,
    passwordError,
    confirmPass,
    confirmPassError,
    dialog,
  } = getFormElements();
  const validate = validateForm();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isEmailValid = validate.validateEmail(email, emailError);
    const isCountryValid = validate.validateCountry(country, countryError);
    const isPostalValid = validate.validatePostalCode(
      postalCode,
      postalCodeError
    );
    const isPasswordValid = validate.validatePassword(password, passwordError);
    const isConfirmPassValid = validate.validateConfirmPass(
      password,
      confirmPass,
      confirmPassError
    );

    if (
      isEmailValid &&
      isCountryValid &&
      isPostalValid &&
      isPasswordValid &&
      isConfirmPassValid
    ) {
      form.style.display = "none";
      dialog.show();
    } else {
      return;
    }
  });

  email.addEventListener("input", () => {
    console.log(email.value);
    validate.validateEmail(email, emailError);
  });

  country.addEventListener("input", () => {
    console.log(country.value);
    validate.validateCountry(country, countryError);
  });

  postalCode.addEventListener("input", () => {
    console.log(postalCode.value);
    validate.validatePostalCode(postalCode, postalCodeError);
  });

  password.addEventListener("input", () => {
    console.log(password.value);
    validate.validatePassword(password, passwordError);
    validate.validateConfirmPass(password, confirmPass, confirmPassError);
  });

  confirmPass.addEventListener("input", () => {
    console.log(confirmPass.value);
    validate.validateConfirmPass(password, confirmPass, confirmPassError);
  });
};

setupForm();
