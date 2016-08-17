function upperFirstLetter() {
	return function(str) {
		return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
	}
}

angular
    .module('app')
    .filter('upperFirstLetter', upperFirstLetter);