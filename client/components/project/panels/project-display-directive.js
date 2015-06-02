'use strict';

angular.module('devApp')
    .directive('projectDisplay', function () {

        return {

            restrict: 'E',
            templateUrl: "components/project/panels/project-display.html",
            controller: 'ProjectDisplayController',
            scope: {
                project: '=project'
            }

        };


    })
    .controller('ProjectDisplayController', ['$scope', function ($scope) {

        $scope.fullView = true;

        $scope.toggleFullView = function () {
            $scope.fullView = !$scope.fullView;
        };

        $scope.getCompletionValue = function (phase) {
            return $scope.project.getRequirements().getCompletionValue(phase);
        };

        $scope.getPercentageDone = function (phase) {
            return $scope.project.getRequirements().getCompletionValue(phase) / $scope.project.getRequirements().getRequiredValue(phase) * 100;
        };

        $scope.getRequiredValue = function (phase) {
            return $scope.project.getRequirements().getRequiredValue(phase);
        };

        $scope.getPhases = function () {
            return Phases.array;
        };

        $scope.getDeadlineInfo = function () {
            return $scope.project.getWeeksLeft() ? $scope.project.getWeeksLeft() + ' weeks' : '--no deadline--';
        }
    }]);
