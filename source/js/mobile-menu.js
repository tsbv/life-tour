const navMenuEl = document.querySelector('.nav__menu');
const navToggleEl = document.querySelector('.js-toggle-button');
const bodyEl = document.querySelector('body');

const toggleMobileHandler = () => {
  navToggleEl.addEventListener('click', () => {
    navMenuEl.classList.toggle('nav__menu--open');
    bodyEl.style.overflow = bodyEl.style.overflow === 'hidden' ? 'auto' : 'hidden';
  });
};

export { toggleMobileHandler };
