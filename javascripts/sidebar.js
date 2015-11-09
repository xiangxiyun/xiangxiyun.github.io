$(document).ready(function(){
	$(".MenuElement").click(function(){
		if ($(this).hasClass("substainColor")) {
			$(this).children('.SubMenu').slideUp();
			$(this).removeClass("substainColor");
		}
		else {
			$(this).children('.SubMenu').slideDown();
			$(this).addClass("substainColor");
		};
		
	});

});