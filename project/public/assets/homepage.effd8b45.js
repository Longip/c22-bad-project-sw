import "./modulepreload-polyfill.b7f2da20.js";
import "./glightbox.6c869fc1.js";
<<<<<<<< HEAD:project/public/assets/homepage.d6290dbc.js
import { r as registerPlugin, _ as __vitePreload } from "./index.bd991f68.js";
var homepage = "";
========
/* empty css                       */import { r as registerPlugin, _ as __vitePreload } from "./index.bd991f68.js";
>>>>>>>> c3200f657ef889d5a486f155a25e0d349f0a1687:project/public/assets/homepage.effd8b45.js
const Geolocation = registerPlugin("Geolocation", {
  web: () => __vitePreload(() => import("./web.b8590166.js"), true ? ["assets/web.b8590166.js","assets/index.bd991f68.js"] : void 0).then((m) => new m.GeolocationWeb())
});
let cardContainer = document.querySelector(".row1");
let mapContainer = document.querySelector("#map");
let displayCardElem = document.querySelector(".switchMap");
mapContainer.style.display = "none";
window.addEventListener("load", async () => {
  console.log("page is fully loaded");
  try {
    const coordinates = await Geolocation.getCurrentPosition();
    const latitude = coordinates.coords.latitude;
    const longitude = coordinates.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    const res = await fetch("/user/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        latitude,
        longitude
      })
    });
    console.log("CP1");
    if (res.ok) {
      console.log("post location successfully");
    }
  } catch (error) {
    console.log("Error: ", "please enable the location feature");
  }
});
let button = document.querySelector(".toggle-button");
let leftSideBarElem = document.querySelector(".left-sidebar");
let newButton = document.querySelector(".new-toggle-button");
document.querySelector(".bar-function");
let textElem = document.querySelector(".text");
let text1Elem = document.querySelector(".text1");
let text2Elem = document.querySelector(".text2");
let text3Elem = document.querySelector(".text3");
let text4Elem = document.querySelector(".text4");
let imageElem = document.querySelector(".image-src > img");
function leftSideBar() {
  button = document.querySelector(".toggle-button");
  button.addEventListener("click", (e) => {
    leftSideBarElem.style["max-width"] = "90px";
    imageElem.style["width"] = "75px";
    button.className = "new-toggle-button";
    textElem.style.display = "none";
    text1Elem.style.display = "none";
    text2Elem.style.display = "none";
    text3Elem.style.display = "none";
    text4Elem.style.display = "none";
    leftSideBar2();
  });
}
function leftSideBar2() {
  newButton = document.querySelector(".new-toggle-button");
  document.querySelector(".new-toggle-button").addEventListener("click", () => {
    leftSideBarElem.style["max-width"] = "230px";
    imageElem.style["width"] = "150px";
    newButton.className = "toggle-button";
    textElem.style.display = "block";
    text1Elem.style.display = "block";
    text2Elem.style.display = "block";
    text3Elem.style.display = "block";
    text4Elem.style.display = "block";
    leftSideBar();
  });
}
leftSideBar();
async function logoutInit() {
  let logoutElem = document.querySelector(".logout-btn");
  logoutElem.addEventListener("click", async function(event) {
    event.preventDefault();
    const res = await fetch("/user/logout", {
      method: "POST"
    });
    console.log("test logout");
    if (res.ok) {
      location.replace("/index.html");
    }
  });
}
logoutInit();
async function displayCard() {
  let res = await fetch("/restaurants/category");
  let cardDatas = (await res.json()).result;
  let html = "";
  for (let cardData of cardDatas) {
    let priceRange;
    if (cardData.price_range_id == 1) {
      priceRange = "below $50";
    } else if (cardData.price_range_id == 2) {
      priceRange = "$51-100";
    } else if (cardData.price_range_id == 3) {
      priceRange = "$101-200";
    } else if (cardData.price_range_id == 4) {
      priceRange = "$201-400";
    } else if (cardData.price_range_id == 5) {
      priceRange = "$401-800";
    } else if (cardData.price_range_id == 6) {
      priceRange = "$801 above";
    }
    html += `
        <div class="column">
            <div class="card">
                <div class="restaurant-image-area">
                    <div class="restaurant-image"><img class="portrait-crop" alt="Qries" src="${cardData.shop_photo}"></div>
                </div>
                <div class="restaurant-info">
                    <div class="rest-name">Name: ${cardData.name}</div>
                    <div class="rest-address">Address: ${cardData.address}</div>
                    <div class="rest-phone">Phone: ${cardData.phone}</div>
                    <div class="rest-price">Price: ${priceRange}</div>
                </div>
            </div>
        </div>
            `;
  }
  const container = document.querySelector(".row1");
  container.innerHTML = html;
}
displayCard();
async function initMap() {
  const tourStops = [];
  let res = await fetch("/restaurants/category");
  let cardDatas = (await res.json()).result;
  for (let cardData of cardDatas) {
    let tempData = [];
    tempData.push({ lat: cardData["coordinates"]["x"], lng: cardData["coordinates"]["y"] });
    tempData.push(cardData["name"]);
    tempData.push(cardData["shop_photo"]);
    tempData.push(cardData["address"]);
    tourStops.push(tempData);
  }
  console.log(tourStops);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: tourStops[0][0]
  });
  const infoWindow = new google.maps.InfoWindow();
  tourStops.forEach(([position, name, photo, address], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `
        <img class="portrait-crop" alt="Qries" src="${photo}">
        <div class="mapInfoName">${i + 1}. ${name}</div>
        <div class="mapInfoAddress"> ${address}</div>
        `,
      optimized: false
    });
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
window.initMap = initMap;
displayCardElem.addEventListener("click", function() {
  if (mapContainer.style.display === "block") {
    mapContainer.style.display = "none";
    cardContainer.style.display = "block";
  } else {
    mapContainer.style.display = "block";
    cardContainer.style.display = "none";
  }
});
