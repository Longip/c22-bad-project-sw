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