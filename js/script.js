var headerMenu = '.header-menu';

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
		$('.logo-img').attr('src', '../images/logo-min.jpg');
		$('.logo-img').css({'width':'100px'});
	} else {
		$('header').css('background-color', '');
		$('.header-container a').css('color', 'rgba(255, 255, 255, 1)');
		$('.logo-img').attr('src', '../images/logo.png');
		$('.logo-img').css({'width': ''});
	}
	 //console.log(scrolled, heightSection);
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
		slidesToShow: 3,
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


