angular.module('newApp', ['myApp']);
var largerNum = 300;
var myApp = angular.module('myApp', []);
myApp.value('start', largerNum);
myApp.value('otherValue', 400);
myApp.controller('Counter', ['$scope', 'start', 'otherValue',
                        function($scope, start, otherValue) {
  $scope.start = start;
  $scope.current = otherValue;
  $scope.change = 1;
  $scope.difference = 0;

  $scope.inc = function() {
    $scope.current += $scope.change;
    $scope.calcDiff();
  };
  $scope.dec = function() {
    $scope.current -= $scope.change;
    $scope.calcDiff();
  };
  $scope.calcDiff = function() {
    $scope.difference = $scope.current - $scope.start;
  };
  $scope.incchange = function() {
    $scope.change += 1;
  };
  $scope.decchange = function() {
    $scope.change -= 1;
  };
}]);
