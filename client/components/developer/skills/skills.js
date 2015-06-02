'use strict';

function skills() {

  var skills = [];

  var init = function () {
    var skillnames = SkillNames.array;
    for (var i = 0; i < skillnames.length; i++) {
      skills.push(skill(skillnames[i]));
    }
    //@Testing
    setSampleSkills();
  }();

  //@Testing
  function setSampleSkills() {
    setSkillValue("Analysing", 5);
    setSkillValue("Specification", 51);
    setSkillValue("Coding", 22);
    setSkillValue("Documentation", 13);
    setSkillValue("Programming knowledge", 19);
    setSkillValue("Testing", 58);

    setSkillValue("C++", 58);
    setSkillValue("Java", 58);

    setSkillValue("Databases", 20);
    setSkillValue("Security", 71);
    setSkillValue("Networking", 5);

    setSkillValue("Teamwork", 27);
    setSkillValue("Client interaction", 11);
    setSkillValue("Sharing knowledge", 32);
    setSkillValue("International cooperation", 10);

    setSkillValue("Learning", 66);
    setSkillValue("Creativity", 43);
    setSkillValue("Cleaningness", 68);
    setSkillValue("Humor", 51);
    setSkillValue("Resistance to change", 20);
    setSkillValue("Stress resistance", 54);

    setSkillValue("Happiness", 84);
    setSkillValue("Health", 88);
    setSkillValue("Mental health", 74);
    setSkillValue("Passion", 42);
    setSkillValue("Company dedication", 11);
    setSkillValue("Stress", 7);
  }

  function getSkill(name) {
    for (var i = 0; i < skills.length; i++) {
      if (skills[i].getName() === name) {
        return skills[i];
      }
    }
  }

  function getSkills() {
    return skills;
  }

  function getSkillsForGroup(group) {
    var skillnames = SkillGroups.getSkillNames(group);
    var skillArray = [];
    for (var i = 0; i < skillnames.length; i++) {
      skillArray.push(getSkill(skillnames[i]));
    }
    return skillArray;
  }

  function getSkillValue(name) {
    return getSkill(name).getValue();
  }

  function setSkillValue(name, value) {
    getSkill(name).setValue(value);
  }

  function increaseSkillValue(name, value) {
    getSkill(name).increaseValue(value);
  }


  return {
    getSkill: getSkill,
    getSkills: getSkills,
    getSkillsForGroup: getSkillsForGroup,

    getSkillValue: getSkillValue,
    setSkillValue: setSkillValue,
    increaseSkillValue: increaseSkillValue
  }


}
