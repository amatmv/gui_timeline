
	var triggerBttn = [
		document.getElementById( 'trigger-overlay-1' ),
		document.getElementById( 'trigger-overlay-2' ),
		document.getElementById( 'trigger-overlay-3' ),
		document.getElementById( 'trigger-overlay-4' ),
		document.getElementById( 'trigger-overlay-5' ),
		document.getElementById( 'trigger-overlay-6' ),
		document.getElementById( 'trigger-overlay-7' ),
		document.getElementById( 'trigger-overlay-8' ),
		document.getElementById( 'trigger-overlay-9' ),
		document.getElementById( 'trigger-overlay-10' ),
		document.getElementById( 'trigger-overlay-11' ),
		document.getElementById( 'trigger-overlay-12' ),
		document.getElementById( 'trigger-overlay-13' ),
	]

	var overlay = [
		document.querySelector( 'div.overlay-1' ),
		document.querySelector( 'div.overlay-2' ),
		document.querySelector( 'div.overlay-3' ),
		document.querySelector( 'div.overlay-4' ),
		document.querySelector( 'div.overlay-5' ),
		document.querySelector( 'div.overlay-6' ),
		document.querySelector( 'div.overlay-7' ),
		document.querySelector( 'div.overlay-8' ),
		document.querySelector( 'div.overlay-9' ),
		document.querySelector( 'div.overlay-10' ),
		document.querySelector( 'div.overlay-11' ),
		document.querySelector( 'div.overlay-12' ),
		document.querySelector( 'div.overlay-13' ),
	]

	var closeBttn = [
		overlay[0].querySelector( 'button.overlay-close' ),
		overlay[1].querySelector( 'button.overlay-close' ),
		overlay[2].querySelector( 'button.overlay-close' ),
		overlay[3].querySelector( 'button.overlay-close' ),
		overlay[4].querySelector( 'button.overlay-close' ),
		overlay[5].querySelector( 'button.overlay-close' ),
		overlay[6].querySelector( 'button.overlay-close' ),
		overlay[7].querySelector( 'button.overlay-close' ),
		overlay[8].querySelector( 'button.overlay-close' ),
		overlay[9].querySelector( 'button.overlay-close' ),
		overlay[10].querySelector( 'button.overlay-close' ),
		overlay[11].querySelector( 'button.overlay-close' ),
		overlay[12].querySelector( 'button.overlay-close' ),
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
	triggerBttn[6].addEventListener( 'click', function(){
	    toggleOverlay(overlay[6]);
	}, false);
	triggerBttn[7].addEventListener( 'click', function(){
	    toggleOverlay(overlay[7]);
	}, false);
	triggerBttn[8].addEventListener( 'click', function(){
	    toggleOverlay(overlay[8]);
	}, false);
	triggerBttn[9].addEventListener( 'click', function(){
	    toggleOverlay(overlay[9]);
	}, false);
	triggerBttn[10].addEventListener( 'click', function(){
	    toggleOverlay(overlay[10]);
	}, false);
	triggerBttn[11].addEventListener( 'click', function(){
	    toggleOverlay(overlay[11]);
	}, false);
	triggerBttn[12].addEventListener( 'click', function(){
	    toggleOverlay(overlay[12]);
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
	closeBttn[6].addEventListener( 'click', function(){
	    toggleOverlay(overlay[6]);
	}, false);
	closeBttn[7].addEventListener( 'click', function(){
	    toggleOverlay(overlay[7]);
	}, false);
	closeBttn[8].addEventListener( 'click', function(){
	    toggleOverlay(overlay[8]);
	}, false);
	closeBttn[9].addEventListener( 'click', function(){
	    toggleOverlay(overlay[9]);
	}, false);
	closeBttn[10].addEventListener( 'click', function(){
	    toggleOverlay(overlay[10]);
	}, false);
	closeBttn[11].addEventListener( 'click', function(){
	    toggleOverlay(overlay[11]);
	}, false);
	closeBttn[12].addEventListener( 'click', function(){
	    toggleOverlay(overlay[12]);
	}, false);

$('button[id^="sec"]').on('click', function(e) {
	e.preventDefault();
	$("section.active").addClass("hidden");
	console.log($("section.active"));
	$("section.active").removeClass("active");
	$("section#_"+$(this).attr('id')).removeClass("hidden");
	console.log($("section#_"+$(this).attr('id')));
	$("section#_"+$(this).attr('id')).addClass("active");
});