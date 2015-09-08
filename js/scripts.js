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
