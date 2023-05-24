

function link1() {
  var frame = document.getElementById("frame");
  frame.src = "about.html"
  console.log('helllooorrrr testing ermmmm')
}
function link2() {
  var frame = document.getElementById("frame");
  frame.src = "work.html"
  console.log('helllooorrrr testing')
}
function link3() {
  var frame = document.getElementById("frame");
  frame.src = "contact.html"
}

function link4() {
  var frame = document.getElementById("frame");
  frame.src = "closet.html"
}

function link5() {
  var frame = document.getElementById("frame");
  frame.src = "music.html"
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

function toggleMute() {
  var myAudio = document.getElementById('audio_playo24');
  myAudio.muted = !myAudio.muted;
  var x = document.getElementById("mute");
  if (x.style.opacity === "0") {
    x.style.opacity = "1";
  } else {
    x.style.opacity = "0";
  }
}