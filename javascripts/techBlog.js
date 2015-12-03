$(document).ready(function(){

	$(".subtab").click(function(){
		
		for (var i = 0; i < 2; i++) {
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


function showCategory(tag){
	$.getJSON("https://raw.githubusercontent.com/xiangxiyun/xiangxiyun.github.io/master/_site/post.json",
	function(data){
		$("#blog_content").empty();
		var content = "";
		if (tag == "ALL") {
			$.each(data, function(i, article) {
				content += "<a class = \"blog_reference\" href=" + article.url +">" +
		                            "<article class = \"blog_article\">" + 
		                                "<header class = \"article_header\">" +
		                                    "<h2 class = \"ah\">"+ article.title +"<time>"+ article.date +" </time> </h2>" +
		                                "</header>" + 
		                                "<div class = \"article_description\"> <p> "+ article.description + "</p> </div> "+
		                                "<footer class = \"article_tag\"> "+
		                                	"<i class = \"icon icon-tags\"></i> "+ article.categories +
		                                "</footer>" +
		                            "</article>"+
	                          	"</a>";
			});
		}
		else{
			$.each(data, function(i, article) {
		        $.each(article.categories, function(j, category) {
		            if (category == tag) {
		            	content += "<a class = \"blog_reference\" href=" + article.url +">" +
			                            "<article class = \"blog_article\">" + 
			                                "<header class = \"article_header\">" +
			                                    "<h2 class = \"ah\">"+ article.title +"<time>"+ article.date +" </time> </h2>" +
			                                "</header>" + 
			                                "<div class = \"article_description\"> <p> "+ article.description + "</p> </div> "+
			                                "<footer class = \"article_tag\"> "+
			                                	"<i class = \"icon icon-tags\"></i> "+ article.categories +
			                                "</footer>" +
			                            "</article>"+
		                          	"</a>";

		            }
		        });
		    });
		};
        
        

        $('#blog_content').append(content);

	});
}




