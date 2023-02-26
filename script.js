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