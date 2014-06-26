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

			getCurrentTimeTab = function() {
				var date = new Date(),
					currentTime = date.getHours();

				if (currentTime < 12 && currentTime > 6) {
					return 'morning'
				} else if (currentTime >= 12 && currentTime <= 16) {
					return 'afternoon'
				}else if (currentTime > 16 && currentTime < 23) {
					return 'evening'
				} else {
					return 'overnight'
				}
			},

			weatherIconMap = {
				'Moderate or heavy snow in area with thunder': 'img/weather-rain.png',
				'Patchy light snow in area with thunder': 'img/weather-rain.png',
				'Moderate or heavy rain in area with thunder': 'img/weather-rain.png',
				'Patchy light rain in area with thunder': 'img/weather-rain.png',
				'Moderate or heavy showers of ice pellets': 'img/weather-rain.png',
				'Light showers of ice pellets': 'img/weather-mostly-sunny.png',
				'Moderate or heavy snow showers': 'img/weather-rain.png',
				'Light snow showers': 'img/weather-mostly-sunny.png',
				'Moderate or heavy sleet showers': 'img/weather-rain.png',
				'Light sleet showers': 'img/weather-mostly-sunny.png',
				'Torrential rain shower': 'img/weather-rain.png',
				'Moderate or heavy rain shower': 'img/weather-rain.png',
				'Light rain shower': 'img/weather-mostly-sunny.png',
				'Ice pellets': 'img/weather-rain.png',
				'Heavy snow': 'img/weather-rain.png',
				'Patchy heavy snow': 'img/weather-rain.png',
				'Moderate snow': 'img/weather-partly-cloudy.png',
				'Patchy moderate snow': 'img/weather-partly-cloudy.png',
				'Light snow': 'img/weather-mostly-sunny.png',
				'Patchy light snow': 'img/weather-mostly-sunny.png',
				'Moderate or heavy sleet': 'img/weather-rain.png',
				'Light sleet': 'img/weather-mostly-sunny.png',
				'Moderate or Heavy freezing rain': 'img/weather-rain.png',
				'Light freezing rain': 'img/weather-mostly-sunny.png',
				'Heavy rain': 'img/weather-rain.png',
				'Heavy rain at times': 'img/weather-partly-cloudy.png',
				'Moderate rain': 'img/weather-rain.png',
				'Moderate rain at times': 'img/weather-partly-cloudy.png',
				'Light rain': 'img/weather-mostly-sunny.png',
				'Patchy light rain': 'img/weather-mostly-sunny.png',
				'Heavy freezing drizzle': 'img/weather-rain.png',
				'Freezing drizzle': 'img/weather-partly-cloudy.png',
				'Light drizzle': 'img/weather-mostly-sunny.png',
				'Patchy light drizzle': 'img/weather-mostly-sunny.png',
				'Freezing fog': 'img/weather-cloudy.png',
				'Fog': 'img/weather-partly-cloudy.png',
				'Blizzard': 'img/weather-rain.png',
				'Blowing snow': 'img/weather-rain.png',
				'Thundery outbreaks in nearby': 'img/weather-partly-cloudy.png',
				'Patchy freezing drizzle nearby': 'img/weather-partly-cloudy.png',
				'Patchy sleet nearby': 'img/weather-partly-cloudy.png',
				'Patchy snow nearby': 'img/weather-partly-cloudy.png',
				'Patchy rain nearby': 'img/weather-partly-cloudy.png',
				'Mist': 'img/weather-mostly-sunny.png',
				'Overcast': 'img/weather-cloudy.png',
				'Cloudy': 'img/weather-cloudy.png',
				'Partly Cloudy': 'img/weather-mostly-sunny.png',
				'Clear': 'img/weather-sunny.png',
				'Sunny': 'img/weather-sunny.png',
				'Clear/Sunny': 'img/weather-sunny.png'
			},

			// compare lowest and highest temp of the given time period
			getLowerTemp = function(temp1, temp2){
				return Math.min(temp1, temp2);
			},
			getHigherTemp = function(temp1, temp2){
				return Math.max(temp1, temp2);

			},

			// get weather icon
			getWeatherIcon = function(description) {
				return weatherIconMap[description];

			},

			// render html
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

		header.find('.weather-icon').css('background-image',
			'url(' + getWeatherIcon(weatherDay.weatherAfternoon) + ')'
		);

		$(
			'<ul class="primary-content clearfix period-choice">' +
			'	<li data-tab="morning">' +
			'		<p class="title">Morning</p>' +
			'		<p class="temp-high">' + getHigherTemp(weatherDay.morningLater, weatherDay.morningEarly) +
				'&deg;<br><small>hi</small></p>' +
			'		<p class="temp-low">' + getLowerTemp(weatherDay.morningLater, weatherDay.morningEarly) +
				'&deg;<br><small>lo</small></p>' +
			'	</li>' +
			'	<li data-tab="afternoon">' +
			'		<p class="title">Afternoon</p>' +
			'		<p class="temp-high">' + getHigherTemp(weatherDay.afternoonLater, weatherDay.afternoonEarly) +
				'&deg;<br><small>hi</small></p>' +
			'		<p class="temp-low">' + getLowerTemp(weatherDay.afternoonLater, weatherDay.afternoonEarly) +
				'&deg;<br><small>lo</small></p>' +
			'	</li>' +
			'	<li data-tab="evening">' +
			'		<p class="title">Evening</p>' +
			'		<p class="temp-high">' + getHigherTemp(weatherDay.eveningLater,weatherDay.eveningEarly) +
				'&deg;<br><small>hi</small></p>' +
			'		<p class="temp-low">' + getLowerTemp(weatherDay.eveningLater,weatherDay.eveningEarly) +
				'&deg;<br><small>lo</small></p>' +
			'	</li>' +
			'	<li data-tab="overnight">' +
			'		<p class="title">Overnight</p>' +
			'		<p class="temp-high">' + getHigherTemp(weatherDay.overnightEarly,weatherDay.overnightLater)	+
				'&deg;<br><small>hi</small></p>' +
			'		<p class="temp-low">' + getLowerTemp(weatherDay.overnightEarly,weatherDay.overnightLater) +
				'&deg;<br><small>lo</small></p>' +
			'	</li>' +
			'</ul>'
		).appendTo(content);

		$(
			'<div class="secondary-content">' +
			'	<div class="tab-pane" data-tab="morning">' +
			'		<p class="location">' + weatherDay.location.split(' ')[0] + '<br>' +
					weatherDay.location.split(' ')[1] + '</p>' +
			'		<img class="weather-icon" src="' + getWeatherIcon(weatherDay.weatherMorning) +
					'" alt="' + weatherDay.weatherMorning + '">' +
			'		<p class="weather-temp">' + weatherDay.weatherMorning + '<br><strong>' +
					getHigherTemp(weatherDay.morningLater, weatherDay.morningEarly) +
					'&deg;C</strong></p>' +
			'	</div>' +
			'	<div class="tab-pane" data-tab="afternoon">' +
			'		<p class="location">' + weatherDay.location.split(' ')[0] + '<br>' +
					weatherDay.location.split(' ')[1] + '</p>' +
			'		<img class="weather-icon" src="' + getWeatherIcon(weatherDay.weatherAfternoon) +
					'" alt="' + weatherDay.weatherAfternoon + '">' +
			'		<p class="weather-temp">' + weatherDay.weatherAfternoon + '<br><strong>' +
					getHigherTemp(weatherDay.afternoonLater, weatherDay.afternoonEarly) +
					'&deg;C</strong></p>' +
			'	</div>' +
			'	<div class="tab-pane" data-tab="evening">' +
			'		<p class="location">' + weatherDay.location.split(' ')[0] + '<br>' +
					weatherDay.location.split(' ')[1] + '</p>' +
			'		<img class="weather-icon" src="' + getWeatherIcon(weatherDay.weatherEvening) +
					'" alt="' + weatherDay.weatherEvening + '">' +
			'		<p class="weather-temp">' + weatherDay.weatherEvening + '<br><strong>' +
					getHigherTemp(weatherDay.eveningLater,weatherDay.eveningEarly) +
					'&deg;C</strong></p>' +
			'	</div>' +
			'		<div class="tab-pane" data-tab="overnight">' +
			'		<p class="location">' + weatherDay.location.split(' ')[0] + '<br>' +
					weatherDay.location.split(' ')[1] + '</p>' +
			'		<img class="weather-icon" src="' + getWeatherIcon(weatherDay.weatherOvernight) +
					'" alt="' + weatherDay.weatherOvernight + '">' +
			'		<p class="weather-temp">' + weatherDay.weatherOvernight + '<br><strong>' +
					getHigherTemp(weatherDay.overnightEarly,weatherDay.overnightLater) +
					'&deg;C</strong></p>' +
			'	</div>' +
			'</div>'
		).appendTo(content);

		wrap.append(article);

		$('.tab-pane[data-tab="' + getCurrentTimeTab() + '"]').addClass('is-active');
		$('.content .secondary-content').css('background-color',
		$('.content .primary-content [data-Tab=' + getCurrentTimeTab() ).css('background-color'));
	};



	exports.Ui = Ui;
})(window, jQuery);