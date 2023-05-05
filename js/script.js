"use strict";

const gP = "15px";

document.querySelector("body").style.fontFamily = 'font-family: "Lora", serif;';
document.querySelector("body").style.margin = "0";

/* function to add flex and row to variables */
function addFlex(element) {
  element.style.display = "flex";
  element.style.flexDirection = "row";
}

/* function for small texts */
function smallText(element) {
  element.style.fontSize = "16px";
  element.style.letterSpacing = "1px";
}

/* Create sale banner */

const saleBanner = document.createElement("div");
document.body.append(saleBanner);
saleBanner.style.padding = gP;
saleBanner.style.textAlign = "center";
saleBanner.style.backgroundColor = "B44B96";
const saleText = document.createElement("p");
saleBanner.appendChild(saleText);
saleText.innerText = "Save 10% if you shop two items or more!";
saleText.style.margin = "0";
saleText.style.color = "white";
smallText(saleText);

/* create navbar */
const navBar = document.createElement("div");
document.body.append(navBar);
navBar.style.padding = gP;
addFlex(navBar);

/* create sitelogo */
const logoLink = document.createElement("a");
navBar.appendChild(logoLink);
logoLink.setAttribute("href", "index.html");
const logo = document.createElement("img");
logo.src = "images/hairlylogo.png";
logo.style.height = "50px";
logoLink.appendChild(logo);
const menuItemsHolder = document.createElement("div");
navBar.appendChild(menuItemsHolder);
menuItemsHolder.style.width = "100%";
addFlex(menuItemsHolder);
menuItemsHolder.style.justifyContent = "center";
menuItemsHolder.style.justifyContent = "flex-end";

/* Create searchbar */
const searchBarDiv = document.createElement("div");
searchBarDiv.style.width = "52%";
searchBarDiv.style.display = "flex";
searchBarDiv.style.border = "2px solid #b8b8b8";
searchBarDiv.style.borderRadius = "5px";
searchBarDiv.style.margin = "0 10px";
searchBarDiv.style.padding = "0 10px";
menuItemsHolder.appendChild(searchBarDiv);
const searchBar = document.createElement("input");
searchBarDiv.appendChild(searchBar);
searchBar.type = "text";
searchBar.placeholder = "SEARCH PRODUCTS HERE...";
searchBar.style.width = "100%";
searchBar.style.border = "none";
searchBar.style.outline = "none";
const searchIcon = document.createElement("img");
searchBarDiv.appendChild(searchIcon);
searchIcon.src = "images/search.png";
searchIcon.style.height = "25px";
searchIcon.style.margin = "auto";

/* Create symbols for profile etc */
const navbarOptionsDiv = document.createElement("div");
menuItemsHolder.appendChild(navbarOptionsDiv);

const navbarIcons = ["profile.png", "basket.png", "menu.png"];

for (let i = 0; i < navbarIcons.length; i++) {
  const navBarLinks = document.createElement("a");
  navbarOptionsDiv.appendChild(navBarLinks);
  navbarOptionsDiv.style.display = "contents";
  const navbarIconImages = document.createElement("img");
  navBarLinks.appendChild(navbarIconImages);
  navbarIconImages.src = `images/${navbarIcons[i]}`;
  navbarIconImages.style.height = "30px";
  navBarLinks.style.margin = "auto 10px";
}
