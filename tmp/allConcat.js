
import { Age } from './js/scripts.js';

$(document).ready(function(){
  $('form#age-form').submit(function(event){
    event.preventDefault();
    const age = parseInt($('#age').val());
    const person = new Age (age);
    let output = ageToSecs();
  });
  $('#age-disp').append('<li>' + output + '</li>');
});


// export class Age {
//   constructor(age) {
//     this.age = age;
//   }
//
//   ageToSecs(age) {
//     console.log(age);
//     // return (age * 31,536,000)
//   }
// };