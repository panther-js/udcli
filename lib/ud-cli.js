'use strict';

const http = require('http');

const url = (term) => 'http://api.urbandictionary.com/v0/define?term=' + term;
 
const udcli = (term) => {
  return new Promise((resolve, reject) => {
    let request = http.get(url(term), (response) => {
      const body = [];
      response.on('data', chunk => body.push(chunk));
      response.on('end', () => resolve(body.join('')));
    })
    .on('error', (error) => reject(error));
  });
};

module.exports = udcli;
