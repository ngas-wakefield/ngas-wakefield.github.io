/* This is the px at which the open class with be added/removed */
const breakPoint = 550;

/* Get inital screen width. If it's greater than the breakPoint, add the open class */
let initialWidth = window.innerWidth;
if (initialWidth >= breakPoint) {
  document.querySelector("#mySidebar").classList.add("open");
};

/* Check for window resize events. If the resize is to go from below break point to above, add open class. If it goes from above to below, remove it. */
let previousWidth = window.innerWidth;
window.addEventListener('resize', () => {
  let currentWidth = window.innerWidth;
  if (previousWidth < breakPoint && currentWidth >= breakPoint) {
    document.querySelector("#mySidebar").classList.add("open");
  } else if (previousWidth >= breakPoint && currentWidth < breakPoint) {
    document.querySelector("#mySidebar").classList.remove("open");
  }
  previousWidth = currentWidth;
});

/* Buttons - toggle open class */
function toggleOpen () {
  document.getElementById("mySidebar").classList.toggle("open");
}



/* top scroll button */

//Get the button
var mybutton = document.getElementById("myTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}