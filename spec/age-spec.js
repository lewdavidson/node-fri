
describe('Age', function() {

  it('should test whether output is a number', function() {
    const bday = new Age(age)
    expect(bday.age).toBeNumber()
  });
});
