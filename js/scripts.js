export class Age {
  constructor(age, time) {
    this.age = age;
    console.log(age);
    this.time = time;
  }
  toSecs(age) {
    console.log(age);
    const newAge = 31;
    return age * newAge;
  }
};
