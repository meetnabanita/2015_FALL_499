//Instantiate Variables


//Create Functions
function calcRatio(){
	//+ converts ratio values from string to number
	// var r1 = +$(".ratio-i1").val();
	// var r2 = +$(".ratio-i2").val();
	// var r3 = +$(".ratio-i3").val();
	// var r4 = +$(".ratio-i4").val();
	var notid;
	var ratios =[
			+$(".ratio-i1").val(),
			+$(".ratio-i2").val(),
			+$(".ratio-i3").val(),
			+$(".ratio-i4").val()
			]
	console.log(ratios);
	

	for(var i in ratios){
		console.log(!!ratios[i]);
		if(notid!==undefined) 
			console.log("TOO MANY COOKS");
		if(!!ratios[i]) notid = i;
	}
	console.log(notid);

	$(".ratio-i4").val((ratios[1]*ratios[2]/ratios[0]).toFixed(2));
}

//Wait for the document ready
$(function(){
	$(".ratio-submit").on("click",function() {
		// body...
		console.log("HONK")
		calcRatio();
	});

	$(".ratio-input").on("keyup",function(){
		if($(".ratio-i1").val() &&
			$(".ratio-i2").val() &&
			$(".ratio-i3").val()
			)
			calcRatio();
	});

	$("dt").on("click", function(){
		// $(this).next().slideToggle();
		if($(this).hasClass("active")){
			$(this).removeClass("active")
				.next().slideUp();
		}
		else{
			$(this).siblings(".active").removeClass("active")
			.siblings("dd").slideUp();
			$(this).addClass("active").next().slideDown();
		}
	})

});