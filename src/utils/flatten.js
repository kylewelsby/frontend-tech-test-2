function flatten(obj) {
	if (obj.length) {
		var flatArray = [];

		if (obj.length === 1) {
			return obj[0];
		}

		for (var i = 0; i < obj.length; i++) {
			var flatItem = flatten(obj[i]);

			if (flatItem.length) {
				for (var j = 0; j < flatItem.length; j++) {
					flatArray.push(flatItem[j]);
				}
			} else {
				flatArray.push(flatItem);
			}
		}

		return flatArray;
	}

	if (typeof obj === 'object') {
		var asArray = [];

		for (var key in obj) {
			var flatItem = flatten(obj[key]);

			if (flatItem.length) {
				for (var j = 0; j < flatItem.length; j++) {
					asArray.push(flatItem[j]);
				}
			} else {
				asArray.push(flatItem);
			}
		}

		return asArray;
	}

	return obj;
}