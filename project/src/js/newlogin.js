import fetch from 'cross-fetch'
// without account, switch to signup

const wrapperContent = document.querySelector('.login-wrapper')
const swapToSignupBtn = document.querySelector('.signup-refer')
swapToSignupBtn.addEventListener('click', () => {
    wrapperContent.innerHTML = /*html*/`

    <h2>Signup</h2>
    <form class="signup-form" >
    
        <label for="username">Username</label>
        <input type="text" class="form-input" name="username" placeholder="Enter your username / email" id="username">
        <label for="password">Password</label>
        <input type="password" class="form-input" name="password" placeholder="Enter your Password" id="password">
    
        <input type="submit" value="Signup" class="signup-btn">
    
    </form>
    
    <a href="./index.html"><button class="back">Back</button></a>
    `

    signupInit();
})


// signup system

async function signupInit() {
    let signupFormElem = document.querySelector('.signup-form')

    signupFormElem.addEventListener('submit', async (e) => {
        e.preventDefault();

        let signupFormObj = {
            username: signupFormElem.username.value,
            password: signupFormElem.password.value,
        }

        console.log(signupFormElem.username.value, signupFormElem.password.value)
        console.log("successfully submitted the form")

        const res = await fetch('/user/register', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(signupFormObj)
        })

        if (res.ok) {
            setTimeout(() => {
                window.location.replace('/user-profile.html')
            }, 2000)
            console.log("sign up successfully")

        } else {
            console.log("failed")
        }
    })
}



// login system

async function loginInit() {
    const loginFormElem = document.querySelector('.login-form')

    // let dummyRES = fetch("https://eatwat7.today/user/login")
    // let data = await dummyRES.json()
    // console.log("dummy = ", data)
    loginFormElem.addEventListener('submit', async function (e) {
        e.preventDefault();

        const username = e.target.username.value
        const password = e.target.password.value

        console.log(username)
        console.log(password)

        // let domain = "https://eatwat7.today"
        const res = await fetch('/user/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        console.log("sent login request")
        console.log("response login: ", JSON.stringify(res))
        if (res.ok) {
            console.log("login successfully")
            location.replace('/homepage.html')
        }
    })
}

loginInit();
