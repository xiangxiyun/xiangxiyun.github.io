$(document).ready(function(){
	$(".MenuElement").click(function(){	
			if ($(this).children(".SubMenu").css("display") == "none") {
				$(this).children("a").css("background-color", "#4682B4");
				$(this).children("a").css("color", "#FFF");
				$(this).children(".SubMenu").slideDown("fast");
				$(this).children(".SubMenu").css("display") = "inline";
			}
			else {
				$(this).children(".SubMenu").slideUp("fast");
				$(this).children("a").css("background-color", "#cccccc");
				$(this).children("a").css("color", "#333333");	
				$(this).children(".SubMenu").css("display") = "none";
			}
		
  });
});