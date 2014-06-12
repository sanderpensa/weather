(function(exports, $) {
	'use strict';

	var Ui = function() {

	};

	Ui.prototype._renderWeatherDay = function(weatherDay) {
		var weekdayNames = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			],

			// compare lowest and highest temp of the given time period
			getLowerTemp = function(temp1, temp2){
				return Math.min(temp1, temp2);
			},
			getHigherTemp = function(temp1, temp2){
				return Math.max(temp1, temp2);
			},

			wrap = $('#weather'),
			article = $('<article>', {
				'class': 'item'
			}),

			header = $(
				'<header class="clearfix day-tab">' +
				'<div class="secondary-content clearfix">' +
				'	<span class="weather-icon"></span>' +
				'	<p class="temp-low">' + weatherDay.minTemp + '&deg;<br><small>lo</small></p>' +
				'	<p class="temp-high">' + weatherDay.maxTemp + '&deg;<br><small>hi</small></p>' +
				'</div>' +
				'<h1>' + weekdayNames[weatherDay.date.getDay()] + '</h1>' +
				'</header>'
			).appendTo(article),

			content = $('<div>', {
				'class': 'content clearfix'
			}).appendTo(article);

		$(
			'<ul class="primary-content clearfix period-choice">' +
			'	<li data-tab="morning">' +
			'		<p class="title">Morning</p>' +
			'		<p class="temp-low">' + getLowerTemp(weatherDay.morningHi, weatherDay.morningLo) +
				'&deg;<br><small>lo</small></p>' +
			'		<p class="temp-high">' + getHigherTemp(weatherDay.morningHi, weatherDay.morningLo) +
				'&deg;<br><small>hi</small></p>' +
			'	</li>' +
			'	<li data-tab="afternoon">' +
			'		<p class="title">Afternoon</p>' +
			'		<p class="temp-low">' + getLowerTemp(weatherDay.afternoonHi, weatherDay.afternoonLo) +
				'&deg;<br><small>lo</small></p>' +
			'		<p class="temp-high">' + getHigherTemp(weatherDay.afternoonHi, weatherDay.afternoonLo) +
				'&deg;<br><small>hi</small></p>' +
			'	</li>' +
			'	<li data-tab="evening">' +
			'		<p class="title">Evening</p>' +
			'		<p class="temp-low">' + getLowerTemp(weatherDay.eveningHi,weatherDay.eveningLo) +
				'&deg;<br><small>lo</small></p>' +
			'		<p class="temp-high">' +getHigherTemp(weatherDay.eveningHi,weatherDay.eveningLo)
					+ '&deg;<br><small>hi</small></p>' +
			'	</li>' +
			'	<li data-tab="overnight">' +
			'		<p class="title">Overnight</p>' +
			'		<p class="temp-low">' + getLowerTemp(weatherDay.overnightHi,weatherDay.overnightLo)
					+ '&deg;<br><small>lo</small></p>' +
			'		<p class="temp-high">' + getHigherTemp(weatherDay.overnightHi,weatherDay.overnightLo)
					+ '&deg;<br><small>hi</small></p>' +
			'	</li>' +
			'</ul>'
		).appendTo(content);

		$(
			'<div class="secondary-content">' +
			'	<div class="tab-pane is-active" data-tab="morning">' +
			'		<p class="location">' + weatherDay.location.split(' ')[0] + '<br>' +
					weatherDay.location.split(' ')[1] + '</p>' +
			'		<img class="weather-icon" src="img/weather-sunny.png" alt="sunny">' +
			'		<p class="weather-temp">' + weatherDay.weatherMorning + '<br><strong>' +
					weatherDay.morningHi + '&deg;C</strong></p>' +
			'	</div>' +
			'	<div class="tab-pane" data-tab="afternoon">' +
			'		<p class="location">' + weatherDay.location.split(' ')[0] + '<br>'
				+ weatherDay.location.split(' ')[1] + '</p>' +
			'		<img class="weather-icon" src="img/weather-sunny.png" alt="sunny">' +
			'		<p class="weather-temp">' + weatherDay.weatherAfternoon + '<br><strong>' +
					weatherDay.afternoonHi + '&deg;C</strong></p>' +
			'	</div>' +
			'	<div class="tab-pane" data-tab="evening">' +
			'		<p class="location">' + weatherDay.location.split(' ')[0] + '<br>'
				+ weatherDay.location.split(' ')[1] + '</p>' +
			'		<img class="weather-icon" src="img/weather-sunny.png" alt="sunny">' +
			'		<p class="weather-temp">' + weatherDay.weatherEvening + '<br><strong>' +
					weatherDay.eveningHi + '&deg;C</strong></p>' +
			'	</div>' +
			'		<div class="tab-pane" data-tab="overnight">' +
			'		<p class="location">' + weatherDay.location.split(' ')[0] + '<br>'
				+ weatherDay.location.split(' ')[1] + '</p>' +
			'		<img class="weather-icon" src="img/weather-sunny.png" alt="sunny">' +
			'		<p class="weather-temp">' + weatherDay.weatherOvernight + '<br><strong>' +
					weatherDay.overnightHi + '&deg;C</strong></p>' +
			'	</div>' +
			'</div>'
		).appendTo(content);

		wrap.append(article);
	};

	exports.Ui = Ui;
})(window, jQuery);