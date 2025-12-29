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

  const validateCountry = (country, countryError) => {
    if (country.validity.valueMissing) {
      setErrorMessage(countryError, "Please select a country.");
      countryError.classList.add("active");
    } else {
      countryError.classList.remove("active");
    }
  };

  const validatePostalCode = (postalCode, postalCodeError) => {
    console.log(postalCode, postalCodeError);
    if (postalCode.validity.valueMissing) {
      setErrorMessage(postalCodeError, "Please enter a postal code.");
      postalCodeError.classList.add("active");
    } else if (postalCode.validity.tooShort) {
      setErrorMessage(
        postalCodeError,
        `Please enter a postal code that is atleast ${postalCode.minLength} digits e.g 1111.`
      );
      postalCodeError.classList.add("active");
    } else {
      postalCodeError.classList.remove("active");
    }
  };

  return { validateEmail, validateCountry, validatePostalCode };
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

    if (!country.validity.valid) {
      validate.validateCountry(country, countryError);
    }

    if (!postalCode.validity.valid) {
      validate.validatePostalCode(postalCode, postalCodeError);
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
  });

  confirmPass.addEventListener("input", () => {
    console.log(confirmPass.value);
  });
};

setupForm();
