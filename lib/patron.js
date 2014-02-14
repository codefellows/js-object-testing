var expect = require('chai').expect,
  Patron = require('../lib/patron').Patron;

describe('Patrons', function() {
  'use strict';
  var patron;

  beforeEach(function(){
    patron = new Patron('Ben Keller');
  });

  it('have a name', function() {
    expect(patron.name).to.equal('Ben Keller');
  });

  it('can check out books');
  it('can return books');
});
