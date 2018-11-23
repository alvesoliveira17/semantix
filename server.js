const express = require('express');
const Fuse = require('fuse.js')
const app = express();
const jsonfile = require('jsonfile')
const filename = 'data.json'
var books = jsonfile.readFileSync(filename)
var options = {
  caseSensitive: true,
  shouldSort: true,
  tokenize: true,
  threshold: 0,
  location: 0,
  distance: 10,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "review_id",
    "date",
    "message"
  ]
};

app.get('/s', function (req, res) {
  var querystr = req.query.search.split(' ');
  var fuse = new Fuse(books, options);
  var fuseqr = querystr.join(' ')
  var result = fuse.search(fuseqr);
  res.send(result)
});

app.listen(3000, function () {
  console.log('Teste DevOps Semantix - Aplicação iniciada!');
});