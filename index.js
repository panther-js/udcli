'use strict';

const udcli = require('./lib/ud-cli');
const argsHandler = require('./lib/args-handler');

const term = argsHandler.grabArgs(process.argv, '--t');

if (term) {
  udcli(term)
    .then((data) => console.log(JSON.parse(data).list[0].definition))
    .catch((error) => console.log(error));
}