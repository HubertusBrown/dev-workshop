'use strict';

angular.module('devApp')
    .directive('teamDisplay', function () {

        return {
            restrict: 'E',
            templateUrl: "components/team/team-display.html",
            controller: 'TeamDisplayController',
            scope: {
                team: '=team'
            }

        };

    })
    .controller('TeamDisplayController', ['$scope', 'teamService', function ($scope, teamService) {

        $scope.getAssignedProjectName = function () {
            var project = $scope.team.getProject();
            return project ? project.getName() : "--none--";
        };

        $scope.deleteTeam = function () {
            teamService.deleteTeam($scope.team);
        }


    }]);
