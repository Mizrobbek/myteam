var elTheme = document.getElementById("theme");
var elBody = document.getElementById("body");

elTheme.addEventListener("change", function () {
  if (elTheme.checked === true) {
    elBody.className = "dark";
  } else {
    elBody.className = "";
  }
});

var elButton = document.querySelector(".header__menu");
var elMenu = document.querySelector(".menu");

elButton.addEventListener("click", function (evt) {
  elMenu.classList.toggle("open-menu");
  elButton.classList.toggle("open-btn");
});
