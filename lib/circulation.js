exports.Circulation = function(catalog) {
  'use strict';
  var records = [];

  var constructor = function() {};

  // check if the book is included in the catalog
  // if it is, we will put it on record
  constructor.prototype.checkOut = function(record) {
    if (catalog.includes(record.book.getTitle())) {
      records.push(record);
      return true;
    } else {
      return false;
    }

  };
  constructor.prototype.numberOfBooksOut = function() {
    return records.length;
  };
  return new constructor(); //jshint ignore: line
};
