// without account, switch to signup

const wrapperContent = document.querySelector('.login-wrapper')
const swapToSignupBtn = document.querySelector('.signup-refer')

swapToSignupBtn.addEventListener('click', () => {
    wrapperContent.innerHTML = `

    <h2>Signup</h2>
    <form class="signup-form" >
    
        <label for="username">Username</label>
        <input type="text" class="form-input" placeholder="Enter your username / email" id="username">
        <label for="password">Password</label>
        <input type="password" class="form-input" placeholder="Enter your Password" id="password">
    
        <input type="submit" value="Signup" class="signup-btn">
    
    </form>
    
    <a href="./newlogin.html"><button class="back">Back</button></a>
    `
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

        console.log(signupFormObj)

        const res = await fetch('/signup', {
            method: 'POST',
            headers: {
                contentType: 'application/json'
            },
            body: JSON.stringify(signupFormObj)
        })

        if (res.ok) {
            setTimeout(() => {
                window.location.replace('/index.html')
            }, 2000)

        } else {
            console.log("failed")
        }
    })
}

signupInit();


// login system

async function loginInit() {
    const loginFormElem = document.querySelector('.login-form')

    loginFormElem.addEventListener('submit', async function (e) {
        e.preventDefault();

        const username = e.target.username.value
        const password = e.target.password.value

        console.log(username)
        console.log(password)

        const res = await fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        if (res.ok) {
            location.replace('/index.html')
        }
    })
}

loginInit();
