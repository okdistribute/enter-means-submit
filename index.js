var ENTER_KEY = 13;

module.exports = function(els) {
  for (var i = 0; i < els.length; ++i) {
    enterMeansSubmit(els[i]);
  }
}

module.exports.

function getSubmitTarget(el) {
  var submitTarget = el.getElementsByTagName('button[type="submit"]')
  if (submitTarget.length == 0) {
    console.error('could not find corresponding button')
    return false
  }
  return submitTarget[0]
}

function enterMeansSubmit(el) {
  var inputs = el.getElementsByTagName("input")
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i]
    input.onkeypress = function (e) {
      e = e || window.event;
      if ((e.which && e.which == ENTER_KEY) ||
            (e.keyCode && e.keyCode == ENTER_KEY) ||
              (e.charCode && e.charCode == ENTER_KEY)) {
        getSubmitTarget(el).click()
        return false;
      } else {
        return true;
      }
    };
  }
}