(function() {
  'use strict';
  angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.count = -1;

    $scope.checkList = function() {
      console.log("inside checkList: " + $scope.lunchList);
      $scope.count = $scope.lunchList ? (($scope.lunchList).split(",").filter(Boolean)).length : 0;

      if ($scope.count < 0) {
        $scope.borderColor = {"border-color": 'black'};
        $scope.fontColor = {"color": 'black'};
        $scope.message = "";
      } else if ($scope.count == 0) {
        $scope.borderColor = {"border-color": 'red'};
        $scope.fontColor = {"color": 'red'};
        $scope.message =  "Please enter data first";
      } else if ($scope.count < 4) {
        $scope.borderColor = {"border-color": 'green'};
        $scope.fontColor = {"color": 'green'}
        $scope.message =  "Enjoy!";
      } else {
        $scope.borderColor = {"border-color": 'green'};
        $scope.fontColor = {"color": 'green'}
        $scope.message =  "Too much!";
      }

    }
  }
})()
