'use strict';

angular.module('devApp')
  .factory('developerService', function () {


    //@Testing
    function createJake() {
      var jake = developer();
      jake.setName("Jake Stone");
      jake.setSex("M");
      jake.setDateOfBirth(new Date());
      jake.setContract(employeeContract(500, new Date()));
      jake.setNationality("Polish");
      jake.setLanguagesSpoken(["Polish", "English"]);
      return jake;
    }

    function createRandomDeveloper() {
      console.log("Create random developer");
    }

    return {
      createJake: createJake,
      createRandomDeveloper: createRandomDeveloper

    }

  });
