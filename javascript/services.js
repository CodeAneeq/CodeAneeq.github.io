// dark mode

// // // 7E22CE Purple color code #66fcf1 green border color code

let element = document.body;

let navbar = document.getElementById("navBar");
let navbarA = Array.from(document.querySelectorAll(".blackAnchor"));
let allBtn = Array.from(document.querySelectorAll(".AllBtns"));

let whiteText = Array.from(document.querySelectorAll(".whiteText"));
let blackText = Array.from(document.querySelectorAll(".blackfont"));
let purpleText = Array.from(document.querySelectorAll(".purpleline"));

let purpleBackground = Array.from(document.querySelectorAll(".purplebox"));
// let darkPurpleBackground = Array.from(document.querySelectorAll(".dark_purple"));

let footer = document.querySelector("footer");


function darkMode() {
    let dark = document.getElementById("dark");
    let light = document.getElementById("light");
  
    let logo = document.getElementById("Logo");
    let purpleLogo = document.getElementById("purpleLogo");
  
    light.style.display = "inline";
    dark.style.display = "none";
  
    logo.style.display = "none";
    purpleLogo.style.display = "inline";

    element.style.backgroundColor = "white";
    navbar.style.border = "5px solid #7E22CE";
    navbar.style.background = "transparent";
    navbarA.forEach((element) => {
        element.style.color = "black";
      });
      allBtn.forEach((element) => {
        element.style.background = "transparent";
        element.style.border = "2px solid #7E22CE";
        element.style.color = "black";
      });
      blackText.forEach((element) => {
        element.style.color = "black";
      });
      purpleText.forEach((element) => {
        element.style.color = "#660066";
      });
      whiteText.forEach((element) => {
        element.style.color = "white";
      })
      purpleBackground.forEach((element) => {
        element.style.backgroundColor = "#800080";
        element.style.border = "2px solid #660066";
      })

      footer.style.backgroundColor = "#7E22CE";
}

function lightMode() {
    let dark = document.getElementById("dark");
    let light = document.getElementById("light");
  
    let logo = document.getElementById("Logo");
    let purpleLogo = document.getElementById("purpleLogo");
  
    light.style.display = "none";
    dark.style.display = "inline";
  
    logo.style.display = "inline";
    purpleLogo.style.display = "none";

    element.style.backgroundColor = "#0b0c10";
    navbar.style.border = "5px solid #66fcf1";
  navbar.style.background = "transparent";
  navbarA.forEach((element) => {
    element.style.color = "white";
  });
  allBtn.forEach((element) => {
    element.style.background = "transparent";
    element.style.border = "2px solid #66fcf1";
    element.style.color = "white";
  });
  blackText.forEach((element) => {
    element.style.color = "white";
  });
  purpleText.forEach((element) => {
    element.style.color = "#66fcf1";
  });
  whiteText.forEach((element) => {
    element.style.color = "gray";
  })
  purpleBackground.forEach((element) => {
    element.style.backgroundColor = "#1f2833";
    element.style.border = "2px solid #088178";
  })

  footer.style.backgroundColor = "#1f2833";
}

// hamburger

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('#navBar ul');

  hamburgerMenu.addEventListener('click', function () {
      hamburgerMenu.classList.toggle('close');
      navLinks.classList.toggle('show');
  });
});