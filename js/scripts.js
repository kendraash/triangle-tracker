var triangleTracker = function(a, b, c) {
  if ((a !== null || b !== null || c !== null) && (a + b > c && b + c > a && c + a > b)) {
    return true;
  } else {
    return false;
  }
};
