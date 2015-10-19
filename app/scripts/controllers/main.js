'use strict';

/**
 * @ngdoc function
 * @name psJwtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the psJwtApp
 */
console.log("inside main controller");
angular.module('psJwtApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
