
import { Age } from './../js/scripts.js';

$(document).ready(function(){
  $('form#age-form').submit(function(event){
    event.preventDefault();
    const age = parseInt($('input#age').val());
    const newAge = new Age(age);
    const output = newAge.toSecs();
    $('#age-disp').append('<li>' + output + '</li>');
  });
})
