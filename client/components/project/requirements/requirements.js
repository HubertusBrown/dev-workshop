'use strict';

function requirements() {

  var reqs = scorecard();
  var completion = scorecard();

  function getRequirementsScorecard() {
    return reqs;
  }

  function getCompletion() {
    return completion;
  }

  function setRequirement(phase, value) {
    reqs.addPoints(phase, value);
  }

  function increaseCompletion(phase, value) {
    var points = validate(phase, value);
    completion.addPoints(phase, points);

  }

  function getRequiredValue(phase) {
    return reqs.getPoints(phase);
  }

  function getCompletionValue(phase) {
    return completion.getPoints(phase);
  }

  function applyScorecard(scorecard) {
    increaseCompletion(Phases.ANALYSIS, scorecard.getPoints(Phases.ANALYSIS));
    increaseCompletion(Phases.DOCUMENTATION, scorecard.getPoints(Phases.DOCUMENTATION));
    increaseCompletion(Phases.IMPLEMENTATION, scorecard.getPoints(Phases.IMPLEMENTATION));
    increaseCompletion(Phases.TESTING, scorecard.getPoints(Phases.TESTING));
  }

  function validate(phase, value) {
    var reqPoints = getRequiredValue(phase);
    var complPoints = getCompletionValue(phase);
    if (complPoints >= reqPoints) return 0;
    if (complPoints + value > reqPoints) {
      return reqPoints - complPoints;
    } else {
      return value;
    }
  }

  return {
    getRequirementsScorecard: getRequirementsScorecard,
    setRequirement: setRequirement,
    increaseCompletion: increaseCompletion,
    getCompletion: getCompletion,

    getRequiredValue: getRequiredValue,
    getCompletionValue: getCompletionValue,

    applyScorecard: applyScorecard
  }

}
