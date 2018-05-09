document.addEventListener("DOMContentLoaded", function(event) {
  let hamburgerToggle = document.querySelector('.js-nav-toggle');
  let navMenu = document.querySelector('.header__navigation');
  let content = document.querySelector('.content');

  hamburgerToggle.addEventListener('click', () => {
    hamburgerToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
    content.classList.toggle('open');
  });
});
