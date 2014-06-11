/**
 * Created by Sander on 10.06.2014.
 */


$(document).ready(function() {
	var previousIndex = 10;
	//display content when day-tab is clicked
	$('.day-tab').click(function() {
		var headerIndex = $('.day-tab').index(this);
		console.log('This content has index ' + headerIndex + ' previous index = ' + previousIndex);

		if (previousIndex !== headerIndex){
			$('.item').eq(headerIndex).addClass('active').siblings().removeClass('active');
			previousIndex = headerIndex;
		} else {
			$('.item').eq(headerIndex).removeClass('active');
			previousIndex = 10;
		}
	});

	$('.weather-temp').click(function() {
		$('.item').removeClass('active');
	});

	//set secondary-content background to primary-content background
	$('ul li').click(function() {
		var contentColor = $(this).css('background-color');

		$('.content .secondary-content').css('background-color', contentColor);

	});


});