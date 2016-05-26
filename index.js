var myApp = angular.module('myApp',[]);

myApp.controller('HotSpotsController', ['$scope','$http', function($scope, $http) {
  var vm = this;

  activate();

  function activate() {
    $http({
      method: 'GET',
      url: 'locations.json'
      }).then(function(response) {

          vm.hotSpots = response.data;
      });
    }




  var myPlanets = [
    {
      "id": 1,
      "name": "mercury",
      "gravity": 0.38
    },
    {
      "id": 2,
      "name": "venus",
      "gravity": 0.91
    },
    {
      "id": 3,
      "name": "earth",
      "gravity": 1
    },
    {
      "id": 4,
      "name": "mars",
      "gravity": 0.38
    }
  ];

  vm.planets = myPlanets;

}]);