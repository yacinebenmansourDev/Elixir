const navBtn = document.querySelector('.btn-nav-bar');
const navIcon = document.querySelector('.nav-bar-icon');
const nav = document.querySelector('.mobile-nav');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  navIcon.getAttribute('name') === 'menu'
    ? navIcon.setAttribute('name', 'close')
    : navIcon.setAttribute('name', 'menu');
});
