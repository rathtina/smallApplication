// right Bar of Menu
const closeBar = document.querySelector(".fa-xmark");
const openBar = document.querySelector("#open-bar");
const rightBar = document.querySelector(".aside");
const pageOverlay = document.querySelector(".overlay-page");

if (openBar) {
  openBar.addEventListener("click", () => {
    rightBar.classList.add("open");
    pageOverlay.style.display = "block";
    leftmenu.classList.remove("open-left");
    openleft.classList.remove("topbar");
  });
}
if (closeBar) {
  closeBar.addEventListener("click", () => {
    rightBar.classList.remove("open");
    pageOverlay.style.display = "none";
  });
}
// left menu bar
const leftmenu = document.querySelector(".left-bar");
const closeleft = document.querySelector("#close-left");
const openleft = document.querySelector("#server");
const pageOverlays = document.querySelector(".overlay-page");
openleft.addEventListener("click", () => {
  leftmenu.classList.toggle("open-left");
  openleft.classList.toggle("topbar");
});
const zoomIn = document.querySelector("#in");
const zoomOut = document.querySelector("#out");
const zoomUser = document.querySelector(".show-User");
function toggle_full_screen() {
  if (document.documentElement.requestFullScreen) {
    document.documentElement.requestFullScreen();
    zoomIn.style.display = "block";
    zoomOut.style.display = "none";
  } else if (document.documentElement.mozRequestFullScreen) {
    zoomIn.style.display = "block";
    zoomOut.style.display = "none";
    /* Firefox */
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullScreen) {
    zoomIn.style.display = "block";
    zoomOut.style.display = "none";
    /* Chrome, Safari & Opera */
    document.documentElement.webkitRequestFullScreen(
      Element.ALLOW_KEYBOARD_INPUT
    );
  } else if (document.msRequestFullscreen) {
    /* IE/Edge */
    document.documentElement.msRequestFullscreen();
    zoomIn.style.display = "block";
    zoomOut.style.display = "none";
  }
}
function toggle_in_screen() {
  if (document.cancelFullScreen) {
    document.cancelFullScreen();
    zoomOut.style.display = "block";
    zoomIn.style.display = "none";
  } else if (document.mozCancelFullScreen) {
    zoomOut.style.display = "block";
    zoomIn.style.display = "none";
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    zoomOut.style.display = "block";
    zoomIn.style.display = "none";
    /* Chrome, Safari and Opera */
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
    zoomOut.style.display = "block";
    zoomIn.style.display = "none";
  }
}
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
function togglePasswordVisibilityOne() {
  var passwordInput = document.getElementById("password-1");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
function togglePasswordVisibilityTwo() {
  var passwordInput = document.getElementById("password-2");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
function togglePasswordVisibilityThree() {
  var passwordInput = document.getElementById("password-3");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
function togglePasswordVisibilityFour() {
  var passwordInput = document.getElementById("password-4");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
// arrow
let arrow = document.querySelector(".arrow");
arrow.addEventListener("click", (e) => {
  let arrowParent = e.target.parentElement.parentElement;
  arrowParent.classList.toggle("now");
});
// Link Navigation
const activePage = window.location.pathname;
const navLink = document.querySelectorAll(".sub-menu > li").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("actives");
  } else {
    link.classList.remove("actives");
  }
});
const activePages = window.location.pathname;
const navLinks = document.querySelectorAll(".aside ul li").forEach((link) => {
  if (link.href.includes(`${activePages}`)) {
    link.classList.add("nowactive");
  } else {
    link.classList.remove("actives-1");
  }
});
const activePagese = window.location.pathname;
const navLinkse = document.querySelectorAll(".userCart > a").forEach((link) => {
  if (link.href.includes(`${activePages}`)) {
    link.classList.add("actives-2");
  } else {
    link.classList.remove("actives-2");
  }
});
// Preview Cart
let popUp = document.getElementById("preview");
function openPopup() {
  preview.classList.toggle("open-cart");
  userCart.classList.remove("show-User");
}
// function closePopup() {
//   preview.classList.remove("open-cart");
// }
// UserCart
let userUp = document.getElementById("userCart");
function openUser() {
  userCart.classList.toggle("show-User");
  preview.classList.remove("open-cart");
}
function clearField() {
  var selectField = document.getElementById("server");
  selectField.value = "server";
}

window.onscroll = () => {
  preview.classList.remove("open-cart");
  userCart.classList.remove("show-User");
};
