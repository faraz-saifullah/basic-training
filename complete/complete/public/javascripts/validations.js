login.onclick = () => {
    loginForm.style.display = `block`;
    signupForm.style.display = `none`;
}

signup.onclick = () => {
    signupForm.style.display = `block`;
    loginForm.style.display = `none`;
}

name.onblur = () => {
    if (name.value.length == 0)
        errorMessageName.style.display = `block`;
}

name.onfocus = () => {
    errorMessageName.style.display = `none`;
}

usernameSignup.onblur = () => {
    if (usernameSignup.value.length == 0)
        errorMessageUsernameSignup.style.display = `block`;
}

usernameSignup.onfocus = () => {
    errorMessageUsernameSignup.style.display = `none`;
}

usernameLogin.onblur = () => {
    if (usernameLogin.value.length == 0)
        errorMessageUsernameLogin.style.display = `block`;
}

usernameLogin.onfocus = () => {
    errorMessageUsernameLogin.style.display = `none`;
}


email.onblur = () => {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.length == 0) {
        errorMessageEmail.style.display = `block`;
    } else if (!pattern.test(email.value)) {
        errorInvalidEmail.style.display = `block`;
    }
}

email.onfocus = () => {
    errorMessageEmail.style.display = `none`;
    errorInvalidEmail.style.display = `none`;
}

phone.onblur = () => {
    if (phone.value.length == 0 || !phone.value.match([0 - 90 - 90 - 90 - 90 - 90 - 90 - 90 - 90 - 90 - 9])) {
        errorMessagePhone.style.display = `block`;
    }
}

phone.onfocus = () => {
    errorMessagePhone.style.display = `none`;
}

passwordSignup.onblur = () => {
    if (passwordSignup.value.length == 0) {
        errorMessagePasswordSignup.style.display = `block`;
    }
}

passwordSignup.onfocus = () => {
    errorMessagePasswordSignup.style.display = `none`;
}
passwordLogin.onblur = () => {
    if (passwordLogin.value.length == 0) {
        errorMessagePasswordLogin.style.display = `block`;
    }
}

password.onfocus = () => {
    errorMessagePasswordLogin.style.display = `none`;
}
