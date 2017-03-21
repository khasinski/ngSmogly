(function(){
  'use strict';

  angular
    .module('ngSmogly')
    .controller('MapController', MapController)
  ;

  MapController.$inject = ['StationRepository', 'NgMap'];
  function MapController(StationRepository, NgMap) {
    var vm = this;
    StationRepository.getStationsByBoundedBox().then(function(response) {
      var stations = response.data.results;
      vm.stations = {};
      for(var i = 0; i < stations.length; ++i) {
        vm.stations[stations[i].id] = stations[i];
      }
    });
    NgMap.getMap().then(function(map) {
      vm.map = map;
    });
    vm.showStation = function(evt, stationId) {
      vm.station = vm.stations[stationId];
      vm.map.showInfoWindow('station', this);
    };
  }
})();
