



function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        document.querySelector('.email-input').style.borderBottom = "0.8px solid #1abc9c";
        return true;
    } else if (inputText.value === "") {
        document.querySelector('.email-input').style.borderBottom = "0.8px solid #e74c3c";
    }
    else {
        document.querySelector('.email-input').style.borderBottom = "0.8px solid #e74c3c";
        document.querySelector('.email-input').focus();
        return false;
    }
}