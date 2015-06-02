'use strict';

var app = angular.module('devApp');

app.directive('developerSummary', function () {
    return {
        restrict: 'E',
        templateUrl: "components/developer/panels/developer-summary.html",
        controller: 'DeveloperSummaryController',
        scope: {
            member: '='
        }
    };


});


app.controller('DeveloperSummaryController', ['$scope', 'companyService', function ($scope, companyService) {

    $scope.sackDeveloper = companyService.sackDeveloper;

    $scope.getSkillGroups = function () {
        return SkillGroups.array;
    };

}]);
