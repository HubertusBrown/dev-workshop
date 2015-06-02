'use strict';

angular.module('devApp')
  .factory('projectsService', [function () {
    var projects = [];


    function clear() {
      projects = [];
    }

    function getProjects() {
      return projects;
    }

    function addProject(project) {
      projects.push(project);
    }


    function addSampleProject() {
      var projekt = project("Controller for the Slavetna Nuclear Plant.");
      projekt.setCustomer("Marlon Kozaky Company");

      var projektContract = projectContract();
      projektContract.setPaymentBefore(7500);
      projektContract.setPaymentAfter(35000);
      projektContract.setDeadline(52);
      projekt.setContract(projektContract);


      var req = requirements();
      req.setRequirement(Phases.ANALYSIS, 20);
      req.setRequirement(Phases.DOCUMENTATION, 29);
      req.setRequirement(Phases.IMPLEMENTATION, 66);
      req.setRequirement(Phases.TESTING, 41);
      projekt.setRequirements(req);

      var description = "Times are changing - nuclear power is starting to become more efficient and common. " +
        "One of recently built nuclear plants in Eastern Russia needs a software for their overheat backup controller. " +
        "The task is well documented and involves some operations on high precision floating-point numbers." +
        "This is a perfect chance to prove yourself as a team of well respected professionals as you truly are. " +
        "The whole world is at your feet. Besides, what could possibly go wrong?";
      projekt.setDescription(description);

      addProject(projekt);
    }

    return {
      clear: clear,
      getProjects: getProjects,
      addProject: addProject,
      addSampleProject: addSampleProject
    }

  }]);

