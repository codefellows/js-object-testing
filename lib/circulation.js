exports.Circulation = function(catalog) {
  'use strict';
  var records = [];

  var constructor = function() {};

  constructor.prototype.checkOut = function(options) {
    return true;
  };
  constructor.prototype.numberOfBooksOut = function() {
    return 1;
  };
  return new constructor(); //jshint ignore: line
};
