'use strict';

if (process.argv.length === 3) {

  const url = 'http://api.urbandictionary.com/v0/define?term=' + process.argv[2];

  const udcli = () => {
    return new Promise((reso, rej) => {
      require('http').get(url, (resp) => {
        const body = [];
        resp.on('data', d => body.push(d));
        resp.on('end', () => reso(body.join('')));
      }).on('error', (error) => rej(error));
    });
  };

  udcli()
    .then(d => console.log(JSON.parse(d).list[0].definition))
    .catch(e => console.log(e));

} else {
  console.log('Usage: node index search_term_here');
}