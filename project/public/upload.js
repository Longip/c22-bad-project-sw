const memowallFormElement = document.querySelector("#user-album-form")

memowallFormElement.addEventListener("submit", async (e) => {
    e.preventDefault()
    const form = e.target
    console.log(form.image.files.length)
    const formData = new FormData()
    for (let i = 0; i < form.image.files.length; i++) {
        let file =form.image.files[i]
        formData.append("image_" + i, file)
    }
    console.log(formData)
    const res = await fetch('/album/upload', {
        method: "POST",
        body: formData
    })

    if (res.status === 200 ) {
        // loadAlbum()
    }
})