$(document).ready(function(){

    showCategory();

  	$(".blog_article").mouseenter(function(){
		 $($(this).find(".ah")).css("color", "#333333");
		 $($(this).find(".article_description")).css("color", "#333333");
		 
	}).mouseleave(function(){
		 $($(this).find(".ah")).css("color", "rgb(105,105,105)");
		 $($(this).find(".article_description")).css("color", "rgb(105,105,105)");
	});

	

});


function showCategory(){
	/*only show All*/
    $('#blog_content>div[post-cate!=all]').hide();

    $('.ce').click(function() {
		var cate = $(this).attr('cate'); //get category's name

		$('#blog_content>div[post-cate!=' + cate + ']').hide(250);
		$('#blog_content>div[post-cate=' + cate + ']').show(400);
	});
}




