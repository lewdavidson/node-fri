export class Age {
  constructor(age) {
    this.age = age;
  }
  toSecs(age) {
    return age * 31;
  }
};
