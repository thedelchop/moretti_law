$(document).ready(function(){

	      $('p a').hover(function() {
	        $(this).find('.arrow').animate({ marginLeft: '3px' }, 100);
	      }, function() {
	        $(this).find('.arrow').animate({ marginLeft: '0px' }, 100);           
	      });
		  

		
});