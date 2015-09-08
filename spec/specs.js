describe('triangleTracker', function() {
  it("is true if three sides exist", function() {
    expect(triangleTracker(1,2)).to.equal(false);
  });

  it("is true if a valid triangle", function() {
    expect(triangleTracker(5, 4, 8)).to.equal(true);
  });

  it("is equilateral triangle", function() {
    expect(triangleTracker(5,5,5)).to.equal(true);
  });

  it("is isosceles triangle", function() {
    expect(triangleTracker(5,5,4)).to.equal(true);
  });

  it("is scalene triangle", function() {
    expect(triangleTracker(5,6,4)).to.equal(true);
  });
});
