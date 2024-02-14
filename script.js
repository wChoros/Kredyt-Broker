hamburger = document.querySelector('.hamburger');
line = document.querySelector('.line');
line3 = document.querySelector('.line3');
menu = document.querySelector('.small-menu');
menuItem = document.querySelectorAll('.small-menu-item');
header = document.querySelector('header');
loaded = true;
hidden = true;
hamburger.addEventListener('click', () => {
  line.classList.toggle('line-show');
  hamburger.classList.toggle('opened');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('opened'));
  line3.classList.toggle('line-show');
  menu.classList.toggle('menu-show');

  if (loaded) {
    loaded = false;
  }
  else {
    menu.classList.toggle('menu-hide-animate');
    header.classList.toggle('header-menu-hide');
  }
  if(hidden){
    hidden = false;
    menu.classList.toggle('menu-hide');
  }
  else{
    setTimeout(() => {
      menu.classList.toggle('menu-hide');
    }, 999);
    hidden = true;
  }
  menuItem.forEach((item) => {
    item.classList.toggle('small-menu-item-hide');
  });

  header.classList.toggle('header-menu-show');


});