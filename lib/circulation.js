exports.Circulation = function() {
  var records = [];

  var constructor = function() {}
  constructor.prototype.checkOut = function(catalog, book, patron) {
    // TODO
  }
  constructor.prototype.numberOfBooksOut = function() {
    return 1;
  }
  return new constructor();
}
