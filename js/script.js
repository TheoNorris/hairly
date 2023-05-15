"use strict";

const gP = "15px";
const purple = "B44B96";
const green = "4bb469";
const white = "F8F8F8";
document.querySelector("body").style.fontFamily = 'font-family: "Lora", serif;';
document.querySelector("body").style.margin = "0";
document.querySelector("body").style.width = "fit-content";

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

/* Function that creates cards for products within the website */

function createProductDiv(productDetails, container) {
  for (let i = 0; i < productDetails.brand.length; i++) {
    const productDiv = document.createElement("div");
    container.appendChild(productDiv);
    productDiv.style.margin = "0 12.5px 15px";
    productDiv.style.backgroundColor = "4bb469";
    const productImage = document.createElement("img");
    productDiv.appendChild(productImage);
    productImage.src = `images/${productDetails.image[i]}`;
    productImage.style.width = "100%";
    const brandAndPrice = document.createElement("div");
    productDiv.appendChild(brandAndPrice);
    brandAndPrice.style.width = "100%";
    brandAndPrice.style.display = "flex";
    brandAndPrice.style.justifyContent = "space-between";
    const brand = document.createElement("p");
    brandAndPrice.appendChild(brand);
    brand.innerText = productDetails.brand[i];
    smallText(brand);
    brand.style.fontSize = "20px";
    brand.style.margin = gP;
    const saleAndPrice = document.createElement("div");
    brandAndPrice.appendChild(saleAndPrice);
    addFlex(saleAndPrice);
    if (productDetails.salePrice != "") {
      const sale = document.createElement("p");
      saleAndPrice.appendChild(sale);
      sale.innerText = `${productDetails.salePrice[i]}kr`;
      smallText(sale);
      sale.style.fontSize = "20px";
      sale.style.margin = gP;
      sale.style.textDecoration = "line-through";
      const price = document.createElement("p");
      saleAndPrice.appendChild(price);
      price.innerText = `${productDetails.price[i]}kr`;
      smallText(price);
      price.style.fontSize = "20px";
      price.style.margin = gP;
      price.style.color = "red";
    } else {
      const price = document.createElement("p");
      saleAndPrice.appendChild(price);
      price.innerText = `${productDetails.price[i]}kr`;
      smallText(price);
      price.style.fontSize = "20px";
      price.style.margin = gP;
    }
    const productType = document.createElement("p");
    productDiv.appendChild(productType);
    productType.innerText = productDetails.product[i];
    smallText(productType);
    productType.style.margin = "0 15px 15px";
    productType.style.fontSize = "20px";
    const buyDiv = document.createElement("div");
    productDiv.appendChild(buyDiv);
    buyDiv.style.display = "flex";
    buyDiv.style.justifyContent = "center";
    buyDiv.style.backgroundColor = "F8F8F8";
    buyDiv.style.border = "1px solid #C7C7C7";
    buyDiv.style.padding = "15px";
    const cartDiv = document.createElement("div");
    buyDiv.appendChild(cartDiv);
    addFlex(cartDiv);
    cartDiv.style.justifyContent = "center";
    const cartImage = document.createElement("img");
    cartDiv.appendChild(cartImage);
    cartImage.src = "images/basket.png";
    cartImage.style.height = "25px";
    const cartBuy = document.createElement("p");
    cartDiv.appendChild(cartBuy);
    cartBuy.innerText = "Speedy shopping!";
    cartBuy.style.color = "#36454F";
    cartBuy.style.margin = "auto 10px";
    cartBuy.style.letterSpacing = "1px";
    cartBuy.style.fontSize = "20px";
  }
}

/* function that creates images with texts and CTA buttons */

