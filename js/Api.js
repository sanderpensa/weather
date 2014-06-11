(function(exports, $) {
	'use strict';

	// 01cffb53e8840e059fbe9e424dba2bbdc36d132c
	var Api = function() {

	};

	Api.prototype.getWeatherInfo = function(location) {
		var deferred = $.Deferred(),
			weatherInfo,
			i;

		$.ajax({
				url: 'http://api.worldweatheronline.com/free/v1/weather.ashx',
				method: 'get',
				dataType: 'json',
				data: {
					q: location,
					format: 'json',
					num_of_days: 5,
					key: '01cffb53e8840e059fbe9e424dba2bbdc36d132c'
				}
			})
			.done(function(response) {
				console.log('response', response);

				weatherInfo = [];

				for (i = 0; i < response.data.weather.length; i++) {
					if (i === 0) {
						weatherInfo.push({
							date: new Date(response.data.weather[i].date),
							currentTemp: parseInt(response.data.current_condition[i].temp_C),
							maxTemp: parseInt(response.data.weather[i].tempMaxC),
							minTemp: parseInt(response.data.weather[i].tempMinC)
						});
					} else {
						weatherInfo.push({
							date: new Date(response.data.weather[i].date),
							maxTemp: parseInt(response.data.weather[i].tempMaxC),
							minTemp: parseInt(response.data.weather[i].tempMinC)
						});
					}
				}

				deferred.resolve(weatherInfo);
			}.bind(this))
			.fail(function(xhr, status, error) {
				console.error('failed', xhr, status, error);

				deferred.reject(xhr, status, error);
			});

		return deferred.promise();
	};

	exports.Api = Api;
})(window, jQuery);