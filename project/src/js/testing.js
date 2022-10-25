let closeBtnElem = document.querySelector(".close-btn");
let menuBtnElem = document.querySelector(".menu-btn");
let leftBarElem = document.querySelector(".left-sidebar");

menuBtnElem.addEventListener("click", () => {
    leftBarElem.style.display = "block";
})

// closeBtnElem.addEventListener("click", () => {
//     leftBarElem.style.display = "none";
// })