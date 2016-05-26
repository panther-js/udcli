'use strict';

if (process.argv.length === 3) {

  let url = 'http://api.urbandictionary.com/v0/define?term=' + process.argv[2];

  const udcli = () => {
    return new Promise((reso, rej) => {
      require('http').get(url, resp => {
        let body = [];
        resp.on('data', d => body.push(d));
        resp.on('end', () => reso(body));
      }).on('error', e => rej(e));
    });
  };

  udcli()
    .then(d => console.log(JSON.parse(d).list[0].definition))
    .catch(e => console.log(e));

} else {
  console.log('Usage: node index search_term_here');
}