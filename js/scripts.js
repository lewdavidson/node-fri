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
  mercuryYears(age) {
    return age * .24;
  }
  venusYears(age) {
    return age * .62;
  }
  marsYears(age) {
    return Math.floor(age * 1.88);
  }
  jupiterYears(age) {
    return Math.floor(age * 11.86);
  }
}
