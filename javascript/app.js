// // // 7E22CE Purple color code #66fcf1 green border color code

let element = document.body;

// let footer = document.footer;
// navbar

let navbar = document.getElementById("nav");
let navbarA = Array.from(document.querySelectorAll(".black_nav"));
let allBtn = Array.from(document.querySelectorAll(".allBtn"));

let whiteText = Array.from(document.querySelectorAll(".whiteText"));
let blackText = Array.from(document.querySelectorAll(".black"));
let purpleText = Array.from(document.querySelectorAll(".purple"));

// hero section button

// let heroSectionButton = document.getElementById("hero-section-button");

let purpleBackground = Array.from(document.querySelectorAll(".purpleBackground"));

let lightPurpleBackground = Array.from(document.querySelectorAll(".light_purple"));
let darkPurpleBackground = Array.from(document.querySelectorAll(".dark_purple"));

let footer = document.querySelector("footer");

function darkMode() {
  let dark = document.getElementById("dark");
  let light = document.getElementById("light");

  let logo = document.getElementById("logo");
  let purpleLogo = document.getElementById("purple_logo");

  light.style.display = "inline";
  dark.style.display = "none";

  logo.style.display = "none";
  purpleLogo.style.display = "inline";

  element.style.backgroundColor = "white";
  navbar.style.border = "5px solid #7E22CE";
  navbar.style.background = "transparent";
  blackText.forEach((element) => {
    element.style.color = "black";
  });
  whiteText.forEach((element) => {
    element.style.color = "white";
  });
  purpleText.forEach((element) => {
    element.style.color = "#7E22CE";
  });
  navbarA.forEach((element) => {
    element.style.color = "black";
  });
  allBtn.forEach((element) => {
    element.style.background = "transparent";
    element.style.border = "2px solid #7E22CE";
    element.style.color = "black";
  });
  purpleBackground.forEach((element) => {
    element.style.backgroundColor = "#7E22CE";
    element.style.border = "2px solid #400040";
  });
  lightPurpleBackground.forEach((element) => {
    element.style.backgroundColor = "#efbbff";
  })

  darkPurpleBackground.forEach((element) => {
    element.style.backgroundColor = "#d896ff";
  })
  footer.style.backgroundColor = "#7E22CE";
}

function lightMode() {
  let dark = document.getElementById("dark");
  let light = document.getElementById("light");

  let logo = document.getElementById("logo");
  let purpleLogo = document.getElementById("purple_logo");

  light.style.display = "none";
  dark.style.display = "inline";

  logo.style.display = "inline";
  purpleLogo.style.display = "none";

  element.style.backgroundColor = "#0b0c10";
  navbar.style.border = "5px solid #66fcf1";
  // blackText.style.color = "white"
  blackText.forEach((element) => {
    element.style.color = "white";
  });
  purpleText.forEach((element) => {
    element.style.color = "#66fcf1";
  });
  navbarA.forEach((element) => {
    element.style.color = "white";
  });
  allBtn.forEach((element) => {
    element.style.background = "transparent";
    element.style.border = "2px solid #66fcf1";
    element.style.color = "white";
  });
  purpleBackground.forEach((element) => {
    element.style.backgroundColor = "#1f2833";
    element.style.border = "2px solid #66fcf1";
  });
  lightPurpleBackground.forEach((element) => {
    element.style.backgroundColor = "#088178";
  })

  darkPurpleBackground.forEach((element) => {
    element.style.backgroundColor = "#65a29e";
  })
  footer.style.backgroundColor = "#1f2833";
}

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  // const buttonDiv = document.querySelector('.allBtn');
  // const buttonDiv = document.querySelector('.button-div');

  console.log("DOM Loaded");

  hamburgerMenu.addEventListener('click', function () {
      console.log("Hamburger Menu Clicked");
      navLinks.classList.toggle('show');
      // buttonDiv.classList.toggle('show');
      
  });
});

