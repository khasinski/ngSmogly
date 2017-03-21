(function(){
  'use strict';

  angular
    .module('ngSmogly')
    .factory('StationRepository', StationRepository)
  ;

  StationRepository.$inject = ['$http'];
  function StationRepository($http) {
    var BASE_URL = 'http://app.smogly.pl/api/v1/station/';
    return {
      getStationsByBoundedBox: function() {
        return $http.get(BASE_URL);
      }
    };
  }

})();
