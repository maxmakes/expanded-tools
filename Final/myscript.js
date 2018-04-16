$(document).ready(function(){
	//hiding poems
	$(" poem").hide();
	
	// $(".title").hide();

	
	//showing poems when corresponding Title is clicked
	//$(".chapter").click(function(){
		//$(this).find(" poem").show();
		//$(" poem").show();
		// show "screen" div
		//$(".screen").show();});

	$(".title").click(function(){
		$("#tool poem").show();
		// show "screen" div
		$(".screen").show();
	});



	//how do we get out of poem mode? clicking "screen" div hides
	// poem and itself
	$(".screen").click(function(){
		//hide poem
		$(".poem").hide();
		//hide screen
		$(this).hide();
	});


});