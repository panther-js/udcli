'use strict';

const roi = require('roi');

if (process.argv.length === 3) {

  const options = {
    'endpoint': 'http://api.urbandictionary.com/v0/define?term=' + process.argv[2]
  };
  
  roi.get(options)
    .then(x => console.log(JSON.parse(x.body).list[0].definition))
    .catch(e => console.log(e));

} else {
  console.log('Usage: node index search_term_here');
}