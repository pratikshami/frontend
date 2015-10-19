'use strict';

angular.module('psJwtApp')
//alert is the service here
.controller('RegisterCtrl', function($scope, $rootScope, $http, alert,authToken) {
  $scope.submit = function() {
    //console.log("test");
    var url = 'http://localhost:3000/register';
    var user = {
      email: $scope.email,
      password: $scope.password
    };
    $http.post(url, user)
      .success(function(res) {
        //console.log("========>>Good<<===========");
        //alert is the function written in the service alert which takes 3 parameters
        alert('success', 'Account Created', $scope.email + "You are now register!"); // this is the custom alert which is created by me inside the alert service
        authToken.setToken(res.token);
      })
      .error(function(err) {
        //  console.log("=============>>BAD<<=============");
        alert('warning', 'Opps!', $scope.email + 'could not register'); // this is the custom alert which is created by me inside the alert service
      });
  }

});
