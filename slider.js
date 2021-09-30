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
   rollSliderRight(width);
});

arrowLeft.addEventListener('click', function (evt) {
   evt.preventDefault();
   count++;
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

window.addEventListener('resize', function () {
   init();
   rollSliderRight(0);
   rollSliderLeft(0);
});


