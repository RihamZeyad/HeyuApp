$(document).ready(function(){
	var scrollTop=0;
	$(window).scroll(function(){
		scrollTop= $(window).scrollTop();
		// scroll value for navbar
		if(scrollTop>0){
			$('.navbar').addClass('scrollNav');
	
		}else if (scrollTop == 0){
		$('.navbar').removeClass('scrollNav');

		}
		
				// scroll value for to top arrow

		if(scrollTop>500){
			$('.toTop').show(500);
	
		}else if (scrollTop <= 500){
		$('.toTop').hide(500);

		}
		
		
	});
	$('.toTop').click(function(){
		$('body, html').animate({
			scrollTop:0}, 500);
		
		
	});
});