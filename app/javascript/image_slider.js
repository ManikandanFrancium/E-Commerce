
function getSlides(sliderNumber){
  return document.getElementsByClassName("mySlides_" + sliderNumber);
}

function prevSlide(sliderNumber) {
  let slideIndex = 0;
  let slides = getSlides(sliderNumber);
  for(let i=slides.length-1; 0 <= i; i--){
    if (slides[i].style.display == 'block')
      slideIndex = i - 1;
  }
  if (slideIndex==-1)
    slideIndex=slides.length-1;
  showSlides(sliderNumber, slideIndex);
}
function nextSlide(sliderNumber) {
  let slideIndex = 0;
  let slides = getSlides(sliderNumber);
  for(let i=0; i < slides.length; i++){
    if (slides[i].style.display == 'block')
      slideIndex = i + 1;
  }
  if (slideIndex==slides.length)
    slideIndex=0;
  showSlides(sliderNumber, slideIndex);
}


function showSlides(sliderNumber='', slideIndex=0) {
  let slides = getSlides(sliderNumber);
  if(slides.length > 0){
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
  }
}

