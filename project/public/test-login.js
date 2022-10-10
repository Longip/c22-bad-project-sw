// swap

const signupClicked = document.querySelector('.signup-box');
const loginClicked = document.querySelector('.login-box');
const loginWrapperContent = document.querySelector('.login-wrapper');
const backButton = document.querySelector('.back');

loginClicked.addEventListener('click', () => {
    signupClicked.style.display = 'none';
    loginClicked.style.display = 'none';

    loginWrapperContent.innerHTML = `
    
    <h2>Login</h2>
    <form class="login-form" action="#" method="post">

        <label for="username">Username</label>
        <input type="text" class="form-input" placeholder="Your username / email" id="username">
        <label for="password">Password</label>
        <input type="password" class="form-input" placeholder="Your Password" id="password">

        <input type="submit" value="Login" class="submit-btn">

    </form>

    <a href="./test-login.html"><button class="back">Back</button></a>
    `
});

signupClicked.addEventListener('click', () => {
    signupClicked.style.display = 'none';
    loginClicked.style.display = 'none';

    loginWrapperContent.innerHTML = `
    
    <h2>Signup</h2>
    <form class="signup-form" action="#" method="post">

        <label for="username">Username</label>
        <input type="text" class="form-input" placeholder="Enter your username / email" id="username">
        <label for="password">Password</label>
        <input type="password" class="form-input" placeholder="Enter your Password" id="password">

        <input type="submit" value="Signup" class="submit-btn">

    </form>
    <div class="login-suggest">or signup using</div>


    <a href="/connect/google" class="google-logo"><img src="google-icon.jpg" alt="GOOGLE"></a>
    <a href="./test-login.html"><button class="back">Back</button></a>
    `
});



// backButton.addEventListener('click', () => {

//     loginWrapperContent.innerHTML = `
//     <div class="signup-box">
//     <div class="signup"><i class="bi bi-person-plus-fill"></i></div>
//     <div class="signup-text">Signup</div>
// </div>
// <div class="login-box">
//     <div class="login"><i class="bi bi-person-check-fill"></i></div>
//     <div class="login-text">Login</div>
// </div>
//     `
// });
