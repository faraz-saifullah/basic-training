firstName.onblur = function errorMessage() {
    if (firstName.value.length == 0)
        errorMessageFirstName.style.display = 'block';
}

firstName.onfocus = function hide() {
    errorMessageFirstName.style.display = 'none';
}

lastName.onblur = function errorMessage() {
    if (lastName.value.length == 0)
        errorMessageLastName.style.display = 'block';
}

lastName.onfocus = function hide() {
    errorMessageLastName.style.display = 'none';
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

password.onblur = function errorMessage() {
    if (password.value.length == 0) {
        errorMessagePassword.style.display = 'block';
    }
}

password.onfocus = function hide() {
    errorMessagePassword.style.display = 'none';
}

function checkAgain() {
    if (firstName.value.length == 0 || lastName.value.length == 0 || email.value.length == 0 || company.value.length == 0 || areaCode.value.length == 0 || phone.value.length == 0 || errorInvalidEmail.style.display == 'block') {
        errorMessageFirstName.style.display = 'block';
        errorMessageLastName.style.display = 'block';
        errorMessageCompany.style.display = 'block';
        errorMessageEmail.style.display = 'block';
        errorMessageAreaCode.style.display = 'block';
        errorMessagePhone.style.display = 'block';

    } else {
        document.getElementById('form').submit();
    }
}
