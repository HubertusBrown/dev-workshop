'use strict';

function projectContract() {

  var paymentBefore = 0;
  var paymentAfter = 0;

  var deadline = false;
  var weeksLeft;


  function getPaymentBefore() {
    return paymentBefore;
  }

  function setPaymentBefore(value) {
    paymentBefore = value;
  }

  function getPaymentAfter() {
    return paymentAfter;
  }

  function setPaymentAfter(value) {
    paymentAfter = value;
  }

  function hasDeadline() {
    return deadline;
  }

  function getDeadlineWeeksLeft() {
    return weeksLeft;
  }

  function reduceWeeksLeft() {
    weeksLeft--;
  }

  function setDeadline(weeks) {
    weeksLeft = weeks;
    deadline = true;
  }

  return {
    getPaymentBefore: getPaymentBefore,
    setPaymentBefore: setPaymentBefore,
    getPaymentAfter: getPaymentAfter,
    setPaymentAfter: setPaymentAfter,
    hasDeadline: hasDeadline,
    getDeadlineWeeksLeft: getDeadlineWeeksLeft,
    setDeadline: setDeadline,
    reduceWeeksLeft: reduceWeeksLeft

  }


}
