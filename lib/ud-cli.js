'use strict';

const http = require('http');

let help = (term) => {
  let url = ' http://api.urbandictionary.com/v0/define?term=' + term;
  return new Promise((resolve, reject) => {
    let request = http.get(url, (response) => {
      const body = [];
      response.on('data', (chunk) => body.push(chunk));
      response.on('end', () => resolve(body.join('')));
    })
    .on('error', (error) => reject(error));
  });
};

module.exports = help;
