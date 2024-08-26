const initFormValidation = () => {
  const EMAIL_REGEX = /^[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*$/; // Разрешает локальные домены типа .рф
  const PHONE_REGEX = /^\d+$/; // Разрешает только цифры для номера телефона
  const formEl = document.querySelector('.form');
  const emailInputEl = formEl.querySelector('input[name="email"]');
  const phoneInputEl = formEl.querySelector('input[name="phone"]');
  const validateInput = (input, regex) => {
    const isValid = regex.test(input.value);
    input.classList.toggle('form__field--error', !isValid);
    return isValid;
  };
  formEl.addEventListener('submit', (event) => {
    const isEmailValid = validateInput(emailInputEl, EMAIL_REGEX);
    const isPhoneValid = validateInput(phoneInputEl, PHONE_REGEX);
    if (!isEmailValid || !isPhoneValid) {
      event.preventDefault();
    }
  });
};

export { initFormValidation };
