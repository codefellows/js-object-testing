var expect = require('chai').expect,
  Catalog = require('../lib/catalog').Catalog,
  Book = require('../lib/book').Book;

describe('Circulation', function() {
  'use strict';
  var circulation;

  beforeEach(function(){
    circulation = new Circulation();
  });

  it('keeps track of books that are checked out');
  it('can check out books');
  it('can return books');
  it("can find out what's checked out");
}
