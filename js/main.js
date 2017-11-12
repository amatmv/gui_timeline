
	var triggerBttn = [
		document.getElementById( 'trigger-overlay-1' ),
		document.getElementById( 'trigger-overlay-2' ),
		document.getElementById( 'trigger-overlay-3' ),
		document.getElementById( 'trigger-overlay-4' ),
		document.getElementById( 'trigger-overlay-5' ),
		document.getElementById( 'trigger-overlay-6' ),
	]

	var overlay = [
		document.querySelector( 'div.overlay-1' ),
		document.querySelector( 'div.overlay-2' ),
		document.querySelector( 'div.overlay-3' ),
		document.querySelector( 'div.overlay-4' ),
		document.querySelector( 'div.overlay-5' ),
		document.querySelector( 'div.overlay-6' ),
	]

	var closeBttn = [
		overlay[0].querySelector( 'button.overlay-close' ),
		overlay[1].querySelector( 'button.overlay-close' ),
		overlay[2].querySelector( 'button.overlay-close' ),
		overlay[3].querySelector( 'button.overlay-close' ),
		overlay[4].querySelector( 'button.overlay-close' ),
		overlay[5].querySelector( 'button.overlay-close' ),
	]

	function toggleOverlay(overlay) {
		classie.toggle( overlay, 'open' );
	}

	triggerBttn[0].addEventListener( 'click', function(){
	    toggleOverlay(overlay[0]);
	}, false);

	triggerBttn[1].addEventListener( 'click', function(){
	    toggleOverlay(overlay[1]);
	}, false);
	triggerBttn[2].addEventListener( 'click', function(){
	    toggleOverlay(overlay[2]);
	}, false);
	triggerBttn[3].addEventListener( 'click', function(){
	    toggleOverlay(overlay[3]);
	}, false);
	triggerBttn[4].addEventListener( 'click', function(){
	    toggleOverlay(overlay[4]);
	}, false);
	triggerBttn[5].addEventListener( 'click', function(){
	    toggleOverlay(overlay[5]);
	}, false);

	closeBttn[0].addEventListener( 'click', function(){
	    toggleOverlay(overlay[0]);
	}, false);
	closeBttn[1].addEventListener( 'click', function(){
	    toggleOverlay(overlay[1]);
	}, false);
	closeBttn[2].addEventListener( 'click', function(){
	    toggleOverlay(overlay[2]);
	}, false);
	closeBttn[3].addEventListener( 'click', function(){
	    toggleOverlay(overlay[3]);
	}, false);
	closeBttn[4].addEventListener( 'click', function(){
	    toggleOverlay(overlay[4]);
	}, false);
	closeBttn[5].addEventListener( 'click', function(){
	    toggleOverlay(overlay[5]);
	}, false);

$('button[id^="sec"]').on('click', function(e) {
	// $(this).hide();
	e.preventDefault();
	// console.log($("section#_"+$(this).attr('id')));
	$("button.current").removeClass("current");
	console.log($("button#"+$(this).attr('id')));
	$("section.active").addClass("hidden");
	$("section.active").removeClass("active");
	$("section#_"+$(this).attr('id')).removeClass("hidden");
	$("section#_"+$(this).attr('id')).addClass("active");
	
	// $(document.getElementById("_"+$(this).attr('id'))).hide();
	
	// $(this).addClass('current').siblings().removeClass('current');
});
$(document).ready(function () {
	$('.timeline').mousewheel(function(e, delta) {
	    this.scrollLeft -= (delta * 40);
	    e.preventDefault();
	});
});