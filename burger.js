let burgerBtn = document.querySelector('.nav-burger');
let burgerMenu = document.querySelector('.burger-menu');
let body = document.querySelector('body');

burgerBtn.addEventListener('click', function (evt) {
   evt.stopPropagation();
   if (burgerMenu.classList.contains('no-active')) {
      burgerMenu.classList.add('active-menu');
      burgerMenu.classList.remove('no-active');
   } else {
      burgerMenu.classList.remove('active-menu');
      burgerMenu.classList.add('no-active');
   }
});

let servicesBtn = document.querySelector('.services-burger');
let servicesMenu = document.querySelector('.services-burger-menu');

servicesBtn.addEventListener('click', function (evt) {
   evt.stopPropagation();
   if (servicesMenu.classList.contains('no-active')) {
      servicesMenu.classList.add('active-menu');
      servicesMenu.classList.remove('no-active');
   } else {
      servicesMenu.classList.remove('active-menu');
      servicesMenu.classList.add('no-active');
   }
})

body.addEventListener('click', function () {
   if (burgerMenu.classList.contains('active-menu')) {
      burgerMenu.classList.remove('active-menu');
      burgerMenu.classList.add('no-active');
   }
   if (servicesMenu.classList.contains('active-menu')) {
      servicesMenu.classList.remove('active-menu');
      servicesMenu.classList.add('no-active');
   }
});