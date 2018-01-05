
import { Age } from './../js/scripts.js';

$(document).ready(function(){
  $('form#age-form').submit(function(event){
    event.preventDefault();
    const blah = new Age();
    const age = parseInt($('#age').val());
    const output = blah.ageToSecs(age);
    $('#age-disp').append('<li>' + output + '</li>');
  });
});
