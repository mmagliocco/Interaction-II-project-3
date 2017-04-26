$(document).ready(function () {

$("#focus").click(function() {
  $("#drag-destination-1").fadeIn(1000);
  $("#dot-draggable").fadeIn(1000);
  $("#focus").css("cursor", "default");
});

$("#dot-draggable").draggable();
$("#dot-draggable-2").draggable();


$("#drag-destination-1").droppable({
  drop: function(event, ui) {
    $(this).css("background-color", "darkgreen");
    $("#drag-destination-3").fadeIn(1000);
  $("#drag-destination-2").css("margin-top", "15%");
  }
});

$("#drag-destination-3").droppable({
  drop: function(event, ui) {
    $(this).css("background-color", "darkgreen");
   $("#drag-destination-4").fadeIn(1000);
  }
});

$("#drag-destination-4").droppable({
  drop: function(event, ui) {
    $(this).css("background-color", "darkgreen");
    $("#drag-destination-2").fadeIn(1000);
  }
});

$("#drag-destination-2").droppable({
  drop: function(event, ui) {
    $(this).css("background-color", "darkgreen");
    $("#focus").css("color", "black");
    $("#focus").css("text-shadow", "0px 0px 0px transparent");
    $("#green-bar").fadeIn(1000);
      
    
  }
});


    
});