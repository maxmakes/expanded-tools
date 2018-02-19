$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.1,
			marginLeft: '0.1in',
			borderWidth: '10px'
		}, 1000 );
	});

	$('#button-4').hover(function(){
		$("#button-6").toggleClass("change-yellow");
		$("#button-5").toggle("slow");

	});

	
});


