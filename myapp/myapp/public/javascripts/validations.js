login.onclick = function displayLoginForm() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
}

signup.onclick = function displaySignupForm() {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
}

name.onblur = function errorMessage() {
    if (name.value.length == 0)
        errorMessageName.style.display = 'block';
}

name.onfocus = function hide() {
    errorMessageName.style.display = 'none';
}

usernameSignup.onblur = function errorMessage() {
    if (usernameSignup.value.length == 0)
        errorMessageUsernameSignup.style.display = 'block';
}

usernameSignup.onfocus = function hide() {
    errorMessageUsernameSignup.style.display = 'none';
}

usernameLogin.onblur = function errorMessage() {
    if (usernameLogin.value.length == 0)
        errorMessageUsernameLogin.style.display = 'block';
}

usernameLogin.onfocus = function hide() {
    errorMessageUsernameLogin.style.display = 'none';
}


email.onblur = function errorMessage() {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.length == 0) {
        errorMessageEmail.style.display = 'block';
    } else if (!pattern.test(email.value)) {
        errorInvalidEmail.style.display = 'block';
    }
}

email.onfocus = function hide() {
    errorMessageEmail.style.display = 'none';
    errorInvalidEmail.style.display = 'none';
}

phone.onblur = function errorMessage() {
    if (phone.value.length == 0 || !phone.value.match([0 - 90 - 90 - 90 - 90 - 90 - 90 - 90 - 90 - 90 - 9])) {
        errorMessagePhone.style.display = 'block';
    }
}

phone.onfocus = function hide() {
    errorMessagePhone.style.display = 'none';
}

passwordSignup.onblur = function errorMessage() {
    if (passwordSignup.value.length == 0) {
        errorMessagePasswordSignup.style.display = 'block';
    }
}

passwordSignup.onfocus = function hide() {
    errorMessagePasswordSignup.style.display = 'none';
}
passwordLogin.onblur = function errorMessage() {
    if (passwordLogin.value.length == 0) {
        errorMessagePasswordLogin.style.display = 'block';
    }
}

password.onfocus = function hide() {
    errorMessagePasswordLogin.style.display = 'none';
}
