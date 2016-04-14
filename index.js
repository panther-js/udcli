'use strict';

let help = require('./lib/ud-cli');
let argsHandler = require('./lib/args-handler');

let term = argsHandler.grabArgs(process.argv, '--t');

if (term) {
  help(term)
    .then((data) => console.log(JSON.parse(data).list[0].definition))
    .catch((error) => console.log(error));
}