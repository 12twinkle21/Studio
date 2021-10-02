let sessions = document.querySelector('.sessions');
let map = document.querySelector('.map')
let services = document.querySelector('.services')
let aboutUs = document.querySelector('.about-headshots')
let blog = document.querySelector('.blog')
let mainNavBtn = document.querySelectorAll('.header-nav-btn');

let scroll = (section) => {
   section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   });
}


for (let i = 0; i < mainNavBtn.length; i++){
   
   mainNavBtn[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      if (mainNavBtn[i] == mainNavBtn[0]) {
         scroll(sessions);
      } else if (mainNavBtn[i] == mainNavBtn[1]) {
         scroll(map);
      } else if (mainNavBtn[i] == mainNavBtn[2]) {
         scroll(services);
      } else if (mainNavBtn[i] == mainNavBtn[3]) {
         scroll(aboutUs);
      } else if (mainNavBtn[i] == mainNavBtn[4]) {
         scroll(blog);
      };
   });
   
};



let burgerTopBtn = document.querySelectorAll('.burger-top-btn');
console.log(burgerTopBtn);
for (let i = 0; i < burgerTopBtn.length; i++) {
   
   burgerTopBtn[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      if (burgerTopBtn[i] == burgerTopBtn[0]) {
         scroll(sessions);
      } else if (burgerTopBtn[i] == burgerTopBtn[1]) {
         scroll(map);
      } else if (burgerTopBtn[i] == burgerTopBtn[2]) {
         scroll(services);
      } else if (burgerTopBtn[i] == burgerTopBtn[3]) {
         scroll(aboutUs);
      } else if (burgerTopBtn[i] == burgerTopBtn[4]) {
         scroll(blog);
      };
   })
};





   



