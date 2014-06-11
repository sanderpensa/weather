/**
 * Created by Sander on 10.06.2014.
 */


$(document).ready(function() {
	// opens day tab, closing existing one
	$('.day-tab').click(function() {
		if ($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
		} else {
			$('.item.active').removeClass('active');
			$(this).parent().addClass('active');
		}
	});

	// remove active class from active item
	$('.weather-temp').click(function() {
		$('.item.active').removeClass('active');
	});

	// set secondary-content background to primary-content background
	$('.period-choice li').click(function() {
		var contentColor = $(this).css('background-color'),
			tabName = $(this).data('tab');

		// hide currently active tab
		$(this).parent().parent().find('.secondary-content .tab-pane.is-active').removeClass('is-active');

		// show selected tab
		$(this).parent().parent().find('.secondary-content .tab-pane[data-tab="' + tabName + '"]')
			.addClass('is-active');

		console.log('open tab', tabName);

		$('.content .secondary-content').css('background-color', contentColor);
	});
});