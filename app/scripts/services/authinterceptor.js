'use strict';

//here i am injecting this factory to every request we send to the backend
// i passed the autToken factory here as the dependency
angular.module('psJwtApp').factory('authInterceptor', function (authToken) {
    return {
        request: function (config) {
            var token = authToken.getToken();

            if (token)
                config.headers.Authorization = 'Bearer ' + token;

            return config;
        },
        response: function (response) {
            return response;
        }

    };
});