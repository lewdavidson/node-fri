export class Age {
  constructor(age, time) {
    this.age = 23;
    this.time = time;
  }
  ageToSecs(age) {
    const newAge = (age * 31);
    console.log(newAge);
    return newAge;
  }
};
