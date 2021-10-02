let firstSliderLine = document.querySelector('.first-row');
let imagesOfFirstRow = document.querySelectorAll('.first-row img');
let secondSliderLine = document.querySelector('.second-row');
let secondOfFirstRow = document.querySelectorAll('.second-row img');
let width;
let count = 0;
let arrowRight = document.querySelector('.arrow-right')
let arrowLeft = document.querySelector('.arrow-left')

function init() {
   for (let i = 0; i < imagesOfFirstRow.length; i++) {
      width = imagesOfFirstRow[i].offsetWidth * 2 + 20;
      
   };
   
}
init();

arrowRight.addEventListener('click', function (evt) {
   evt.preventDefault();
   count++;
   if (count == imagesOfFirstRow.length - 1) {
      count--;
   }
   rollSliderRight(width);
});

arrowLeft.addEventListener('click', function (evt) {
   evt.preventDefault();
   count--;
   if (count > 0) {
      count--;
   }
   if (count < 0) {
      count++;
   }
   rollSliderLeft(width);
});

function rollSliderRight(value) {
   firstSliderLine.style.transform = 'translateX(' + (-value) + 'px )';
   secondSliderLine.style.transform = 'translateX(' + (-value) + 'px )';
   
};

function rollSliderLeft(value) {
   firstSliderLine.style.transform = 'translateX(' + (value - value) + 'px )';
   secondSliderLine.style.transform = 'translateX(' + (value - value) + 'px )';
   
};



let carouselClients = document.querySelector('.clients-items');
let carouselItems = document.querySelectorAll('.client-item');
let widthClients;
let radio1 = document.querySelector('.radio-1');
let radio2 = document.querySelector('.radio-2');
let radio3 = document.querySelector('.radio-3');
let countCarousel = 0;
function initCarousel() {
   for (let i = 0; i < carouselItems.length; i++) {
      widthClients = carouselItems[i].offsetWidth * 3 + 130;
   }
};

initCarousel();

radio1.addEventListener('click', function (evt) {
   evt.preventDefault();
   rollCarousel1();
});
radio2.addEventListener('click', function (evt) {
   evt.preventDefault();
   rollCarousel2(widthClients);
});
radio3.addEventListener('click', function (evt) {
   evt.preventDefault();
   rollCarousel3(widthClients);
});

function rollCarousel1(value) {
   countCarousel = 0;
   carouselClients.style.transform = 'translateX(' + (0) + 'px )';
   radio1.classList.add('radio-active');
   radio2.classList.remove('radio-active');
   radio3.classList.remove('radio-active');
};

function rollCarousel2(value) {
   countCarousel = 1;
   carouselClients.style.transform = 'translateX(' + (-value) + 'px )';
   radio1.classList.remove('radio-active');
   radio2.classList.add('radio-active');
   radio3.classList.remove('radio-active');
};

function rollCarousel3(value) {
   carouselClients.style.transform = 'translateX(' + (-value * 2) + 'px )';
   countCarousel = 2;
   radio1.classList.remove('radio-active');
   radio2.classList.remove('radio-active');
   radio3.classList.add('radio-active');
};


window.addEventListener('resize', function () {
   init();
   initCarousel();
   if (countCarousel == 1) {
      rollCarousel2(widthClients);
   }
   if (countCarousel == 2) {
      rollCarousel3(widthClients);
   }
   if (count > 0) {  
      rollSliderRight(width);
   }
});