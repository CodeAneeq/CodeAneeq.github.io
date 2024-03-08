var landingPagesOne = document.getElementsByClassName("project-one");
var landingPagesTwo = document.getElementsByClassName("project-two");
var functionallity = document.getElementsByClassName("project-func");

// this function is used for showing landing pages
function landingPagesShow() {
    // var buttonBackground = document.getElementById("bt-1");
    // buttonBackground.style.backgroundColor = "#66fcf1";

    for (var i = 0; i < landingPagesOne.length; i++) {
        landingPagesOne[i].style.display = 'block';
    }

    for (var j = 0; j < landingPagesTwo.length; j++) {
        landingPagesTwo[j].style.display = 'block';
    }

    for (var k = 0; k < functionallity.length; k++) {
        functionallity[k].style.display = 'none';
    }
}

// this function is used for showing functionality projects
function functionallityShow() {
    for (var i = 0; i < landingPagesOne.length; i++) {
        landingPagesOne[i].style.display = 'none';
    }

    for (var j = 0; j < landingPagesTwo.length; j++) {
        landingPagesTwo[j].style.display = 'none';
    }

    for (var k = 0; k < functionallity.length; k++) {
        functionallity[k].style.display = 'block';
    }
}

// dark mode

// // // 7E22CE Purple color code #66fcf1 green border color code

let element = document.body;

let navbar = document.getElementById("navbar");
let navbarA = Array.from(document.querySelectorAll(".blackA"));
let allBtn = Array.from(document.querySelectorAll(".btnAll"));

let whiteText = Array.from(document.querySelectorAll(".whiteText"));
let blackText = Array.from(document.querySelectorAll(".blackt"));
let purpleText = Array.from(document.querySelectorAll(".purplet"));

let lightPurpleBackground = Array.from(document.querySelectorAll(".light_purple"));
let darkPurpleBackground = Array.from(document.querySelectorAll(".dark_purple"));
// let navLinksUl = document.getElementById("nav-links");
let hamburger = document.getElementById("hamburger");

let footer = document.querySelector("footer");


function darkMode() {
    let dark = document.getElementById("dark");
    let light = document.getElementById("light");
  
    let logo = document.getElementById("logo");
    let purpleLogo = document.getElementById("purplelogo");
  
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
      // navLinksUl.style.backgroundColor = "white";
      // hamburger.style.color = "#7E22CE";
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
    let purpleLogo = document.getElementById("purplelogo");
  
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
  // hamburger.style.color = "#66fcf1";
  lightPurpleBackground.forEach((element) => {
    element.style.backgroundColor = "#088178";
  })

  darkPurpleBackground.forEach((element) => {
    element.style.backgroundColor = "#65a29e";
  })

  footer.style.backgroundColor = "#1f2833";
}

// hamburger

// document.addEventListener('DOMContentLoaded', function () {
//   const hamburgerMenu = document.getElementById('hamburger-menu');

//   hamburgerMenu.addEventListener('click', function () {
//       hamburgerMenu.classList.toggle('close');
//       navLinks.classList.toggle('show');
//   });
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const hamburgerMenu = document.querySelector('.hamburger-menu');
//   const navLinks = document.querySelector('.nav-links');

//   console.log("DOM Loaded");

//   hamburgerMenu.addEventListener('click', function () {
//       console.log("Hamburger Menu Clicked");
//       navLinks.classList.toggle('show');
      
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('#navbar ul');

  hamburgerMenu.addEventListener('click', function () {
      hamburgerMenu.classList.toggle('close');
      navLinks.classList.toggle('show');
  });
});

