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
  };
};

const setupForm = () => {
  const { form, email, country, postalCode, password, confirmPass } =
    getFormElements();

  email.addEventListener("input", () => {
    console.log(email.value);
  });

  country.addEventListener("input", () => {
    console.log(country.value);
  });

  postalCode.addEventListener("input", () => {
    console.log(postalCode.value);
  });

  password.addEventListener("input", () => {
    console.log(password.value);
  });

  confirmPass.addEventListener("input", () => {
    console.log(confirmPass.value);
  });
};

setupForm();
