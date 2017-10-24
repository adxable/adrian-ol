// WAYPOINTS
var $wpTop = $('#topWp');
var $wpMiddle = $('#middleWP');
var $wpBottom = $('#bottomWp');


// BTNS BACK TO MID/TOP

$wpMiddle.waypoint(function () {

	$('.backToTop').toggleClass('backToTop--active2');

}, {offset: '60%'});

$wpBottom.waypoint(function () {
	var posBtnTop = $('.backToTop');
	var posBtnMd = $('.backToMiddle');
	//WAY DOWN
	if (posBtnTop.hasClass('backToTop--active2')){
		posBtnTop.removeClass('backToTop--active2');
		posBtnTop.addClass('backToTop--active1');
		posBtnMd.addClass('backToMiddle--active');	
	// WAY UP
	} else {	
		posBtnMd.removeClass('backToMiddle--active');
		posBtnTop.removeClass('backToTop--active1');
		posBtnTop.addClass('backToTop--active2');
		
	}
	
}, {offset: '80%'});

//SCROLL TOP to MID

$wpMiddle.waypoint(function () {

	if (!$('.techBox__progressbar').hasClass('techBox__progressbar--active')) {
    	$('.techBox__progressbar').addClass('techBox__progressbar--active');
	}

	if (!$('.techBox__logo').hasClass('techBox__logo--active')) {
    	$('.techBox__logo').toggleClass('techBox__logo--active');
	}

	if (!$('.containerMid__title').hasClass('containerMid__title--active')) {
    	$('.containerMid__title').toggleClass('containerMid__title--active');
	}

	
	


}, {offset: '45%'});



