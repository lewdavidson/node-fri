export class Age {
  constructor(age) {
    this.age = age;
    console.log(age);
  }
  toSecs(age) {
   return age * 31;
  }
}
