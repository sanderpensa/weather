(function(exports, $) {
	'use strict';

	// 01cffb53e8840e059fbe9e424dba2bbdc36d132c
	var Api = function() {

	};

	Api.prototype.getWeatherInfo = function(location) {
		var deferred = $.Deferred(),
			weatherInfo;

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

				weatherInfo = {
					temp: parseInt(response.data.current_condition[0].temp_C, 10)
				};

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