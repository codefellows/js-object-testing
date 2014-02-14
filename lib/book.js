exports.Book = function(author,title,year) {

  var constructor = function() {};
  constructor.prototype.getTitle = function () {
    return title;
  }

  return new constructor();
}
