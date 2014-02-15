var expect = require('chai').expect,
  Catalog = require('../lib/catalog').Catalog,
  Book = require('../lib/book').Book,
  Patron = require('../lib/patron').Patron,
  Circulation = require('../lib/circulation').Circulation;

describe('Circulation', function() {
  'use strict';
  var circulation, catalog;

  beforeEach(function(){
    circulation = new Circulation();
    catalog = new Catalog();
  });

  describe('keeps track of books that are checked out', function() {
    it('can check out books', function() {
      var book = new Book('Addy Osmani','Learning JavaScript Design Patterns',2013);
      var patron = new Patron('Oscar Peterson');
      catalog.add(book);
      circulation.checkOut(catalog, book, patron);
      expect(circulation.numberOfBooksOut()).to.equal(1);
    });
    it('can return books');
    it("can find out what's checked out"); //jshint ignore: line
  });

});