function createPicAndText(details) {
  const heroImagediv = document.createElement("div");
  document.body.append(heroImagediv);
  heroImagediv.style.maxWidth = "100%";
  heroImagediv.style.height = "80%";
  heroImagediv.style.display = "flex";
  heroImagediv.style.flexDirection = "column";
  heroImagediv.style.justifyContent = "center";
  heroImagediv.style.backgroundPosition = "center";
  heroImagediv.style.backgroundSize = "cover";
  heroImagediv.style.backgroundImage = `linear-gradient(90deg, rgba(201, 59, 161, 0.1), rgba(0, 0, 0, 0.5)), url(${details.image})`;
  heroImagediv.style.boxShadow = "5px 2px 2px gray";

  /* Creating hero text and button */

  const heroTextDiv = document.createElement("div");
  heroImagediv.appendChild(heroTextDiv);
  heroTextDiv.style.padding = "60px";
  const heroImageH1 = document.createElement("h1");
  heroTextDiv.appendChild(heroImageH1);
  heroImageH1.innerText = details.h11;
  const heroImageH2 = document.createElement("h1");
  heroTextDiv.appendChild(heroImageH2);
  heroImageH2.innerText = details.h12;
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

  for (let i = 0; i < details.heroTexts.length; i++) {
    const heroImagep = document.createElement("p");
    heroTextDiv.appendChild(heroImagep);
    heroImagep.innerText = details.heroTexts[i];
    heroImagep.style.fontSize = "22px";
    heroImagep.style.letterSpacing = "1.5px";
    heroImagep.style.color = "white";
    heroImagep.style.margin = "5px";
  }

  const heroButton = document.createElement("BUTTON");
  heroTextDiv.appendChild(heroButton);
  heroButton.innerText = details.buttonText;
  heroButton.style.padding = "7px";
  heroButton.style.borderRadius = "5px";
  heroButton.style.backgroundColor = purple;
  heroButton.style.color = white;
  heroButton.style.marginTop = "10px";
  heroButton.style.borderColor = "rgb(180, 75, 150)";

  return heroImagediv;
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

const heroImage = {
  image: "images/hair.jpg",
  h11: "Summer",
  h12: "bounce!",
  heroTexts: [
    "All the best products",
    "for volumizing your",
    "hair this summer!",
  ],
  buttonText: "SHOP NOW!",
};

const heroImageDiv = createPicAndText(heroImage);

/* Create mainpage div and products */

const mainPageDiv = document.createElement("div");
document.body.append(mainPageDiv);
mainPageDiv.style.margin = "0 12.5px";
const hotNow = document.createElement("h3");
mainPageDiv.appendChild(hotNow);
hotNow.innerText = "Hot right now";
hotNow.style.letterSpacing = "0.5px";
hotNow.style.fontSize = "25px";
hotNow.style.margin = "15px 12.5px";
hotNow.style.color = "#36454F";

/* Create container containing product and information */

const productContainer = document.createElement("div");
mainPageDiv.appendChild(productContainer);
addFlex(productContainer);

const hotRightNowDetails = {
  brand: ["Hairly", "Hairly", "Hairly", "Hairly"],
  product: ["Balsam shampoo", "Balsam conditioner", "Hair serum", "Hair mask"],
  salePrice: [],
  price: [149, 249, 549, 149],
  image: ["shampoo.png", "shampoo.png", "shampoo.png", "shampoo.png"],
};

createProductDiv(hotRightNowDetails, productContainer);

const subscriptionImage = {
  image: "images/products.png",
  h11: "Busy",
  h12: "Schedule?",
  heroTexts: ["Let us do the planning", "with our subscription", "package."],
  buttonText: " SIGN UP! ",
};

const subscriptionImageDiv = createPicAndText(subscriptionImage);

subscriptionImageDiv.style.margin = "25px 25px 15px";

const salePageDiv = document.createElement("div");
document.body.append(salePageDiv);
salePageDiv.style.margin = "0 12.5px";
const springSale = document.createElement("h3");
salePageDiv.appendChild(springSale);
springSale.innerText = "Spring sale!";
springSale.style.letterSpacing = "0.5px";
springSale.style.fontSize = "25px";
springSale.style.margin = "15px 12.5px";
springSale.style.color = "#36454F";

const saleContainer = document.createElement("div");
salePageDiv.appendChild(saleContainer);
addFlex(saleContainer);

const springSaleDetails = {
  brand: ["Hairly", "Hairly", "Hairly", "Hairly"],
  product: ["Dry Hair", "Split ends", "Hair mask", "Hair maintenance"],
  salePrice: [249, 349, 499, 299],
  price: [59, 99, 89, 66],
  image: ["shampoo.png", "shampoo.png", "shampoo.png", "shampoo.png"],
};

createProductDiv(springSaleDetails, saleContainer);

const trustDiv = document.createElement("div");
document.body.appendChild(trustDiv);
trustDiv.style.margin = "25px";
trustDiv.style.border = "1px solid rgb(199, 199, 199)";
trustDiv.style.padding = "20px";
trustDiv.style.display = "flex";
trustDiv.style.flexDirection = "column";
trustDiv.style.alignItems = "center";
trustDiv.style.maxWidth = "100%";
trustDiv.style.border = "1px solid #A7A7A7";
trustDiv.style.boxShadow = "rgb(193 193 193) 2px 5px 2px";

const review = {
  name: "Jane Doe",
  header: "Great service!",
  review:
    "Fantastic service. Products were fantastic and were delivered quickly.",
  stars: 5,
};

function reviewDivMaker(review) {
  const starHolder = document.createElement("div");
  trustDiv.appendChild(starHolder);
  starHolder.style.width = "fit-content";

  for (let i = 0; i < review.stars; i++) {
    const stars = document.createElement("img");
    starHolder.appendChild(stars);
    stars.src = "images/star.png";
    stars.style.margin = "0 1px";
  }
  const header = document.createElement("h5");
  trustDiv.appendChild(header);
  header.innerText = review.header;
  header.style.fontSize = "20px";
  header.style.letterSpacing = "1px";
  header.style.margin = "15px";

  const reviewDiv = document.createElement("div");
  trustDiv.appendChild(reviewDiv);
  addFlex(reviewDiv);
  reviewDiv.style.alignItems = "center";
  reviewDiv.style.justifyContent = "space-between";
  reviewDiv.style.width = "100%";

  const arrowLeft = document.createElement("img");
  reviewDiv.appendChild(arrowLeft);
  arrowLeft.src = "images/leftarrow.png";
  arrowLeft.style.height = "25px";
  const reviewText = document.createElement("p");
  reviewDiv.appendChild(reviewText);
  reviewText.innerText = review.review;
  reviewText.style.fontSize = "20px";
  reviewText.style.letterSpacing = "1px";
  reviewText.style.margin = "0px";
  const arrowRight = document.createElement("img");
  reviewDiv.appendChild(arrowRight);
  arrowRight.src = "images/rightarrow.png";
  arrowRight.style.height = "25px";

  const userName = document.createElement("p");
  trustDiv.appendChild(userName);
  userName.innerText = review.name;
  userName.style.fontSize = "20px";
  userName.style.letterSpacing = "1px";

  const trustPilot = document.createElement("p");
  trustDiv.appendChild(trustPilot);
  var br = document.createElement("br");
  trustPilot.innerText = `We have 4.5 stars based on 2530 reviews.`;
  trustPilot.style.letterSpacing = "1px";
  trustPilot.style.fontSize = "16px";
  trustPilot.style.margin = "0";

  const trustPilot2 = document.createElement("p");
  trustDiv.appendChild(trustPilot2);
  var br = document.createElement("br");
  trustPilot2.innerText = `Powered by: Trust Pilot`;
  trustPilot2.style.letterSpacing = "1px";
  trustPilot2.style.fontSize = "16px";
  trustPilot2.style.margin = "5px 0 0";
}

reviewDivMaker(review);

const footer = document.createElement("div");
document.body.append(footer);
addFlex(footer);
footer.style.justifyContent = "space-between";
footer.style.backgroundColor = "#EFF2FA";
footer.style.marginTop = "40px";
footer.style.padding = "15px 23px";

const services = document.createElement("div");
footer.appendChild(services);
addFlex(services);
services.style.flexWrap = "wrap";
services.style.width = "250px";

const difServices = ["Contact us", "Returns", "About us", "Jobs"];

for (let i = 0; i < difServices.length; i++) {
  const serveP = document.createElement("p");
  services.appendChild(serveP);
  serveP.innerText = difServices[i];
  smallText(serveP);
  serveP.style.color = "#B44B96";
  serveP.style.width = "90px";
}

const socials = document.createElement("div");
footer.appendChild(socials);
addFlex(socials);
socials.style.gap = "10px";

const socialIcons = ["facebook", "twitter", "instagram"];

for (let i = 0; i < socialIcons.length; i++) {
  const socialImage = document.createElement("img");
  socials.appendChild(socialImage);
  socialImage.src = `images/${socialIcons[i]}.png`;
  socialImage.style.width = "25px";
}

/* media responsiveness */

function mediaResponse(x) {
  if (x.matches) {
    productContainer.style.flexDirection = "column";
    saleContainer.style.flexDirection = "column";
  }
}

var x = window.matchMedia("(max-width: 700px)");
mediaResponse(x);
x.addEventListener("change", mediaResponse);
