$(document).ready(function() {
	var isHoldingX = false
	$('.hulk-ryu').mouseenter(function(){
		if (!isHoldingX) {
		$('.hulk-ryu-still').hide();
		$('.hulk-ryu-ready').show();
		}
	})
	.mouseleave(function() {
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-still').show();
	})
	.mousedown(function() {
		playhadouken();
		$('.hulk-ryu-throwing').show();
		$('.hulk-hadouken').finish().show().animate(
			{'right': '1020px'}, 
			500,
			function() {
				$(this).hide();
				$(this).css('right', '520px');
			});
			$('.hulk-ryu-ready').hide();
	})
	.mouseup(function() {
		$('.hulk-ryu-throwing').hide();
		$('.hulk-ryu-ready').show();
	})
	$(window).keydown(function(e) {
		if (e.keycode === 88){
		$('.hulk-ryu-cool').show();
		$('.hulk-ryu-still').hide();
		$('.hulk-ryu-ready').hide();
		isHoldingX = true;
		}
	})
	$(window).keyup(function(e) {
		if (e.keycode === 88) {
		$('.hulk-ryu-cool').hide();
		$('hulk-ryu-still').show();
		isHoldingX = false
		}
	})
});