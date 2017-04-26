$(document).ready(function () {
	var options = {
		$menu: false,
		panelSelector: 'section',
	    directionThreshold: 100,
	    slideSpeed: 300
	};
	$('body').panelSnap(options);
    
     $("#ignite").click(function() {
         $("body").css("background-color", "#eed19d"); $("#ignite").css("color", "white"); $("#ignite").css("cursor", "default"); $("#flame").delay(2000).fadeIn(1000); $("#bottom-image").fadeIn(1000);
    });
    
});