'use strict';

var app = angular.module('devApp');

app.directive('developerMarket', function () {
    return {
        restrict: 'E',
        templateUrl: "components/developer/panels/developer-market.html",
        controller: 'DeveloperMarketController',
        scope: {
            member: '='
        }
    };


});

app.controller('DeveloperMarketController', ['$scope', 'companyService', function ($scope, companyService) {
    var hidden = true;

    $scope.hireDeveloper = function () {
        companyService.hireDeveloper($scope.member);
        //marketService.removeDevFromMarket($scope.member);
    };

    $scope.getSkillGroups = function () {
        return SkillGroups.array;
    };

    $scope.isHidden = function () {
        return hidden;
    };

    $scope.toggleHidden = function () {
        hidden = !hidden;
    };

    $scope.getToggleHiddenButtonText = function () {
        return hidden ? "Show" : "Hide";
    }
}]);
