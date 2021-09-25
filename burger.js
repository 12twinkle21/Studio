let burgerBtn = document.querySelector('.nav-burger');
let burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', function () {
   if (burgerMenu.classList.contains('no-active')) {
      burgerMenu.classList.remove('no-active');
   } else {
      burgerMenu.classList.add('no-active');
   }
});

let servicesBtn = document.querySelector('.services-burger');
let servicesMenu = document.querySelector('.services-burger-menu');

servicesBtn.addEventListener('click', function(){
   if (servicesMenu.classList.contains('no-active')) {
      servicesMenu.classList.remove('no-active');
   } else {
      servicesMenu.classList.add('no-active');
   }
})