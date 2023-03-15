// Menu Shrinks on scroll
let nav = document.querySelector('.header--nav');

window.addEventListener('scroll', yScroll);


function yScroll() {
  let yPos = window.pageYOffset;
  let pageWidth = window.innerWidth;
  
  if (yPos > 70) {
        nav.classList.add("sticky");
   } else {
        nav.classList.remove("sticky");
   } 
}
