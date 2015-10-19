'use strict';


angular.module('psJwtApp')
  .controller('JobsCtrl', function ($scope,$http,API_URL,alert) {
    
    $http.get(API_URL + 'jobs').success(function(jobs){
        $scope.jobs = jobs;
    }).error(function(err){
        alert('warning',"unable to get jobs,Login or register First",err.message);
    })
    
  });

//alert is the service used for custom messages
//API_URL is the constant value defined in the app.config.js and it get initilized when the application start

// we need a interseptor which will add the token toi every request hitting to the server as the jobs api is the sequre api.