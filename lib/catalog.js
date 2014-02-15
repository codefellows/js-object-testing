exports.Catalog = function() {
  var books = [];

  var constructor = function() {}
    constructor.prototype.add = function(book) {
      books.push(book);
    }
    constructor.prototype.size = function() {
      return books.length
    }
    constructor.prototype.includes = function(title) {
      return (this.size() > 0 );
    }
  return new constructor();
}
