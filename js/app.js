$(document).ready(function () {

    // header dropdown opening and closing

    $(".profile-picture").click(function (e) {
        $(".header-profile-dropdown").toggleClass("display-none");
        $(".header-profile-dropdown").toggleClass("display-flex");

    });

    $(document).click(function (event) {
        $target = $(event.target);
        if (!$target.closest('.header-profile-picture').length &&
            $('.header-profile-dropdown').is(":visible")) {
            $('.header-profile-dropdown').toggleClass("display-none");
            $('.header-profile-dropdown').toggleClass("display-flex");
        }
    });

});

function myFunction() {
    var x = document.querySelector(".links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


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

