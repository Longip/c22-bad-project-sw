// circular-progress bar

// let progressBar = document.querySelector(".circular-progress");
// let valueContainer = document.querySelector(".value-container");


// let progressValue = 0;
// let progressEndValue = 67;  // wait for the training model value
// let speed = 20;

// let progress = setInterval(() => {
//     progressValue++;
//     valueContainer.textContent = `${progressValue}%`;
//     progressBar.style.background = `conic-gradient(
//       #4d5bf9 ${progressValue * 3.6}deg,
//       #cadcff ${progressValue * 3.6}deg
//   )`;
//     if (progressValue == progressEndValue) {
//         clearInterval(progress);
//     }
// }, speed);

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
        leftSideBarElem.style["max-width"] = '90px';
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

// window.onload = async () => {
//     await loadAlbum()
// }

// async function loadAlbum() {
//     const res = await fetch('/album')
//     const datas = await res.json()
//     console.log(datas)
//     if (res.ok) {
//         let html = ''
//         let index = 0
//         for (data of datas) {
            // console.log(data.image_source)
    //         html += `
    //         <div class="photo-conatiner">
    //         <img class="photo" src="../uploads/${data.image_source}" alt="image" />
    //         <div class="delete-btn" data_index="${data.image_source}">
    //             <i class="fa-solid fa-trash" data_index="${data.image_source}"></i>
    //         </div>
    //         </div>`
    //         index++
    //     }

    //     const albumContainer = document.querySelector('.gallery-Container')
    //     albumContainer.innerHTML = html
    // }
    // add event listener
    // const galleryContainers = document.querySelectorAll('.photo-conatiner')
    // for (let galleryContainer of galleryContainers) {
    //     const photoDiv = galleryContainer
    //     const deleteBtn = photoDiv.querySelector('.delete-btn')

    //     deleteBtn.addEventListener('click', async (e) => {
            // Call Delete API
//             const element = e.target
//             const data_index = element.getAttribute('data_index')
//             console.log(data_index)
//             const res = await fetch('/album', {
//                 method: "DELETE",
//                 body: JSON.stringify({
//                     index: data_index
//                 }),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             if (res.ok) {
//                 loadAlbum()
//             }
//         })
//     }
//     console.log("Albums loaded successfully")
// }

// const memowallFormElement = document.querySelector("#user-album-form")

// memowallFormElement.addEventListener("submit", async (e) => {
//     e.preventDefault()
//     const form = e.target
//     const formData = new FormData()
//     for (let i = 0; i < form.image.files.length; i++) {
//         let file = form.image.files[i]
//         formData.append("image_" + i, file)
//     }
//     const res = await fetch('/album/upload', {
//         method: "POST",
//         body: formData
//     })


//     if (res.status === 200) {
//         loadAlbum()
//     }
// })