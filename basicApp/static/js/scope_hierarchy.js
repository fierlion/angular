var myApp = angular.module('myApp', []);
myApp.value('valueD', 50000);
myApp.controller('LevelA', function($scope) {
  $scope.title = "level A";
  $scope.valueA = 1;
  $scope.inc = function() {
    $scope.valueA++;
  };
});
myApp.controller('LevelB', ['$scope', 'valueD', function($scope, valD) {
  $scope.title = "Level B";
  $scope.valueB = 1;
  $scope.valueD = valD;
  $scope.inc = function() {
    $scope.valueB++;
  };
}]);
myApp.controller('LevelC', function($scope) {
  $scope.title = "Level C";
  $scope.valueC = 1;
  $scope.inc = function() {
    $scope.valueC++;
  };
});
