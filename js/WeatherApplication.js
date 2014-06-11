(function(exports, $, Api) {
	'use strict';

	var WeatherApplication = function() {
		this._api = null;
	};

	WeatherApplication.prototype.bootstrap = function() {
		this._setupAPI().done(function(weatherInfo) {
			this._setupUI(weatherInfo);
		}.bind(this));
	};

	WeatherApplication.prototype._setupAPI = function() {
		this._api = new Api();

		return this._api.getWeatherInfo('Tartu')
			.done(function(weatherInfo) {
				console.log('loaded weather info', weatherInfo);
			})
			.fail(function(xhr, status, error) {
				console.log('failed to load weather info', xhr, status, error);
			});
	};

	WeatherApplication.prototype._setupUI = function(weatherDays) {
		var today = new Date(),
			i;

		console.log('setting up ui', weatherDays);

		console.log(today.getDay());

		/*for (i = 0; i < weatherDays.length; i++) {
			this._ui._renderWeatherDay(weatherDays[i]);
		}*/

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
	};

	exports.WeatherApplication = WeatherApplication;
})(window, jQuery, window.Api);