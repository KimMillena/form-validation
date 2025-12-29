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

const validateForm = () => {
  const setErrorMessage = (errorElement, errorMessage) => {
    errorElement.textContent = `${errorMessage}`;
  };

  const validateEmail = (email, emailError) => {
    if (email.validity.valueMissing) {
      setErrorMessage(emailError, "Please enter an email.");
      emailError.classList.add("active");
    } else if (email.validity.typeMismatch) {
      emailError.classList.add("active");
      setErrorMessage(emailError, `Please enter a valid email address.`);
    } else {
      emailError.classList.remove("active");
    }
  };

  return { validateEmail };
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
  } = getFormElements();
  const validate = validateForm();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!email.validity.valid) {
      validate.validateEmail(email, emailError);
    }
  });

  email.addEventListener("input", () => {
    console.log(email.value);
    validate.validateEmail(email, emailError);
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
