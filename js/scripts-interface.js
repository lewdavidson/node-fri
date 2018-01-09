
import { Age } from './../js/scripts.js';

$(document).ready(function(){
  $('form#age-form').submit(function(event){
    event.preventDefault();
    const age = parseInt($('input#age').val());
    const year = parseInt($('input#year').val());
    const newAge = new Age(age, year);
    const output = newAge.toSecs(age);
    const yearOutput = newAge.yearComp(year);
    const mercuryOutput = newAge.mercuryYears(age);
    const venusOutput = newAge.venusYears(age);
    const marsOutput = newAge.marsYears(age);
    const jupiterOutput = newAge.jupiterYears(age);

    $('#age-display').append('<li>' + 'You are ' + output + ' earth-seconds old.' + '</li>');
    $('#age-display').append('<li>' + ' and based on your birthday, you are ' + yearOutput + ' years old.' + '</li>');
    $('#age-display').append('<li>' + 'Lookie there! You are ' + mercuryOutput + ' years old on Mercury.' + '</li>');
    $('#age-display').append('<li>' + 'But you are only ' + venusOutput + ' years old on Venus.' + '</li>');
    $('#age-display').append('<li>' + 'And you are just ' + marsOutput + ' years old on Mars.' + '</li>');
    $('#age-display').append('<li>' + 'Wow! You are already  ' + jupiterOutput + ' years old on Jupiter!' + '</li>');
  });
});
