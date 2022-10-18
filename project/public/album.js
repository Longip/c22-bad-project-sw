// window.onload = async () => {
//     await loadAlbum()
// }

// async function loadAlbum() {
//     const res = await fetch('/albums')
//     const datas = await res.json()
//     if (res.ok) {
//         let html = ''
//         let index = 0
//         for (data of datas ) {
//             html += ``
//         index ++
//         console.log(data) 
//         }

//         const albumContainer = document.querySelector('.box-container')
//         albumContainer.innerHTML = html

//         for (index in memoContainer ) {
//             const albumDiv = albumContainer[index]
//             const deleteBtn = memoDiv.querySelector('.delete-btn')

//             deleteBtn.addEventListener('click', async (e) => {

//                 const element = e.target
//                 const data_index = element.getAttribute('data_index')
//                 const res = await fetch('/albums', {
//                     method: "DELETE",
//                     body: JSON.stringify({
//                         index: data_index
//                     }),
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 })
//                 if (res.ok) {
//                     loadAlbum()
//                 }
//             })
//         }
//     }
// }

// fetch images from db


async function loadAlbum() {
    let loadAlbumElem = document.querySelector('.
}