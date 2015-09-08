describe('triangleTracker', function() {
  it("is true if three sides exist", function() {
    expect(triangleTracker(1,2)).to.equal(false);
  });

  it("is true if a valid triangle", function() {
    expect(triangleTracker(5, 4, 8)).to.equal(true);
  });
});
