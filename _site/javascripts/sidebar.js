$(document).ready(function(){
	$(".MenuElement").click(function(){
		if ($(this).hasClass("substainColor")) {

			$(this).children('.SubMenu').slideUp();
			$($(this).children('.reference')).removeClass("substainColor");
			$(this).removeClass("substainColor");
		}
		else {
			$(this).children('.SubMenu').slideDown();
			$($(this).children('.reference')).addClass("substainColor");
			$(this).addClass("substainColor");
		};
		
	});

});