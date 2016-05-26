'use strict';

if (process.argv.length === 3) {
  require('./lib/ud-cli')(process.argv[2])
    .then(data => console.log(JSON.parse(data).list[0].definition))
    .catch(error => console.log(error));
} else {
  console.log('Usage: node index search_term_here');
}