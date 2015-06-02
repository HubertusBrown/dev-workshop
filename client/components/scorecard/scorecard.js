'use strict';

function scorecard() {

  var scorecard = [[Phases.ANALYSIS, 0], [Phases.DOCUMENTATION, 0], [Phases.IMPLEMENTATION, 0], [Phases.TESTING, 0]];

  function addPoints(phase, value) {
    getPhase(phase)[1] += value;
  }

  function getPoints(phase) {
    return getPhase(phase)[1];
  }

  function getPhase(phase) {
    for (var i = 0; i < scorecard.length; i++) {
      if (scorecard[i][0] === phase) {
        return scorecard[i];
      }
    }
    return null;
  }

  function toString() {
    var str = "";
    for (var i = 0; i < scorecard.length; i++) {
      str += scorecard[i][0] + ": " + scorecard[i][1] + "; ";
    }

    return str;
  }

  return {
    addPoints: addPoints,
    getPoints: getPoints,
    toString: toString
  }
}
