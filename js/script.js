var headerMenu = '.header-container';

$(headerMenu+'-touch').on('click', function() {
	$(headerMenu).slideToggle();
	$(this).toggleClass('open');
});
$(window).on('resize', function() {
	if($(headerMenu).is(':hidden')) {
		$(headerMenu).removeAttr('style');
	}
});

function onScroll(){
    $(headerMenu + ' a').each(function(){
		var anchor      = $(this).attr('href');
		var scrollTop   = $(document).scrollTop();
		var positionTop = $(anchor).position().top;
		var outerHeight = $(anchor).outerHeight();
	
        if ((positionTop <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
            $(headerMenu + ' a.active').removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
}

$(document).on('scroll', onScroll);

$(headerMenu+' a').on('click', function(e){
	e.preventDefault();
	$(document).off('scroll');
	$(headerMenu+' a.active').removeClass('active');
    $(this).addClass('active');
	
	var anchor = $(this).attr('href');
	$('html, body').stop().animate({
		scrollTop: $(anchor).offset().top
	}, 500, function() {
		window.location.hash = anchor;
		$(document).on('scroll', onScroll);
	});
});

$(window).on('scroll', function() {
	// определение проскролленного расстояния
	var scrolled = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
	var heightHeader = parseInt($('header').css('height'));
	var heightSection = parseInt($('section').css('height'));
	
	if (scrolled >= heightSection) {
		// $('.logo-img').attr('display', 'none');
		$('.header-container a').css('color', 'rgba(0, 0, 0, 1)');
		$('header').css('background-color', '#ffffff');
		$('.list-messenger').css('background-color', '#ffffff');
		$('.logo').css({'height': '50px', 
						'background': 'url(../images/DR1.png) no-repeat', 
						'background-size': 'contain',
						'transition': '0.4s'});
	} else {
		if(scrolled == 0) {
			$('header').css('background', '');
			$('.list-messenger').css('background', '');
		} else {
			// $('header').css('background-color', '');
			$('.list-messenger').css('background', 'rgba(0,0,0,0.3)');
			$('header').css('background', 'rgba(0,0,0,0.3)');
			$('.header-container a').css('color', 'rgba(255, 255, 255, 1)');
			$('.logo').css({'width': '400px', 'height': '100px', 'background': 'url(../images/logo.png) no-repeat', 'background-size': 'contain'});
		}
	}
	 console.log(scrolled, heightSection);
});


//var height = document.body.clientHeight; // высота окна браузера
//var scrolled = window.pageYOffset || document.documentElement.scrollTop; // определение проскролленного расстояния

$(function() {
	$('.toggle button').click(function() {
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});
	
	$('#all').click(function() {
		$('.post').show(500);
	});

	$('.starter-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 3,
		responsive: [
			{breakpoint: 1024,
			settings: { slidesToShow: 2, slidesToScroll: 2 }},
			{breakpoint: 800,
			settings: { slidesToShow: 1, slidesToScroll: 1 }}
		]
	});
});
$('.one-step').on('click', function(e){
	$('.one-step').css('background', '#ddd');
	$(this).css('background', '#aaa');
	$('.step-main-title').html($('#'+this.id+' .step-title').attr('data-title'));
	$('.step-text').html($('#'+this.id+' .hidden-text').html());
});
// $('.logo').on('click', function(e){
// 	$(location).attr('href', '/');
// });
