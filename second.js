function toggleMenu() {
    var menuLinks = document.getElementById("menuLinks");
    var menuIcon = document.getElementById("menuIcon");
    var menu = document.getElementById("menu");
  
    if (menuLinks.classList.contains("show")) {
      menuLinks.classList.remove("show");
  
menuIcon.style.display = "block";
menu.style.backgroundColor = "transparent";
document.body.style.overflow = "auto";
} else {
menuLinks.classList.add("show");
menuIcon.style.display = "none";
menu.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
document.body.style.overflow = "hidden";
}
}

function hideMenu() {
var menuLinks = document.getElementById("menuLinks");
var menuIcon = document.getElementById("menuIcon");
var menu = document.getElementById("menu");

menuLinks.classList.remove("show");
menuIcon.style.display = "block";
menu.style.backgroundColor = "transparent";
document.body.style.overflow = "auto";
}
