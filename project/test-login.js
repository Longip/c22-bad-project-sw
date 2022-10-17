// swapping between singup & login

const signupClicked = document.querySelector('.signup-box');
const loginClicked = document.querySelector('.login-box');
const loginWrapperContent = document.querySelector('.login-wrapper');
const backButton = document.querySelector('.back');
const signupFormContent = document.querySelector('.signup-form');
const loginForm = document.querySelector('.login-form')
const loginButton = document.querySelector('.login-btn');
const signupButton = document.querySelector('.signup-btn');

loginClicked.addEventListener('click', () => {
    signupClicked.style.display = 'none';
    loginClicked.style.display = 'none';

    loginWrapperContent.innerHTML = /*html*/`

    <h2>Login</h2>
    <form class="login-form">

        <label for="username">Username</label>
        <input type="text" class="form-input" placeholder="Your username / email" id="username">
        <label for="password">Password</label>
        <input type="password" class="form-input" placeholder="Your Password" id="password">

        <input type="submit" value="Login" class="login-btn">

    </form>

    <a href="./login.html"><button class="back">Back</button></a>
    `
    setLoginListener()
});

signupClicked.addEventListener('click', () => {
    signupClicked.style.display = 'none';
    loginClicked.style.display = 'none';

    loginWrapperContent.innerHTML = /*html*/`

    <h2>Signup</h2>
    <form class="signup-form" >

        <label for="username">Username</label>
        <input type="text" class="form-input" placeholder="Enter your username / email" id="username">
        <label for="password">Password</label>
        <input type="password" class="form-input" placeholder="Enter your Password" id="password">

        <input type="submit" value="Signup" class="signup-btn">

    </form>
    <div class="login-suggest">or signup using</div>


    <a href="/connect/google" class="google-logo"><img src="google-icon.jpg" alt="GOOGLE"></a>
    <a href="./login.html"><button class="back">Back</button></a>
    `
});


// login 

async function setLoginListener() {
    const loginForm = document.querySelector('.login-form')

    loginForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        signupClicked.style.display = 'none';
        loginClicked.style.display = 'none';
        const username = e.target.username.value
        const password = e.target.password.value

        console.log(username)
        console.log(password)

    })
}

// signup

function initSignup() {
    if (signupFormContent) {
        signupFormContent.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('signup form submitted')

            const res = await fetch('/signup', {
                method: 'POST',
                headers: {
                    contentType: 'application/json'
                },
                body: JSON.stringify({
                    username: signupFormContent.username.value,
                    //email
                    password: signupFormContent.password.value,
                })
            })

            if (res.ok) {
                console.log("success")
            } else {
                console.log("failed")
            }
        })
    }

}
