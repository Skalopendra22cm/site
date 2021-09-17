

$(function(){
	//scroll bottom
	$('#scroll_bottom_1').click(function(){
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 100);
		return false;
	});
	$('#scroll_bottom_2').click(function () {
		$('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 100);
		return false;
	});
	$('#scroll_bottom_3').click(function () {
		$('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 100);
		return false;
	});
	//countdown
	let timer2 = "30:00";
	let interval = setInterval(function () {
		let timer = timer2.split(':');
		let minutes = parseInt(timer[0], 10);
		let seconds = parseInt(timer[1], 10);
		--seconds;
		minutes = (seconds < 0) ? --minutes : minutes;
		if (minutes < 0) clearInterval(interval);
		seconds = (seconds < 0) ? 59 : seconds;
		seconds = (seconds < 10) ? '0' + seconds : seconds;
		$('.countdown').html(minutes + ':' + seconds);
		timer2 = minutes + ':' + seconds;
	}, 1000);
	//blocking forms
	$(".number").keydown(function (event) {
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
			(event.keyCode == 65 && event.ctrlKey === true) ||
			(event.keyCode >= 35 && event.keyCode <= 39)) {
			return;
		} else {
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
				event.preventDefault();
			}
		}
	});
});
