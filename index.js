'use strict';

let roi = require('roi');

if (process.argv.length === 3) {

  let url = '/v0/define?term=' + process.argv[2];
  let opts = { host: 'api.urbandictionary.com' };

  roi(opts).get(url)
    .then(d => console.log(d.list[0].definition))
    .catch(e => console.log(e));

} else {
  console.log('Usage: node index search_term_here');
}