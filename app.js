var slider = document.getElementById('fullscreen-slider');
var slides = slider.querySelectorAll('.slide');
var currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  
  currentSlide++;
  
  if (currentSlide == slides.length) {
    currentSlide = 0;
  }
  
  slides[currentSlide].classList.add('active');
  
  setTimeout(nextSlide, 3000);
}

nextSlide();

function showDiv() {
    var div = document.getElementById("social-block");
    div.classList.add("show");
  }
  
  
