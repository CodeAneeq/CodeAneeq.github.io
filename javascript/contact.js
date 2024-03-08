// dark mode

// // // 7E22CE Purple color code #66fcf1 green border color code

let element = document.body;

let navbar = document.getElementById("navbarContact");
let navbarA = Array.from(document.querySelectorAll(".blackAnchorTags"));
let allBtn = Array.from(document.querySelectorAll(".Btns"));

let whiteText = Array.from(document.querySelectorAll(".whiteText"));
let blackText = Array.from(document.querySelectorAll(".blacktexts"));
let purpleBorder = Array.from(document.querySelectorAll(".purpleBorder"))
let purpleBtn = Array.from(document.querySelectorAll(".purpleBtn"))

let footer = document.querySelector("footer");

function darkMode() {
    let dark = document.getElementById("dark");
    let light = document.getElementById("light");
  
    let logo = document.getElementById("mainlogo");
    let purpleLogo = document.getElementById("plogo");
  
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
      purpleBorder.forEach((element) => {
        element.style.border = "2px solid #7E22CE";
        element.style.color = "black";
      })
      purpleBtn.forEach((element) =>{
        element.style.backgroundColor = "#7E22CE"
        element.style.color = "white"
      })
      footer.style.backgroundColor = "#7E22CE";
}

function lightMode() {
    let dark = document.getElementById("dark");
    let light = document.getElementById("light");
  
    let logo = document.getElementById("mainlogo");
    let purpleLogo = document.getElementById("plogo");
  
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
  purpleBorder.forEach((element) => {
    element.style.border = "2px solid #66fcf1";
    element.style.color = "white";
  })
  purpleBtn.forEach((element) =>{
    element.style.backgroundColor = "#66fcf1"
    element.style.color = "black"
  })
  footer.style.backgroundColor = "#1f2833";
}

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('#navbarContact ul');

  hamburgerMenu.addEventListener('click', function () {
      hamburgerMenu.classList.toggle('close');
      navLinks.classList.toggle('show');
  });
});
