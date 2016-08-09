function City(){
  return function(items,city){
    return items.filter(x => x.location.city === city);
  };
}

angular
  .module('app')
  .filter('city',City);
