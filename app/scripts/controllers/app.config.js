'use strict';

//httpprovider is for the request interseptor
angular.module('psJwtApp').config(function($urlRouterProvider,$stateProvider,$httpProvider){

    
    console.log("inside app.config.js");    
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    
    .state('main',{
        url: '/',
        templateUrl: '/views/main.html'
    })
    
    .state('jobs',{
        url: '/jobs',
        templateUrl: '/views/jobs.html',
        controller: 'JobsCtrl'
    })
    
    .state('register',{
        url: '/register',
        templateUrl: '/views/register.html',
        controller: 'RegisterCtrl'
    })
    
    
    .state('logout',{
        url: '/logout',
        controller: 'LogoutCtrl'
    });
    
    $httpProvider.interceptors.push('authInterceptor');
})
.constant('API_URL', 'http://localhost:3000/');
