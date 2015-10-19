'use strict';
//directive used to verify the password is same or not
//view course for directive on angular site 
//REFER: https://masteringmean.com/lessons/320-Building-Your-Own-Directives-Validation-and-Wrapping-Directives

angular.module('psJwtApp').directive('validateEquals', function () {
    return {

//ng-model is the directive and ngModelCtrl is the directive controller for ng-model
      require: 'ngModel', //we can require as many as directives as a string of arrays //Each string must be the canonical name of the directive whose controller we require

// element is all the tags <div> inside ng-app
//attrs : it is the attributes for the element <div name = "password"> here name is attr
        link: function(scope,element,attrs,ngModelCtrl) {
            function validateEqual(value){
                var valid = (value === scope.$eval(attrs.validateEquals));
                ngModelCtrl.$setValidity('equal',valid);
                return valid ? value : undefined;
            }
//$parser: A pipeline of functions that will be called in turn when the value of the input element changes.
            ngModelCtrl.$parsers.push(validateEqual);
//$formatter: A pipeline of functions that will be called in turn when the value of the m1odel changes.
            ngModelCtrl.$formatters.push(validateEqual);
            
/* In this directive we also have to take into account the model we are comparing against changing. We do this by setting up a watch on the expression, which we retrieve from the attrs parameter of the linking function. When it does change, we artificially trigger the $parsers pipeline to run by calling $setViewValue(). This ensures that all potential $parsers are run in case any of them modify the model value before it gets to our validator. */
            scope.$watch(attrs.validateEquals,function(){
                ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
            })
        }
    };
  });
