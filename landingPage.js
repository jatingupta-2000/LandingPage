$(document).ready(function () {

    $(".email-button").click(function (e) {
        e.preventDefault();
        $(".sign-in-buttons").hide("fast");
        $(".email-section").show("fast");
    })

    $(".email-next").click(function (e) {
        e.preventDefault();

        if (validateEmail($(".email-input")[0])) {

            $(".email-next").hide();
            $(".email-input").hide("fast");
            $(".email-submit").show("fast");
            $(".password-input").show("fast");
            $(".name-fname").show("fast");
            $(".name-lname").show();
        }

    });

    $(".email-input").keypress(function (e) {

        if (e.keyCode === 13) {
            e.preventDefault();
            $(".email-next").click();
        }
    });

    $(".email-cancel").click(function (e) {
        e.preventDefault();
        $(".email-section").hide("fast");
        $(".email.section").hide();
        $(".password-input").hide();
        $(".email-submit").hide();
        $(".email-next").show();
        $(".name-fname").hide();
        $(".name-lname").hide();
        $(".email-input").show();
        $(".email-input")[0].value = "";
        $(".email-input")[0].style.borderBottom = "0.5px solid #3498db";
        $(".sign-in-buttons").show("fast");
    });
})

