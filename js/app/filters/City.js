function city () {
  return function (items, cty) {
    return items.filter(function(item) {
      return item.location.city === cty;
    });
  }
}

angular
  .module('app')
  .filter('city', city)
