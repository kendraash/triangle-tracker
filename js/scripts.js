var triangleTracker = function(a, b, c) {
  if ((a !== null || b !== null || c !== null) && (a + b > c && b + c > a && c + a > b)) {
    return true;
    if (a===b && b===c) {
      return true;
    } else if (a===b || b===c || a===c) {
        return true;
    } else {
      return true
    }
  }
    else {
      return false;
  }
};

$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());

    var result = triangleTracker(a, b, c);

    $(".triangle").text(a, b, c);
    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("")
    }

    $("#result").show();
    event.preventDefault();
  })
})
