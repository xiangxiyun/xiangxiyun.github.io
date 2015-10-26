$(document).ready(function(){


	$("#tab li").click(function(){
		
		for (var i = 0; i < 3; i++) {
			if ($($("#tab").children()[i]).hasClass("tabin")) {
				$($("#tab").children()[i]).removeClass("tabin");
			};
			if ($($("#tab-content").children()[i]).hasClass("techBlog-content-first")) {
				$($("#tab-content").children()[i]).removeClass("techBlog-content-first");
			};
		}

		var n = $(this).index();
		$($("#tab").children()[n]).addClass("tabin");
		$($("#tab-content").children()[n]).addClass("techBlog-content-first");
  });
});