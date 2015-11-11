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
});