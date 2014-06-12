/**
 * Created by Sander on 12.06.2014.
 */
(function(exports, $) {
	'use strict';

	var Ui = function() {

	};

	Ui.prototype._renderWeatherDay = function(weatherDay) {
		var wrap = $('#weather'),
			article = $('<article>', {
				className: 'item'
			}),
			/*header = $('<header>', {
				className: 'secondary-content clearfix'
			}).appendTo(article);*/
			header = $(
				'<header class="clearfix day-tab">' +
				'<div class="secondary-content clearfix">' +
				'	<span class="weather-icon"></span>' +
				'	<p class="temp-high">29&deg;<br><small>hi</small></p>' +
				'	<p class="temp-low">16&deg;<br><small>lo</small></p>' +
				'</div>' +
				'<h1>Monday</h1>' +
				'</header>'
			).appendTo(article);

		wrap.append(article);
	};

	exports.Ui = Ui;
})(window, jQuery);