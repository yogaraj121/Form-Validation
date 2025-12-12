const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")

form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    }
})
function validateInputs() {
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
    if (usernameVal === '') {
        success = false;
        setError(username, 'Username is required');
    }
    else {
        setSucces(username);
    }
    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    }
    else if (!isValidEmail(emailVal)) {
        setError(email, 'Provide a valid email address');
    }
    else {
        setSucces(email);
    }
    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required');
    }
    else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be at least 8 character.');
    }
    else {
        setSucces(password);
    }
    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, 'Please confirm your password');
    }
    else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, 'Passwords does not match');
    }
    else {
        setSucces(cpassword);
    }
    return success;

}
//element - password ,msg-pwd is reqd
function setError(element, message) {
    const inputGroup = element.parentElement;
    const erroeElement = inputGroup.querySelector('.error');

    erroeElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSucces(element) {
    const inputGroup = element.parentElement;
    const erroeElement = inputGroup.querySelector('.error');

    erroeElement.innerText = '';
    inputGroup.classList.add('Success');
    inputGroup.classList.remove('error');
}
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function SubmitEvent(){
    removeEventListener('submit', validateInputs);
}


