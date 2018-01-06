
describe('Age', function() {

  it('should test whether output is a number', function() {
    var barf = new Age(2)
    expect(barf.toSecs()).toBeNumber();
  });
});
