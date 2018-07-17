$(document).ready(function() {
	// ACTIVE MENU
	var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
	if (pgurl=="") {
		$('.nav-main #home').addClass('active');
	}
	$(".nav-main a").each(function(){
		if($(this).attr("href") == pgurl)
			$(this).addClass("active");
	});

	$('.js-navigation-trigger').on('click', function() {
		$('.nav-main').toggleClass('nav-opened');
		$('body').toggleClass('nav-opened')
	});

	if($('.js-slick-1').length > 0){
		$('.js-slick-1').slick({
		    infinite: true,
		    autoplay: true,
		    autoplaySpeed: 5000,
		    dots: false,
		    arrows: false,
		});
	}


	
})

$(window).on("load",function(){
    $(".js-scrollBar").mCustomScrollbar({
    	theme: "dark",
    });

});