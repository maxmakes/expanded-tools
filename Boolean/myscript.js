$(document).ready(function(){
	//hiding captions
	$(".caption").hide();
	//hiding titles
	//$(".titleright").hide();
	//$(".titleleft").hide();
	//hiding pictures
	$(".picture").hide();

	// //var clickcount = 0;
	// var robotcount = 0;
	// var animalcount = 0;
	// var housecount = 0;
	// var humancount = 0;
	// var rightI = 0;
	// var leftI = 0;
	
	//showing captions when corresponding picture is clicked
	//$(".chapter").click(function(){
		//$(this).find(".caption").show();
		//$("#caption").show();
		// show "screen" div
		//$(".screen").show();});

	$(".tools").click(function(){
		$("#toolscaption").show();
		// show "screen" div
		$(".screen").show();
	});
		
	$(".parts").click(function(){
		$("#partscaption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".base").click(function(){
		$("#basecaption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".mache").click(function(){
		$("#machecaption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".fringe").click(function(){
		$("#fringecaption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".flap").click(function(){
		$("#flapcaption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".hook").click(function(){
		$("#hookcaption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".whack").click(function(){
		$("#whackcaption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".doanddont").click(function(){
		$("#doanddontcaption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".variation").click(function(){
		$("#variationscaption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".shapes").click(function(){
		$("#shapescaption").show();
		// show "screen" div
		$(".screen").show();
	});


	//how do we get out of caption mode? clicking "screen" div hides
	// caption and itself
	$(".screen").click(function(){
		//hide caption
		$(".caption").hide();
		//hide screen
		$(this).hide();
	});


	// $(".roboticon").click(function(){
	// 	if(robotcount == 1){
	// 		if($(".robottitleleft").is(":visible")){
	// 			leftI=0;
	// 		} else { rightI=0; }
	// 		$(".robot").hide();
	// 		$(".robottitleleft").hide();
	// 		$(".robottitleright").hide();
	// 		robotcount = 0;
	// 	} else if(leftI == 0){
	// 		$(".robottitleleft").show();
	// 		$(".robot").show();
	// 		robotcount = 1;
	// 		leftI = 1;
	// 	}
	// 	else if(rightI == 0){
	// 		$(".robottitleright").show();
	// 		$(".robot").show();
	// 		robotcount = 1;
	// 		rightI = 1;
	// 	}
	// });
	// $(".animalicon").click(function(){
	// 	if(animalcount == 1){
	// 		if($(".animaltitleleft").is(":visible")){
	// 			leftI=0;
	// 		} else { rightI=0; }
	// 		$(".animal").hide();
	// 		$(".animaltitleleft").hide();
	// 		$(".animaltitleright").hide();
	// 		animalcount = 0;
	// 	} else if(leftI == 0){
	// 		$(".animaltitleleft").show();
	// 		$(".animal").show();
	// 		animalcount = 1;
	// 		leftI = 1;
	// 	}
	// 	else if(rightI == 0){
	// 		$(".animaltitleright").show();
	// 		$(".animal").show();
	// 		animalcount = 1;
	// 		rightI = 1;
	// 	}
	// });
	// $(".houseicon").click(function(){
	// 	if(housecount == 1){
	// 		if($(".housetitleleft").is(":visible")){
	// 			leftI=0;
	// 		} else { rightI=0; }
	// 		$(".house").hide();
	// 		$(".housetitleleft").hide();
	// 		$(".housetitleright").hide();
	// 		housecount = 0;
	// 	} else if(leftI == 0){
	// 		$(".housetitleleft").show();
	// 		$(".house").show();
	// 		housecount = 1;
	// 		leftI = 1;
	// 	}
	// 	else if(rightI == 0){
	// 		$(".housetitleright").show();
	// 		$(".house").show();
	// 		housecount = 1;
	// 		rightI = 1;
	// 	}
	// });
	// $(".humanicon").click(function(){
	// 	if(humancount == 1){
	// 		if($(".humantitleleft").is(":visible")){
	// 			leftI=0;
	// 		} else { rightI=0; }
	// 		$(".human").hide();
	// 		$(".humantitleleft").hide();
	// 		$(".humantitleright").hide();
	// 		humancount = 0;
	// 	} else if(leftI == 0){
	// 		$(".humantitleleft").show();
	// 		$(".human").show();
	// 		humancount = 1;
	// 		leftI = 1;
	// 	}
	// 	else if(rightI == 0){
	// 		$(".humantitleright").show();
	// 		$(".human").show();
	// 		humancount = 1;
	// 		rightI = 1;
	// 	}
	// });



});