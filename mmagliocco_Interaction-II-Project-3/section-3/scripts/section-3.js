$(document).ready(function () {
    $("#breathe").click(function () {
        $("#breathe").fadeOut(500);
        $("#circle").delay(500).fadeIn(500);
        $("#begin").delay(500).fadeIn(500);
    });
    $("#begin").click(function () {
        $("#begin").fadeOut(500);
        $("#in").fadeIn();
        $("#in").fadeOut(1000);
        $("#two").delay(1000).fadeIn();
        $("#two").delay(500).fadeOut();
        $("#three").delay(2000).fadeIn();
        $("#three").delay(500).fadeOut();
        $("#four").delay(3000).fadeIn();
        $("#four").delay(250).fadeOut();
        $("#circle").animate({
                width: "150px"
                , height: "150px"
            , }, 4000)
            , $("#hold").delay(4250).fadeIn();
        $("#hold").delay(3500).fadeOut(500);
        $("#out").delay(9000).fadeIn();
        $("#circle").delay(5300).animate({
            width: "295px"
            , height: "295px"
        , }, 9000);
        $("#out").delay(500).fadeOut(500);
        $("#two-out").delay(10500).fadeIn();
        $("#two-out").delay(500).fadeOut();
        $("#three-out").delay(11500).fadeIn();
        $("#three-out").delay(500).fadeOut();
        $("#four-out").delay(12500).fadeIn();
        $("#four-out").delay(500).fadeOut();
        $("#five-out").delay(13500).fadeIn();
        $("#five-out").delay(500).fadeOut();
        $("#six-out").delay(14500).fadeIn();
        $("#six-out").delay(500).fadeOut();
        $("#seven-out").delay(15500).fadeIn();
        $("#seven-out").delay(500).fadeOut();
        $("#eight-out").delay(16500).fadeIn();
        $("#eight-out").delay(1000).fadeOut();
        $("#again").delay(18500).fadeIn();
    });
    
        $("#again").click(function () {
        $("#again").fadeOut(500);
        $("#in").fadeIn();
        $("#in").fadeOut(1000);
        $("#two").delay(1000).fadeIn();
        $("#two").delay(500).fadeOut();
        $("#three").delay(2000).fadeIn();
        $("#three").delay(500).fadeOut();
        $("#four").delay(3000).fadeIn();
        $("#four").delay(250).fadeOut();
        $("#circle").animate({
                width: "150px"
                , height: "150px"
            , }, 4000)
            , $("#hold").delay(4250).fadeIn();
        $("#hold").delay(3500).fadeOut(500);
        $("#out").delay(9000).fadeIn();
        $("#circle").delay(5300).animate({
            width: "295px"
            , height: "295px"
        , }, 9000);
        $("#out").delay(500).fadeOut(500);
        $("#two-out").delay(10500).fadeIn();
        $("#two-out").delay(500).fadeOut();
        $("#three-out").delay(11500).fadeIn();
        $("#three-out").delay(500).fadeOut();
        $("#four-out").delay(12500).fadeIn();
        $("#four-out").delay(500).fadeOut();
        $("#five-out").delay(13500).fadeIn();
        $("#five-out").delay(500).fadeOut();
        $("#six-out").delay(14500).fadeIn();
        $("#six-out").delay(500).fadeOut();
        $("#seven-out").delay(15500).fadeIn();
        $("#seven-out").delay(500).fadeOut();
        $("#eight-out").delay(16500).fadeIn();
        $("#eight-out").delay(1000).fadeOut();
        $("#again").delay(18500).fadeIn();
    });
});