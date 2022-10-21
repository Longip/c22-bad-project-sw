// circular-progress bar

let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");


let progressValue = 0;
let progressEndValue = 67;  // wait for the training model value
let speed = 20;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
    if (progressValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);

// profile bar 

let button = document.querySelector(".toggle-button");
let leftSideBarElem = document.querySelector(".left-sidebar");
let newButton = document.querySelector(".new-toggle-button");
let barFunctionElem = document.querySelector(".bar-function");
let textElem = document.querySelector(".text");
let text1Elem = document.querySelector(".text1");
let text2Elem = document.querySelector(".text2");
let text3Elem = document.querySelector(".text3");
let text4Elem = document.querySelector(".text4");
let imageElem = document.querySelector(".image-src > img");

function leftSideBar() {
    button = document.querySelector(".toggle-button");
    button.addEventListener("click", (e) => {
        leftSideBarElem.style["max-width"] = '70px';
        imageElem.style["width"] = '75px'
        button.className = "new-toggle-button";
        textElem.style.display = "none"
        text1Elem.style.display = "none"
        text2Elem.style.display = "none"
        text3Elem.style.display = "none"
        text4Elem.style.display = "none"

        leftSideBar2()
    })
}

function leftSideBar2() {
    newButton = document.querySelector(".new-toggle-button");
    document.querySelector(".new-toggle-button").addEventListener("click", () => {
        leftSideBarElem.style["max-width"] = '230px';
        imageElem.style["width"] = '150px'
        newButton.className = "toggle-button";
        textElem.style.display = "block"
        text1Elem.style.display = "block"
        text2Elem.style.display = "block"
        text3Elem.style.display = "block"
        text4Elem.style.display = "block"
        leftSideBar()
    })
}
leftSideBar()



// logout

async function logoutInit() {
    let logoutElem = document.querySelector('.logout-btn');

    logoutElem.addEventListener('click', async function (event) {
        event.preventDefault();
        const res = await fetch('/user/logout', {
            method: 'POST',
        })
        console.log("test logout")
        if (res.ok) {
            // alert('Logout successfully')
            location.replace('/index.html')
        }
    })
}

logoutInit();

