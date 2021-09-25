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

for (let i = 0; i <= mainNavBtn.length; i++) {

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
   


   



