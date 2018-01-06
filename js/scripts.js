export class Age {
  constructor(age, year) {
    this.age = age;
    this.year = year;
  }
  toSecs(age) {
   return age * Math.pow(3.154, 7);
  }
  yearComp(year) {
    return Math.floor(2018 - year);
  }
}
