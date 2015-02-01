var ENTER_KEY = 13;

module.exports = function(els) {
  if (!els) return
  if (els.length === undefined) return enterMeansSubmit(els)

  for (var i = 0; i < els.length; ++i) {
    enterMeansSubmit(els[i]);
  }
}

function getSubmitTarget(el) {
  var targets = el.getElementsByTagName('button')
  for (var i = 0; i < targets.length; i++) {
    var target = targets[i]
    if (target.type == 'submit') {
      return target
    }
  }
  console.error('could not find corresponding button')
  return false
}

function enterMeansSubmit(el) {
  if (!el || !el.getElementsByTagName) return

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
