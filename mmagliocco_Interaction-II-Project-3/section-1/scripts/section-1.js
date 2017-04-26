$(document).ready(function () {
    
try {Typekit.load({async: true});}catch (e) {}   
    
$(".i-span").click(function() {
  $("body").css("background-color", "#eed19d");
  $(".i-span").css("color", "white");
  $(".i-span").css("cursor", "default");    
  $("#flame").delay(2000).fadeIn(1000);
  $("#bottom-image").fadeIn(1000);
});
    
});