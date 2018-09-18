// set width of the nav menue to 250px and left margin of content to 250px for it to fill
function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

// get rid of nav and side margin
function closeNav() {
    document.getElementById("mySideNav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

// function crossMenu(x) {
//     x.classList.toggle("change");
// }
