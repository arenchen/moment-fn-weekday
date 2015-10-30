(function() {
	var moment = (typeof require !== 'undefined' && require !== null) && !require.amd ? require('moment') : this.moment;

	moment.fn.getWeekdayCountInMonth = function (weekday) {
		if (weekday == null || weekday == undefined) {
			weekday = this.weekday();
		}

		if (!(/[0-6]{1}/).test(weekday)) {
			throw 'Weekday is out of range 0..6';
		}

		return Math.floor((this.daysInMonth() - ((7 + weekday - this.startOf('month').weekday()) % 7 + 1)) / 7) + 1;
	}

	moment.fn.getWeekdayWeekInMonth = function(date) {
		if (date == null || date == undefined) {
			date = this;
		}

		if (!moment.isMoment(date)) {
			throw 'parameter is not of the expected type.';
		}

		return Math.floor((date.date() - ((7 + date.weekday() - date.startOf('month').weekday()) % 7 + 1)) / 7) + 1;
	}

	if ((typeof module !== 'undefined' && module !== null ? module.exports : void 0) != null) {
		module.exports = moment;
	}
}).call(this);
