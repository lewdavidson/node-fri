export class Age {
  constructor(age) {
    this.age = age;
    console.log(age);
  }
  toSecs(age) {
   return age * Math.pow(3.154, 7);
  }
}
