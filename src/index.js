import "./styles.css";

const getFormElements = () => {
  // Form Inputs
  const form = document.querySelector(".form");
  const email = document.querySelector(".email");
  const country = document.querySelector("#country");
  const postalCode = document.querySelector(".postal-code");
  const password = document.querySelector(".password");
  const confirmPassword = document.querySelector(".confirm-password");

  // Error Messages
  const emailError = document.querySelector(".email-error");
  const countryError = document.querySelector(".country-error");
  const postalCodeError = document.querySelector(".postal-code-error");
  const passwordError = document.querySelector(".password-error");
  const confirmPasswordError = document.querySelector(
    ".confirm-password-error"
  );

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
    confirmPassword,
    confirmPasswordError,
  };
};
