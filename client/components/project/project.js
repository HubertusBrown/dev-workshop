'use strict';

function project(name) {

  var quality = 0;
  var projectRequirements = requirements();
  var weeksWorked = 0;
  var assigned = false;
  var description = "";
  var customer = "";
  var contract = projectContract();

  function getName() {
    return name;
  }

  function setName(value) {
    name = value;
  }

  function setQuality(value) {
    quality = value;
  }

  function getQuality() {
    return quality;
  }

  function setRequirements(requirements) {
    projectRequirements = requirements;
  }

  function getRequirements() {
    return projectRequirements;
  }

  function hasDeadline() {
    return contract.hasDeadline();
  }

  function getWeeksLeft() {
    return contract.getDeadlineWeeksLeft();
  }

  function getWeeksWorked() {
    return weeksWorked;
  }

  function increaseWeek() {
    if (assigned) {
      weeksWorked++;
    }
    if (hasDeadline()) {
      contract.reduceWeeksLeft();
    }
  }

  function setContract(value) {
    contract = value;
  }

  function setAssigned(value) {
    assigned = value;
  }

  function isAssigned() {
    return assigned;
  }

  function applyScorecard(scorecard) {
    projectRequirements.applyScorecard(scorecard);
  }

  function getDescription() {
    return description;
  }

  function setDescription(desc) {
    description = desc;
  }

  function getCustomer() {
    return customer;
  }

  function setCustomer(value) {
    customer = value;
  }

  return {
    getName: getName,
    setName: setName,
    getQuality: getQuality,
    setQuality: setQuality,
    setRequirements: setRequirements,
    getRequirements: getRequirements,
    getWeeksLeft: getWeeksLeft,
    hasDeadline: hasDeadline,
    getWeeksWorked: getWeeksWorked,
    increaseWeek: increaseWeek,
    setAssigned: setAssigned,
    isAssigned: isAssigned,
    getDescription: getDescription,
    setDescription: setDescription,
    getCustomer:getCustomer,
    setCustomer:setCustomer,
    setContract:setContract,

    applyScorecard: applyScorecard
  }

}
