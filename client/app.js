'use strict';

var app = angular.module('devApp', [
    'ngRoute'
]);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'components/partials/main.html'
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

});
