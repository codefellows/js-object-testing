var expect = require('chai').expect,
  Catalog = require('../lib/catalog').Catalog;

describe('Catalogs', function() {
  'use strict';
  var catalog;

  beforeEach(function(){
    catalog = new Catalog();
  });

  it('can add a book', function() {
    catalog.add(new Book('George R. R. Martin','A Game of Thrones', 1997));
    expect(catalog.includes('A Game of Thrones')).to.be.true;
  });

  it('are initially empty', function() {
    expect(catalog.size()).to.be(0);
  })

  it('have a count of Books called size', function() {
    catalog.add(new Book('George R. R. Martin','A Game of Thrones', 1997));
    expect(catalog.size()).to.be(1);
  })

  it('can check the inclusion of a book', function() {
    expect(catalog.includes('A Game of Thrones')).to.be.false;
  })

  it('should know the total number of copies of a particular book it has')

});
