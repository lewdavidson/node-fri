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
    if (age >= 300) {
      return("You're probably dead, seeing as you're over 70 Mercury years old, and well over the life-expectancy for Earth.")
    } else {
      return age * .24;
    }
  }
  venusYears(age) {
    if (age >= 140) {
      return("You're probably dead, seeing as you're over 88 Venus years old, and well over the life-expectancy for Earth.")
    } else {
      return age * .64;
    }
  }
  marsYears(age) {
    if (age >= 50) {
      return("You'd probably dead on Mars, seeing as you're over 94 Mars years old.")
    } else {
      return Math.floor(age * 1.88);
    }
  }
  jupiterYears(age) {
    if (age >= 9) {
      return("You'd probably dead on Jupiter, seeing as you're over 94 Jupiter years old.")
    } else {
      return Math.floor(age * 11.86);
    }
  }
}
