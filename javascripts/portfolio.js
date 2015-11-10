$(document).ready(function(){

	var width = $(document.body).width();

	if( width > 1280){
			$(".block").css("height", $(document.body).height());
			$(".block").css("width", "350px");
			$("#pfl-content").css("width", $(".block").width()*4+50);
	}
	else if( width > 600){
			$(".block").css("height", $(document.body).height());
			$(".block").css("width", "260px");
			$("#pfl-content").css("width", $(".block").width()*4+50);
	}
	else{
			$(".block").css("height", $(document.body).height()/4);
			$(".block").css("width", $(document.body).width());
			$("#pfl-content").css("width", $(document.body).width());
	}
	
	window.onresize=function(){
		var width = $(document.body).width();
		if( width > 1280){
			$(".block").css("height", $(document.body).height());
			$(".block").css("width", "350px");
			$("#pfl-content").css("width", $(".block").width()*4+50);
		}
		else if( width > 600){
			$(".block").css("height", $(document.body).height());
			$(".block").css("width", "260px");
			$("#pfl-content").css("width", $(".block").width()*4+50);
		}
		else{
			$(".block").css("height", $(document.body).height()/4);
			$(".block").css("width", $(document.body).width());
			$("#pfl-content").css("width", $(document.body).width());
		}
	};

	$(".block").mouseenter(function() {
		$(this).children(".pfl-element").stop().fadeTo(120, 0); 
		$($(this).find(".circle")).stop().transition({scale: 1.10},250, "easeOutSine");
		
	 }).mouseleave(function() {
	 	$(this).children(".pfl-element").stop().fadeTo(120, 0.65);
		$($(this).find(".circle")).stop().transition({scale: 1.0},150, "easeOutSine");
		 
	 });

});