/**
 * Created by Sander on 12.06.2014.
 */
(function(exports, $) {
	'use strict';

	var Ui = function() {

	};

	Ui.prototype.className = {
		ITEM: 'item',
		CLEARFIX: 'clearfix',
		DAY_TAB: 'day-tab',
		SECONDARY_CONTENT: 'secondary-content',
		WEATHER_ICON: 'weather-icon',
		TEMP_HIGH: 'temp-high',
		TEMP_LOW: 'temp-low',
		CONTENT: 'content',
		PRIMARY_CONTENT: 'primary-content',
		PERIOD_CHOICE: 'period-choice',
		TITLE: 'title',
		TAB_PANE: 'tab-pane',
		IS_ACTIVE: 'is-active',
		LOCATION: 'location',
		WEATHER_TEMP: 'weather-temp'
	};

	Ui.prototype._renderWeatherDay = function(weatherDay) {
		$('#weather').html($('<article>', {
			class: this.className.ITEM
		}));
		$('.item').html($('<header>', {
			class: this.className.CLEARFIX + ' ' +  this.className.DAY_TAB
		}));
	};

	exports.Ui = Ui;
})(window, jQuery);