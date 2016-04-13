$(document).ready(function(){

	// MOBILE MENU
	$('nav').click(function(){
	  $('.m-nav__btn').toggleClass('m-nav__btn-open');
	});

	var wow = new WOW({ mobile: false });
	new WOW().init();



	$(window).scroll(function(event) {
			if($(this).scrollTop() > 50) {
			$("nav").fadeIn();
			$("nav").addClass('js--nav')
		}
		else {
			$("nav").removeClass('js--nav')
		}
	});

	$("nav__link").click(function(e){
		var linkId = $(this).attr("href");
			$("body").animate({scrollTop: $(linkId).offset().top}, "slow");
		return false;//prevent interference with default scroll
		//or use event.preventDefault()
	});

});