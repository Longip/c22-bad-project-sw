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

function leftSideBar() {
    button = document.querySelector(".toggle-button");
    button.addEventListener("click", (e) => {
        leftSideBarElem.style["max-width"] = '100px';
        button.className = "new-toggle-button";
        leftSideBar2()
    })
}

function leftSideBar2() {
    newButton = document.querySelector(".new-toggle-button");
    document.querySelector(".new-toggle-button").addEventListener("click", () => {
        leftSideBarElem.style["max-width"] = '150px';
        newButton.className = "toggle-button";
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

