$(document).ready(function(){
	$(".reference").click(function(){	
			if ($(this).parent().children(".SubMenu").css("display") == "none") {
				//$(this).children("a").css("background-color", "#4682B4");
				//$(this).children("a").css("color", "#FFF");
				$(this).parent().children("a").addClass("substainColor");
				$(this).parent().children(".SubMenu").slideDown("fast");
				$(this).parent().children(".SubMenu").css("display") = "inline";
			}
			else {
				$(this).parent().children(".SubMenu").slideUp("fast");
				//$(this).children("a").css("background-color", "#cccccc");
				//$(this).children("a").css("color", "#333333");	
				if ($(this).parent().children("a").hasClass("substainColor")) {
					$(this).parent().children("a").removeClass("substainColor");
				};
				$(this).parent().children(".SubMenu").css("display") = "none";
			}
		
  });
});