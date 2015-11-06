$(document).ready(function(){
	$(".block").mouseenter(function() {
		$(this).children(".pfl-element").stop().fadeTo(120, 0); 
		$($(this).find(".baloon .circle")).stop().transition({scale: 1.10},250, "easeOutSine");
		
	 }).mouseleave(function() {
	 	$(this).children(".pfl-element").stop().fadeTo(120, 0.65);
		$($(this).find(".baloon .circle")).stop().transition({scale: 1.0},150, "easeOutSine");
		 
	 });	
});