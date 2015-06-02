'use strict';

function skillCalculator() {

  function generateMemberScorecard(member) {
    var points = scorecard();

    var memberSkills = member.getSkills();
    var memberRole = member.getRole();
    var rolePhases = memberRole.getPhases();
    for (var i = 0; i < rolePhases.length; i++) {
      var phase = rolePhases[i][0];
      var weight = rolePhases[i][1];
      calculatePointsByPhase(phase, weight, memberSkills, points);
    }
    return memberScorecard(member, points);
  }

  function generateTeamScorecard(team) {
    var teamScorekard = teamScorecard(team);

    var teamMembers = team.getMembers();
    for (var i =0;i<team.getMemberCount();i++) {

      teamScorekard.addMemberScorecard(generateMemberScorecard(teamMembers[i]));
    }
    return teamScorekard;
  }



  function calculatePointsByPhase(phase, weight, skills, points) {
    switch (phase) {
      case Phases.ANALYSIS :
        return calculateAnalysisPoints(weight, skills, points);
      case Phases.DOCUMENTATION :
        return calculateDocumentationPoints(weight, skills, points);
      case Phases.IMPLEMENTATION :
        return calculateImplementationPoints(weight, skills, points);
      case Phases.TESTING :
        return calculateTestingPoints(weight, skills, points);
    }
  }

  function calculateAnalysisPoints(weight, skills, points) {
    var value = 0;
    value += skills.getSkillValue("Analysing") * 2;

    value += skills.getSkillValue("Specification") * 0.2;
    value += skills.getSkillValue("Coding") * 0.1;
    value += skills.getSkillValue("Documentation") * 0.1;
    value += skills.getSkillValue("Client interaction") * 0.4;
    value += skills.getSkillValue("Learning") * 0.2;
    value += skills.getSkillValue("Creativity") * 0.1;
    value += skills.getSkillValue("Happiness") * 0.1;
    value += skills.getSkillValue("Health") * 0.1;
    value += skills.getSkillValue("Mental health") * 0.5;
    value += skills.getSkillValue("Passion") * 0.2;
    value += skills.getSkillValue("Company dedication") * 0.1;

    value -= skills.getSkillValue("Stress") * 0.2;

    if (value < 0) {
      value = 0;
    }

    //0-210 pts - 20 stress
    //0-10
    points.addPoints(Phases.ANALYSIS, Math.round(value / 20 * weight));
  }

  function calculateDocumentationPoints(weight, skills, points) {
    var value = 0;

    value += skills.getSkillValue("Documentation") * 2;

    value += skills.getSkillValue("Specification") * 0.5;
    value += skills.getSkillValue("Coding") * 0.1;
    value += skills.getSkillValue("Teamwork") * 0.1;
    value += skills.getSkillValue("Sharing knowledge") * 0.5;

    value += skills.getSkillValue("Learning") * 0.1;
    value += skills.getSkillValue("Creativity") * 0.4;

    value += skills.getSkillValue("Happiness") * 0.1;
    value += skills.getSkillValue("Health") * 0.1;
    value += skills.getSkillValue("Mental health") * 0.5;
    value += skills.getSkillValue("Passion") * 0.2;
    value += skills.getSkillValue("Company dedication") * 0.1;

    value -= skills.getSkillValue("Stress") * 0.2;

    if (value < 0) {
      value = 0;
    }

    //0-470 pts - 20 stress
    //0-13 pts
    return points.addPoints(Phases.DOCUMENTATION, Math.round(value / 40 * weight));
  }

  function calculateImplementationPoints(weight, skills, points) {
    var value = 0;

    value += skills.getSkillValue("Coding") * 2;

    value += skills.getSkillValue("Analysing") * 0.3;
    value += skills.getSkillValue("Specification") * 0.1;
    value += skills.getSkillValue("Programming knowledge") * 0.75;
    value += skills.getSkillValue("Testing") * 0.2;

    value += skills.getSkillValue("Teamwork") * 0.2;
    value += skills.getSkillValue("Sharing knowledge") * 0.2;
    value += skills.getSkillValue("Learning") * 0.1;
    value += skills.getSkillValue("Creativity") * 0.2;

    value += skills.getSkillValue("Happiness") * 0.1;
    value += skills.getSkillValue("Health") * 0.1;
    value += skills.getSkillValue("Mental health") * 0.3;
    value += skills.getSkillValue("Passion") * 0.5;
    value += skills.getSkillValue("Company dedication") * 0.1;

    value -= skills.getSkillValue("Stress") * 0.4;

    if (value < 0) {
      value = 0;
    }

    //0-515 pts - 40 stress
    //0-13 pts
    return points.addPoints(Phases.IMPLEMENTATION, Math.round(value / 40 * weight));
  }

  function calculateTestingPoints(weight, skills, points) {
    var value = 0;

    value += skills.getSkillValue("Testing") * 2;

    value += skills.getSkillValue("Specification") * 0.1;
    value += skills.getSkillValue("Coding") * 0.5;
    value += skills.getSkillValue("Analysing") * 0.3;
    value += skills.getSkillValue("Programming knowledge") * 0.3;

    value += skills.getSkillValue("Teamwork") * 0.1;
    value += skills.getSkillValue("Sharing knowledge") * 0.1;
    value += skills.getSkillValue("Learning") * 0.1;
    value += skills.getSkillValue("Creativity") * 0.2;

    value += skills.getSkillValue("Happiness") * 0.1;
    value += skills.getSkillValue("Health") * 0.1;
    value += skills.getSkillValue("Mental health") * 0.1;
    value += skills.getSkillValue("Passion") * 0.2;
    value += skills.getSkillValue("Company dedication") * 0.1;

    value -= skills.getSkillValue("Stress") * 0.1;

    if (value < 0) {
      value = 0;
    }

    //0-430 pts - 10 stress
    //0-11 pts
    return points.addPoints(Phases.TESTING, Math.round(value / 40 * weight));

  }


  return {
    generateTeamScorecard:generateTeamScorecard
  }
}
