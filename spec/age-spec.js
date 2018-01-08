import { Age } from './../js/scripts.js';


describe('Age', function() {

  it('should test whether output is a number', function() {
    var barf = new Age()
    expect(barf.toSecs(2)).toBeNumber();
  });
});
