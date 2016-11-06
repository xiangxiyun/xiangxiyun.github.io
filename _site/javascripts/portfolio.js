$(document).ready(function(){

	var width = $(document.body).width();

	if( width >= 1024){
		$(".block").css("width", ($(document.body).width()-300)/4);
		$("#pfl-content").css("width", $(".block").width()*4+10);
		$("#pfl-content").css("height", $(".block").height()+150);
	}
	else if ( width >= 600){
		$(".block").css("width", ($(document.body).width()-5)/4);
		$("#pfl-content").css("width", $(".block").width()*4+10);
		$("#pfl-content").css("height", $(".block").height()+120);
	}


	window.onresize=function(){
		var width = $(document.body).width();

		if( width >= 1024){
			$(".block").css("width", ($(document.body).width()-300)/4);
			$("#pfl-content").css("width", $(".block").width()*4+10);
			$("#pfl-content").css("height", $(".block").height()+150);
		}
		else if ( width >= 600){
			$(".block").css("width", ($(document.body).width()-10)/4);
			$("#pfl-content").css("width", $(document.body).width());
			$("#pfl-content").css("height", $(".block").height()+120);
		}
		else{
			$(".block").css("width", $(document.body).width());
		}
	};

	$(".block").mouseenter(function() {
		$(this).children(".pfl-shadow").stop().fadeTo(120, 0); 
		$($(this).find(".circle")).stop().transition({scale: 1.10},250, "easeOutSine");
		
	}).mouseleave(function() {
		$(this).children(".pfl-shadow").stop().fadeTo(120, 0.65);
		$($(this).find(".circle")).stop().transition({scale: 1.0},150, "easeOutSine");

	});

});