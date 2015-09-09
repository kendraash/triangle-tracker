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
    var pointA = "0,0 ";
    var pointB = "0," + (a*30) + " ";
    var pointC = ((b*30) + "," + (c*30));
    var triangle = [a, b, c]
// document.write(pointA + pointB + pointC);
    var string = '<svg id="polygon" height="310" width="600"><polygon points="' + pointA + pointB + pointC + '" style="fill:lime;stroke:purple;stroke-width:1" /></svg>';
    $(".polygon").append(string);

    $(".triangle").text(triangle);
    $(".result").text(result);
    $("#result").show();
    event.preventDefault();
  })
})
