// WAYPOINTS
var $wpTop = $('#topWp');
var $wpMiddle = $('#middleWP');
var $wpBottom = $('#bottomWp');


// BTNS BACK TO MID/TOP

$wpMiddle.waypoint(function () {

	$('.backToTop-box').toggleClass('btnUPbtm-active');

}, {offset: '60%'});

$wpBottom.waypoint(function () {
	var posBtnTop = $('.backToTop-box');
	var posBtnMd = $('.backToMiddle-box');
	//WAY DOWN
	if (posBtnTop.hasClass('btnUPbtm-active')){
		posBtnTop.removeClass('btnUPbtm-active');
		posBtnTop.addClass('btnUPtop-active');
		posBtnMd.addClass('btnBM-active');	
	// WAY UP
	} else {	
		posBtnMd.removeClass('btnBM-active');
		posBtnTop.removeClass('btnUPtop-active');
		posBtnTop.addClass('btnUPbtm-active');
		
	}
	
}, {offset: '80%'});

//SCROLL TOP to MID

$wpMiddle.waypoint(function () {
	$('.progressbar').toggleClass('progress-active');
	$('.tech-logo').toggleClass('techlogo-active');
	$('.h-wp').toggleClass('h-active');


}, {offset: '45%'});



