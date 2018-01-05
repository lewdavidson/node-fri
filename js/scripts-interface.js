
import { Age } from './../js/scripts.js';

$(document).ready(function(){
  $('form#age-form').submit(function(event){
    event.preventDefault();
    const age = parseInt($('#age').val());
    const blah = new Age(age);
    const output = blah.toSecs(age);
    $('#age-disp').append('<li>' + output + '</li>');
  });
});
