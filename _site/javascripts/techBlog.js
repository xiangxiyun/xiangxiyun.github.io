$(document).ready(function(){

	$(".subtab").click(function(){
		
		for (var i = 0; i < 3; i++) {
			if ($($("#tab").children()[i]).hasClass("tabin")) {
				$($("#tab").children()[i]).removeClass("tabin");
			};
			if ($($("#tab-content").children()[i]).hasClass("category_front")) {
				$($("#tab-content").children()[i]).removeClass("category_front");
			};
		}

		var n = $(this).index();
		$($("#tab").children()[n]).addClass("tabin");
		$($("#tab-content").children()[n]).addClass("category_front");
  	});

  	$(".blog_article").mouseenter(function(){
		 $($(this).find(".ah")).css("color", "#333333");
		 $($(this).find(".article_description")).css("color", "#333333");
		 
	}).mouseleave(function(){
		 $($(this).find(".ah")).css("color", "rgb(105,105,105)");
		 $($(this).find(".article_description")).css("color", "rgb(105,105,105)");
	});


});