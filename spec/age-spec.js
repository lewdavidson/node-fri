
describe('Age', function() {

  it('should test whether output is a number', function() {
    const bday = new Age(age)
    console.log(bday);
    expect(bday.age).toBeNumber()
  });
});
