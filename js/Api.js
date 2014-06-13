(function(exports, $) {
	'use strict';

	// Free key: 01cffb53e8840e059fbe9e424dba2bbdc36d132c
	// Premium key 60days trial 5bc75fc3d43ea3ac2c1682527555f9aa1945b922
	var Api = function() {

	};

	Api.prototype.getWeatherInfo = function(location) {
		var deferred = $.Deferred(),
			weatherInfo,
			i;

		$.ajax({
				url: 'http://api.worldweatheronline.com/premium/v1/weather.ashx',
				method: 'get',
				dataType: 'json',
				data: {
					q: location,
					format: 'json',
					num_of_days: 5,
					key: '5bc75fc3d43ea3ac2c1682527555f9aa1945b922'
				}
			})
			.done(function(response) {
				console.log('response', response);

				weatherInfo = [];

				for (i = 0; i < response.data.weather.length; i++) {
					if (i === 0) {
						weatherInfo.push({
							date: new Date(response.data.weather[i].date),
							location: response.data.request[0].query,
							currentTemp: parseInt(response.data.current_condition[i].temp_C),
							maxTemp: parseInt(response.data.weather[i].maxtempC),
							minTemp: parseInt(response.data.weather[i].mintempC),
							morningEarly: parseInt(response.data.weather[i].hourly[1].tempC),
							morningLater: parseInt(response.data.weather[i].hourly[3].tempC),
							afternoonEarly: parseInt(response.data.weather[i].hourly[4].tempC),
							afternoonLater: parseInt(response.data.weather[i].hourly[5].tempC),
							eveningEarly: parseInt(response.data.weather[i].hourly[7].tempC),
							eveningLater: parseInt(response.data.weather[i].hourly[6].tempC),
							overnightLater: parseInt(response.data.weather[i+1].hourly[0].tempC),
							overnightEarly: parseInt(response.data.weather[i+1].hourly[1].tempC),
							weatherMorning: response.data.weather[i].hourly[2].weatherDesc[0].value,
							weatherAfternoon: response.data.weather[i].hourly[4].weatherDesc[0].value,
							weatherEvening: response.data.weather[i].hourly[5].weatherDesc[0].value,
							weatherOvernight: response.data.weather[i+1].hourly[0].weatherDesc[0].value
						});
					} else if (i + 1 < response.data.weather.length) {
						weatherInfo.push({
							date: new Date(response.data.weather[i].date),
							location: response.data.request[0].query,
							maxTemp: parseInt(response.data.weather[i].maxtempC),
							minTemp: parseInt(response.data.weather[i].mintempC),
							morningEarly: parseInt(response.data.weather[i].hourly[1].tempC),
							morningLater: parseInt(response.data.weather[i].hourly[3].tempC),
							afternoonEarly: parseInt(response.data.weather[i].hourly[4].tempC),
							afternoonLater: parseInt(response.data.weather[i].hourly[5].tempC),
							eveningEarly: parseInt(response.data.weather[i].hourly[7].tempC),
							eveningLater: parseInt(response.data.weather[i].hourly[6].tempC),
							overnightLater: parseInt(response.data.weather[i+1].hourly[0].tempC),
							overnightEarly: parseInt(response.data.weather[i+1].hourly[1].tempC),
							weatherMorning: response.data.weather[i].hourly[2].weatherDesc[0].value,
							weatherAfternoon: response.data.weather[i].hourly[4].weatherDesc[0].value,
							weatherEvening: response.data.weather[i].hourly[5].weatherDesc[0].value,
							weatherOvernight: response.data.weather[i+1].hourly[0].weatherDesc[0].value
						});
					} else {
						weatherInfo.push({
							date: new Date(response.data.weather[i].date),
							location: response.data.request[0].query,
							maxTemp: parseInt(response.data.weather[i].maxtempC),
							minTemp: parseInt(response.data.weather[i].mintempC),
							morningEarly: parseInt(response.data.weather[i].hourly[1].tempC),
							morningLater: parseInt(response.data.weather[i].hourly[3].tempC),
							afternoonEarly: parseInt(response.data.weather[i].hourly[4].tempC),
							afternoonLater: parseInt(response.data.weather[i].hourly[5].tempC),
							eveningEarly: parseInt(response.data.weather[i].hourly[7].tempC),
							eveningLater: parseInt(response.data.weather[i].hourly[6].tempC),
							overnightLater: 0,
							overnightEarly: 0,
							weatherMorning: response.data.weather[i].hourly[2].weatherDesc[0].value,
							weatherAfternoon: response.data.weather[i].hourly[4].weatherDesc[0].value,
							weatherEvening: response.data.weather[i].hourly[5].weatherDesc[0].value,
							weatherOvernight: 'Clear'
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