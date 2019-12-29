var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.header__menu');
var navClosed = document.querySelector('.nav__close');

navMain.classList.remove('nav__js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  }
});

navClosed.addEventListener('click', function () {
  if (navMain.classList.contains('nav--opened')) {
    navMain.classList.remove('nav--opened');
    navMain.classList.add('nav--closed');
  }
});
