'use strict';

var app = angular.module('devApp');

app.directive('projectsPanel', function () {

    return {
        restrict: 'E',
        templateUrl: "components/project/projects.html",
        controller: 'ProjectsController',
        scope: {}
    };


});

app.controller('ProjectsController', ['$scope', 'projectsService', 'testerHelperService', function ($scope, projectsService, testerHelperService) {

        $scope.isTesterMode = testerHelperService.isTesterMode;


        $scope.getProjects = function () {
            return projectsService.getProjects();
        };

        $scope.addProject = function (project) {
            projectsService.addProject(project);
        };

        $scope.addSampleProject = function () {
            projectsService.addSampleProject();
        };
    }]
);

