'use strict';

angular.module('devApp')
  .directive('skillTable', function () {

    return {
      restrict: 'E',
      templateUrl: 'components/developer/skills//skill-table.html',
      controller: ['$scope', SkillTableController],
      scope: {
        skillGroup: '=group',
        member: '=member'
      }

    };


    function SkillTableController($scope) {
      $scope.getSkills = function () {
        return $scope.member.getSkills().getSkillsForGroup($scope.skillGroup);
      }
    }

  });
