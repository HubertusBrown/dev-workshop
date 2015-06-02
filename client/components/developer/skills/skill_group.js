'use strict';

var SkillGroups = {
  DEVELOPMENT: 'Development',
  PROGRAMMING_LANGUAGES: 'Programming languages',
  KNOWLEDGE: 'Knowledge',
  SOCIAL: 'Social',
  ATTRIBUTES: 'Attributes',
  STATUS: 'Status',

  getSkillNames: function (group) {
    switch (group) {
      case SkillGroups.DEVELOPMENT :
        return [SkillNames.ANALYSING, SkillNames.SPECIFICATION,
          SkillNames.CODING, SkillNames.DOCUMENTATION, SkillNames.PROGRAMMING_KNOWLEDGE, SkillNames.TESTING];
      case SkillGroups.PROGRAMMING_LANGUAGES :
        return [SkillNames.CPP, SkillNames.JAVA];
      case SkillGroups.KNOWLEDGE :
        return [SkillNames.DATABASES, SkillNames.SECURITY, SkillNames.NETWORKING];
      case SkillGroups.SOCIAL :
        return [SkillNames.TEAMWORK, SkillNames.CLIENT_INTERACTION, SkillNames.SHARING_KNOWLEDGE,
          SkillNames.INTERNATIONAL_COOPERATION];
      case SkillGroups.ATTRIBUTES :
        return [SkillNames.LEARNING, SkillNames.CREATIVITY, SkillNames.CLEANINGNESS, SkillNames.HUMOR,
          SkillNames.RESISTANCE_TO_CHANGE, SkillNames.STRESS_RESISTANCE];
      case SkillGroups.STATUS :
        return [SkillNames.HAPPINESS, SkillNames.HEALTH, SkillNames.MENTAL_HEALTH, SkillNames.PASSION,
          SkillNames.COMPANY_DEDICATION, SkillNames.STRESS];
    }
  }
};

SkillGroups.array = [SkillGroups.DEVELOPMENT, SkillGroups.PROGRAMMING_LANGUAGES, SkillGroups.KNOWLEDGE, SkillGroups.SOCIAL, SkillGroups.ATTRIBUTES, SkillGroups.STATUS];

var SkillNames = {
  ANALYSING: "Analysing",
  SPECIFICATION: "Specification",
  CODING: "Coding",
  DOCUMENTATION: "Documentation",
  PROGRAMMING_KNOWLEDGE: "Programming knowledge",
  TESTING: "Testing",

  CPP: "C++",
  JAVA: "Java",

  DATABASES: "Databases",
  SECURITY: "Security",
  NETWORKING: "Networking",

  TEAMWORK: "Teamwork",
  CLIENT_INTERACTION: "Client interaction",
  SHARING_KNOWLEDGE: "Sharing knowledge",
  INTERNATIONAL_COOPERATION: "International cooperation",

  LEARNING: "Learning",
  CREATIVITY: "Creativity",
  CLEANINGNESS: "Cleaningness",
  HUMOR: "Humor",
  RESISTANCE_TO_CHANGE: "Resistance to change",
  STRESS_RESISTANCE: "Stress resistance",

  HAPPINESS: "Happiness",
  HEALTH: "Health",
  MENTAL_HEALTH: "Mental health",
  PASSION: "Passion",
  COMPANY_DEDICATION: "Company dedication",
  STRESS: "Stress"
};

SkillNames.array = [SkillNames.ANALYSING, SkillNames.SPECIFICATION, SkillNames.CODING, SkillNames.DOCUMENTATION, SkillNames.PROGRAMMING_KNOWLEDGE, SkillNames.TESTING,
  SkillNames.CPP, SkillNames.JAVA, SkillNames.DATABASES, SkillNames.SECURITY, SkillNames.NETWORKING, SkillNames.TEAMWORK, SkillNames.CLIENT_INTERACTION,
  SkillNames.SHARING_KNOWLEDGE, SkillNames.INTERNATIONAL_COOPERATION, SkillNames.LEARNING, SkillNames.CREATIVITY, SkillNames.CLEANINGNESS,
  SkillNames.HUMOR, SkillNames.RESISTANCE_TO_CHANGE, SkillNames.STRESS_RESISTANCE, SkillNames.HAPPINESS, SkillNames.HEALTH,
  SkillNames.MENTAL_HEALTH, SkillNames.PASSION, SkillNames.COMPANY_DEDICATION, SkillNames.STRESS];

var MAX_SKILL_LEVEL = 100;
var MIN_SKILL_LEVEL = 0;
