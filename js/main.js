$(document).ready(function() {

	$('.slides').maximage({
		fillElement: '.wrap'
	});

	$('.wrap').css({ 'height' : $(window).height() }).css({ 'width' : $(window).width() });
	$(window).bind('resize', function(){
		$('.wrap').css({ 'height' : $(window).height() }).css({ 'width' : $(window).width() });
	});


	$.localScroll({
		duration: 400,
		offset: {top:-100}
	});

});
