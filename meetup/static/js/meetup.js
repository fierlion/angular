(function() {
  var app = angular.module('store', []);

  app.controller('MainController', function($scope, $http) {


    //code to hit an API endpoint
    var onUserComplete = function(response){
      $scope.user = response.data;
    };
    //if server was down or url was mistyped, theis would throw an error.  F
    //Function onUserComplete only invoked on success.

    var onError = function(reason){
      $scope.error = reason;
    }

    $http.get("url")
      .then(onUserComplete, onError);
      //then takes two arguments -- one for succes and one for error
      //http calls (get, post, etc) always give a promise back and require "then"

    var person = {
      firstName: "Billy",
      lastName: "Bob"
    };
    $scope.person = person;
    $scope.message = "hello Angular";
    $scope.username = "Ray";

  });
})();
