"use strict";

const gP = "15px";
const purple = "B44B96";
const green = "4bb469";
const white = "F8F8F8";
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
  element.style.color = "white";
  element.style.margin = "0 10px";
}

/* Create sale banner */

const saleBanner = document.createElement("div");
document.body.append(saleBanner);
saleBanner.style.padding = gP;
saleBanner.style.textAlign = "center";
saleBanner.style.backgroundColor = purple;
const saleText = document.createElement("p");
saleBanner.appendChild(saleText);
saleText.innerText = "Save 10% if you shop two items or more!";
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
searchBarDiv.style.width = "29%";
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

/* category div */

const categoryBanner = document.createElement("div");
document.body.append(categoryBanner);
categoryBanner.style.padding = gP;
categoryBanner.style.backgroundColor = "4bb469";
categoryBanner.style.justifyContent = "center";
addFlex(categoryBanner);
const categories = [
  "NEW",
  "HAIRCAIR",
  "STYLING",
  "MENS",
  "BEST SELLERS",
  "SUBSCRIPTION",
  "SALE",
];
for (let i = 0; i < categories.length; i++) {
  const categoryLink = document.createElement("a");
  categoryBanner.appendChild(categoryLink);
  const categoryP = document.createElement("p");
  categoryLink.appendChild(categoryP);
  categoryP.innerText = categories[i];
  smallText(categoryP);
}

/* USP banner */

const uspBanner = document.createElement("div");
document.body.append(uspBanner);
uspBanner.style.padding = gP;
uspBanner.style.justifyContent = "center";
addFlex(uspBanner);
const freeDiv = document.createElement("div");
uspBanner.appendChild(freeDiv);
addFlex(freeDiv);
const uspArray = [
  "FREE DELIVERY OVER 300KR",
  "SPEEDY DELIVERY",
  "OVER 20,000 HAPPY CUSTOMERS",
];
const uspPics = ["images/card.png", "images/truck.png", "images/tick.png"];

for (let i = 0; i < uspArray.length; i++) {
  const freeDiv = document.createElement("div");
  uspBanner.appendChild(freeDiv);
  addFlex(freeDiv);
  freeDiv.style.margin = "auto 10px";
  const freeDivImg = document.createElement("img");
  freeDiv.appendChild(freeDivImg);
  freeDivImg.src = uspPics[i];
  freeDivImg.style.height = "20px";
  const freeDivP = document.createElement("p");
  freeDiv.appendChild(freeDivP);
  freeDivP.innerText = uspArray[i];
  smallText(freeDivP);
  freeDivP.style.color = "535353";
}

/* Creating hero image */

const heroImagediv = document.createElement("div");
document.body.append(heroImagediv);
heroImagediv.style.width = "100vw";
heroImagediv.style.height = "80%";
heroImagediv.style.display = "flex";
heroImagediv.style.flexDirection = "column";
heroImagediv.style.justifyContent = "center";
heroImagediv.style.backgroundPosition = "center";
heroImagediv.style.backgroundSize = "cover";
heroImagediv.style.backgroundImage =
  "linear-gradient(90deg, rgba(201, 59, 161, 0.1), rgba(0, 0, 0, 0.5)), url('images/hair.jpg')";
heroImagediv.style.boxShadow = "5px 2px 2px gray";
const heroTextDiv = document.createElement("div");
heroImagediv.appendChild(heroTextDiv);
heroTextDiv.style.padding = "60px";
const heroImageH1 = document.createElement("h1");
heroTextDiv.appendChild(heroImageH1);
heroImageH1.innerText = "Summer";
const heroImageH2 = document.createElement("h1");
heroTextDiv.appendChild(heroImageH2);
heroImageH2.innerText = "bounce!";
heroImageH1.classList.add("heroHeader");
heroImageH2.classList.add("heroHeader");
const heroHeaders = document.querySelectorAll(".heroHeader");

heroHeaders.forEach((header) => {
  header.style.fontSize = "60px";
  header.style.margin = "0";
  header.style.letterSpacing = "3px";
  header.style.color = "F8F8F8";
  header.style.fontWeight = "500";
});
const heroTexts = [
  "All the best products",
  "for volumizing your",
  "hair this summer!",
];

for (let i = 0; i < heroTexts.length; i++) {
  const heroImagep = document.createElement("p");
  heroTextDiv.appendChild(heroImagep);
  heroImagep.innerText = heroTexts[i];
  heroImagep.style.fontSize = "22px";
  heroImagep.style.letterSpacing = "1.5px";
  heroImagep.style.color = "white";
  heroImagep.style.margin = "5px";
}

const heroButton = document.createElement("BUTTON");
heroTextDiv.appendChild(heroButton);
heroButton.innerText = "SHOP NOW!";
heroButton.style.padding = "5px";
heroButton.style.borderRadius = "5px";
heroButton.style.backgroundColor = purple;
heroButton.style.color = white;
heroButton.style.marginTop = "10px";
