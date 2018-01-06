
import { Age } from './../js/scripts.js';

$(document).ready(function(){
  $('form#age-form').submit(function(event){
    event.preventDefault();
    const age = parseInt($('input#age').val());
    const year = parseInt($('input#year').val());
    const newAge = new Age(age, year);
    const output = newAge.toSecs(age);
    const yearOutput = newAge.yearComp(year);
    $('#age-display').append('<li>' + 'you are ' + output + ' earth-seconds old.' + '</li>');
    $('#age-display').append('<li>' + 'you are ' + yearOutput + ' years old.' + '</li>');
  });
});
