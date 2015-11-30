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

	var jq = jQuery.noConflict();

	function showCategory(tagStr) {
    jq.getJSON("../post.json",
    function(data) {
      jq('#blog').empty(content);
      var content = "<h2>分类：" + tagStr + "</h2><ul class=\"posts\">";
      var count = 0;
      jq.each(data,
      function(i, item) {
        jq.each(item.tags,
        function(j, tag) {
          if (tag == tagStr) {
            content += "<li class=\"listing-item\"><time datetime=\"" + item.date + "\">" + item.date + "</time><a href=\"" + item.url + "\">" + item.title + "</a></li>";
            count++;
          }

        });
      });
      // if (count > 0) {
      //   content += "</ul>";
      //   postNumStr = "<span>（" + count + "篇文章）</span>";
      //   jq('#blog').append(content);
      //   jq('#show-tag>h2').append(postNumStr);
      // }
    });
  }

});