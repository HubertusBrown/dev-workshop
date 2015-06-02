'use strict';

function skill(name) {

  var value = 0;

  function getName() {
    return name;
  }

  function getValue() {
    return value;
  }

  function setValue(val) {
    if (val > MAX_SKILL_LEVEL) {
      value = MAX_SKILL_LEVEL;
    } else if (val<MIN_SKILL_LEVEL) {
      value = MIN_SKILL_LEVEL;
    } else {
      value = val;
    }
  }

  function increaseValue(amount) {
    if (value + amount > MAX_SKILL_LEVEL) {
      value = MAX_SKILL_LEVEL;
    } else if (value + amount < MIN_SKILL_LEVEL) {
      value = MIN_SKILL_LEVEL;
    } else {
      value += amount;
    }
  }

  return {
    getName: getName,
    getValue: getValue,
    setValue: setValue,
    increaseValue: increaseValue
  }

}
