function updateTime() {
	$('time').text(function(){
		let time = new Date();
		let timeOptions = { hour:'2-digit', minute:'2-digit', }
		return time.toLocaleTimeString([], timeOptions);
	});
}

$(function(){
	$('.app').draggable({ handle: '.titlebar' });
	$('.app').click(function() {
		$('.app').removeClass('active');
		$(this).addClass('active');
	});
	
	setInterval(updateTime, 1000); // clock
});

