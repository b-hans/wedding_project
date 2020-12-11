$(document).ready(function(){
	$('.next').on('click', function(){
		var currentImg = $('.active');
		var nextImg = currentImg.next();
		
		if (nextImg.length){
			currentImg.removeClass('active').css('z-index', -10);
			nextImg.addClass('active').css('z-index', 10);
		}
	});

	$('.prev').on('click', function(){
		var currentImg = $('.active');
		var prevImg = currentImg.prev();
		
		if (prevImg.length){
			currentImg.removeClass('active').css('z-index', -10);
			prevImg.addClass('active').css('z-index', 10);
		}
	});


});

$("#btn").click(function() {
	console.log("Hey now " + $("#sl-inner img").length);
	console.log("index " + ($('img.active').index() + 1));
	$("#title_test").html("<h1><b>Booyah!</b></h1>");
});