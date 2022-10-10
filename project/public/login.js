// login

async function login() {
    const loginForm = document.querySelector(".login-form")

    loginForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.password.value

        console.log(username)
        console.log(password)

        // const res = await fetch('/login', {
        //     method: 'POST',
        //     headers: {
        //         contentType: 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username,
        //         password
        //     })

        // })


        // if (res.ok) {
        // }

    })
}

login()