$(document).ready(function() {
	var isHoldingX = false;
	$('.ryu').mouseenter(function(){
		if(!isHoldingX){
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		}
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playhadouken();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'}, 
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			});
		$('.ryu-ready').hide();
		// play hadouken sound
		// show hadouken and animate it to the right of the srceen
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// ryu goes back to his ready position
	});
	$(window).keydown(function(e) {
		if(e.keyCode === 88){
			$('.ryu-cool').show();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			isholdingX = true;
		}
	})
	$(window).keyup(function(e){
		if(e.keyCode === 88) {
			console.log();
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			isHoldingX = false;
		}
	})
});
	function playhadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

