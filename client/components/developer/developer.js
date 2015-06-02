'use strict';

function developer() {

  var name;
  var sex;
  var dateOfBirth;
  var contract;
  var nationality;
  var languagesSpoken = [];
  var skillz = skills();
  var perks = [];
  var picture;
  var role = Roles.ALL_AROUND;

  function getName() {
    return name;
  }

  function setName(value) {
    name = value;
  }

  function getSex() {
    return sex;
  }

  function setSex(value) {
    sex = value;
  }

  function getDateOfBirth() {
    return dateOfBirth;
  }

  function setDateOfBirth(value) {
    dateOfBirth = value;
  }

  function getNationality() {
    return nationality;
  }

  function setNationality(value) {
    nationality = value;
  }

  function getLanguagesSpoken() {
    return languagesSpoken;
  }

  function setLanguagesSpoken(value) {
    languagesSpoken = value;
  }

  function getContract() {
    return contract;
  }

  function setContract(value) {
    contract = value;
  }

  function getSkills() {
    return skillz;
  }

  function setSkills(value) {
    skillz = value;
  }

  function getRole() {
    return role;
  }

  function setRole(value) {
    role = value;
  }

  return {
    getName: getName,
    setName: setName,
    getSex: getSex,
    setSex: setSex,
    getDateOfBirth: getDateOfBirth,
    setDateOfBirth: setDateOfBirth,
    getContract: getContract,
    setContract: setContract,
    getNationality: getNationality,
    setNationality: setNationality,
    getLanguagesSpoken: getLanguagesSpoken,
    setLanguagesSpoken: setLanguagesSpoken,
    getSkills: getSkills,
    setSkills: setSkills,
    getRole: getRole,
    setRole: setRole
  }


};

