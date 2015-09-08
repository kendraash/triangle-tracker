var triangleTracker = function(a, b, c) {
  if ((a !== null || b !== null || c !== null) && (a + b > c && b + c > a && c + a > b)) {
    //return true;
    var type;
    if (a===b && b===c) {
      return "equilateral"

    } else if (a===b || b===c || a===c) {
        type = "isosceles";
        return true;
    } else {
      type = "scalene";
      return true;
    }
  }
  else {
    type = "fake triangle";
  }
  return type;
};

$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());

    var result = triangleTracker(a, b, c);

    //
    var triangle = [a, b, c]
    // var equilateral = (a === b === c)
    // var scalene = (a===b || b===c || a===c)
    // var isosceles = (a===b && b===c)
    $(".triangle").text(triangle);
    // if (!result) {
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("")
    // }

    $(".result").text(result);

    // if (result == 'equilateral') {
    //   $(".equilateral").text(result)
    // } else {
    //   $(".equilateral").text("")
    // }

    $("#result").show();
    event.preventDefault();
  })
})
