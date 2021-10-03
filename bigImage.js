let bigImage = document.querySelector('.big-image');
let smallImages = document.querySelectorAll('.service-image');


for (let i = 0; i < smallImages.length; i++) {
   
   smallImages[i].addEventListener('click', function () {
   bigImage.src = smallImages[i].src;
      
   })
};


