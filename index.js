'use strict';

const term = require('./lib/args-handler').grabArgs(process.argv);

if (term) {
  require('./lib/ud-cli')(term)
    .then(data => console.log(JSON.parse(data).list[0].definition))
    .catch(error => console.log(error));
}