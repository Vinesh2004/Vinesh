const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})

/*about me slider*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function download(file) {

  //creating an invisible element
  var element = document.createElement('a');
  element.setAttribute('href', './PDF/Vinesh_Vivekanand_Resume.pdf');
  element.setAttribute('download', file);

  // Above code is equivalent to
  // <a href="path of file" download="file name">

  document.body.appendChild(element);

  //onClick property
  element.click();

  document.body.removeChild(element);
}

// Start file download.
document.getElementById("ms-download")
.addEventListener("click", function() {
  // Generate download of hello.txt 
  // file with some content
  var filename = "Vinesh_Vivekanand_Resume.pdf";

  download(filename);
}, false);








