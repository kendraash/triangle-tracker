var triangleTracker = function(a, b, c) {
  if ((a !== null || b !== null || c !== null) && (a + b > c && b + c > a && c + a > b)) {
    //return true;
    var type;
    if (a===b && b===c) {
      return "a equilateral"

    } else if (a===b || b===c || a===c) {
        type = "a isosceles";
        return true;
    } else {
      type = "a scalene";
      return true;
    }
  }
  else {
    type = "not a triangle";
  }
  return type;
};

$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());

    var result = triangleTracker(a, b, c);

    var triangle = [a, b, c]
    $(".a").text(a);
    $(".b").text(b);
    $(".c").text(c);
    $(".triangle").text(triangle);
    $(".result").text(result);
    $("#result").show();
    event.preventDefault();
  })
})
