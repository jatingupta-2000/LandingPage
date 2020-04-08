document.querySelector('.email-button').addEventListener('click', emailState);
document.querySelector('.email-next').addEventListener('click', existingUser);
document.querySelector('.email-cancel').addEventListener('click', landingState);


function emailState(e) {

    document.querySelector('.sign-in-buttons').style.display = "none";
    document.querySelector('.email-section').style.display = "block";
    e.preventDefault();
};

function landingState(e) {
    document.querySelector('.sign-in-buttons').style.display = "flex";
    document.querySelector('.email-section').style.display = "none";
    document.querySelector('.password-input').style.display = "none";
    document.querySelector('.email-submit').style.display = "none";
    document.querySelector('.email-next').style.display = "block";
    document.querySelector('.email-input').style.borderBottom = "0.5px solid #3498db";
    document.querySelector('.email-input').value = "";
    e.preventDefault();
};

function existingUser(e) {
    console.log(document.querySelector('.email-input').value)
    if (validateEmail(document.querySelector('.email-input'))) {
        console.log('hi')
        document.querySelector('.email-next').style.display = "none";
        document.querySelector('.email-submit').style.display = "block";
        document.querySelector('.password-input').style.display = "block";
    }
    e.preventDefault();
}


function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        document.querySelector('.email-input').style.borderBottom = "0.5px solid #1abc9c";
        return true;
    } else if (inputText.value === "") {
        document.querySelector('.email-input').style.borderBottom = "0.5px solid #e74c3c";
    }
    else {
        document.querySelector('.email-input').style.borderBottom = "0.5px solid #e74c3c";
        document.querySelector('.email-input').focus();
        return false;
    }
}