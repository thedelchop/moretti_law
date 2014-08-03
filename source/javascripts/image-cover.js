jQuery(document).ready(function($){
	
	$('.images').hover(function() {
		$(this).find('.zoom, .email, .link').stop().animate({
			'right': 0
		}, 200);
	}, function() {
		$(this).find('.zoom, .email, .link').stop().animate({
			'right': -60
		}, 200);
	});
	
	

});