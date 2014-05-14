/* jshint expr:true */
var expect = require('chai').expect,
  Book = require('../lib/book').Book;

describe('Book object tests', function(){
  'use strict';
  var book;

  beforeEach(function(){
    book = new Book('Addy Osmani','Learning JavaScript Design Patterns',2013);
  });

  describe('constructor', function() {
    it('book should be truthy (exists)', function(){
      expect(book).to.be.an.object;
    });
    it('book should not have author property', function() {
      expect(book).to.not.have.property('author');
    });
    it('book author property is undefined', function() {
      expect(book.author).to.be.an.undefined;
    });
    it('book should not have author title', function() {
      expect(book).to.not.have.property('title');
    });
    it('book getTitle returns the title', function () {
      expect(book.getTitle()).to.equal('Learning JavaScript Design Patterns');
    });
    it('can\'t change the book title', function() {
      book.title = 'Steve Martin';
      expect(book.getTitle()).to.equal('Learning JavaScript Design Patterns');
    });
  });
});
