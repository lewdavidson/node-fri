(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Age = exports.Age = function () {
  function Age(age, year) {
    _classCallCheck(this, Age);

    this.age = age;
    this.year = year;
  }

  _createClass(Age, [{
    key: "toSecs",
    value: function toSecs(age) {
      return age * Math.pow(3.154, 7);
    }
  }, {
    key: "yearComp",
    value: function yearComp(year) {
      return Math.floor(2018 - year);
    }
  }]);

  return Age;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _scripts = require('./../js/scripts.js');

$(document).ready(function () {
  $('form#age-form').submit(function (event) {
    event.preventDefault();
    var age = parseInt($('input#age').val());
    var year = parseInt($('input#year').val());
    var newAge = new _scripts.Age(age, year);
    var output = newAge.toSecs(age);
    var yearOutput = newAge.yearComp(year);
    $('#age-display').append('<li>' + 'you are ' + output + ' earth-seconds old.' + '</li>');
    $('#age-display').append('<li>' + 'you are ' + yearOutput + ' years old.' + '</li>');
  });
});

},{"./../js/scripts.js":1}]},{},[2]);
