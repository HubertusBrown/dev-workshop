'use strict';

var app = angular.module('devApp');
app.directive('assignProjectButton', function () {

    return {

        restrict: 'E',
        templateUrl: "components/utils/assign-project-button.html",
        scope: {
            project: '=project'
        },
        controller: 'AssignProjectButtonController'
    };

});

app.controller('AssignProjectButtonController', ['$scope', 'teamService', function ($scope, teamService) {

    $scope.getAssignedTeam = function () {
        return teamService.getTeamForProject($scope.project);
    };

    $scope.displayAssignedTeamName = function () {
        return $scope.getAssignedTeam() ? $scope.getAssignedTeam().getTeamName() : "--none--";
    };

    $scope.getTeams = function () {
        return teamService.getTeams();
    };

    $scope.assignToTeam = function (team) {
        teamService.assignProject($scope.project, team);
    };

    $scope.unassign = function () {
        teamService.unassignProject($scope.project);
    };

}]);
