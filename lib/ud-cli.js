'use strict';

const url = (term) => 'http://api.urbandictionary.com/v0/define?term=' + term;
 
const udcli = (term) => {
  return new Promise((reso, rej) => {
    require('http').get(url(term), (resp) => {
      const body = [];
      resp.on('data', d => body.push(d));
      resp.on('end', () => reso(body.join('')));
    }).on('error', (error) => rej(error));
  });
};

module.exports = udcli;
