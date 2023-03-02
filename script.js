function work() {
    let work = document.getElementById("work-screen");
    work.style.visibility = "visible"; 
}

function lipstick() {
    let poster = document.getElementById("float");
    let hide = document.getElementById("hide");
    let show = document.getElementById("show");
    poster.style.visibility = "hidden";
    hide.style.visibility = "hidden";
    show.style.visibility = "visible";
}

function lipstickshow() {
    let poster = document.getElementById("float");
    let hide = document.getElementById("hide");
    let show = document.getElementById("show");
    poster.style.visibility = "visible";
    hide.style.visibility = "visible";
    show.style.visibility = "hidden";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}