const navMenuEl = document.querySelector('.nav__menu');
const navToggleEl = document.querySelector('.js-toggle-button');
const toggleMobileHandler = () => {
  navToggleEl.addEventListener('click', () => {
    navMenuEl.classList.toggle('nav__menu--open');
  });
};

export { toggleMobileHandler };
