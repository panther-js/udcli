'use strict';

if (process.argv.length === 3) {
  require('roi')
    .get({ endpoint: `http://api.urbandictionary.com/v0/define?term=${process.argv[2]}` })
    .then(response => console.log(JSON.parse(response.body).list[0].definition))
    .catch(console.log);
} else {
  console.log('Usage: node index search_term_here');
}
