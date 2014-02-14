var expect = require('chai').expect,
  Catalog = require('../lib/catalog').Catalog,
  Book = require('../lib/book').Book;

describe('Catalogs', function() {
  'use strict';
  var catalog;

  beforeEach(function(){
    catalog = new Catalog();
  });

  it('can add a book', function() {
    catalog.add(new Book('George R. R. Martin','A Game of Thrones', 1997));
    expect(catalog.includes('A Game of Thrones')).to.be.true; // jshint ignore: line
  });

  it('are initially empty', function() {
    expect(catalog.size()).to.equal(0);
  });

  it('have a count of Books called size', function() {
    catalog.add(new Book('George R. R. Martin','A Game of Thrones', 1997));
    expect(catalog.size()).to.equal(1);
  });

  it('can check the inclusion of a book', function() {
    // #TODO figure out syntatic sugar validation in jshint - the false true value thing
    expect(catalog.includes('A Game of Thrones')).to.be.false; // jshint ignore: line
  });

  it('should know the total number of copies of a particular book it has');

});
