import { Age } from './../js/scripts.js';


describe('Age', function() {
  var ew = new Age();

  it('should test whether output is a number', function() {
    expect(ew.toSecs(2)).toBeNumber();
  });

  it('should return a value of  2.4 mercury years with an input of 10 years', function() {
    expect(ew.mercuryYears(10)).toEqual(2.4);
  });

  it('should return a value of 6.2 venus years with an input of 10 years', function() {
    expect(ew.venusYears(10)).toEqual(6.2);
  });

  it('should return a value of 18 mars years with an input of 10 years', function() {
    expect(ew.marsYears(10)).toEqual(18);
  });

  it('should return a value of 118 jupiter years with an input of 10 years', function() {
    expect(ew.jupiterYears(10)).toEqual(118);
  });

  it('should test that the user will recieve a string in response to an input of 300 or greater for Mercury', function() {
    expect(ew.mercuryYears(300)).toBeString();
  });
});
