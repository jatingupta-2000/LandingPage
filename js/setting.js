$(document).ready(function () {

    $(".basicinfo").click(function () {

        $(".disappear1").fadeIn("fast");
        $(".disappear2").fadeOut("fast");
        $(".disappear3").fadeOut("fast");
    });
    $(".aboutyou").click(function () {
        $(".disappear2").fadeIn("fast");
        $(".disappear1").fadeOut("fast");
        $(".disappear3").fadeOut("fast");
    });
    $(".socials").click(function () {
        $(".disappear3").fadeIn("fast");
        $(".disappear2").fadeOut("fast");
        $(".disappear1").fadeOut("fast");
    });
})