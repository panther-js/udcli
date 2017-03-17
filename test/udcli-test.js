'use strict';

const test = require('tape');
const roi = require('roi');

test('lgtm', (t) => {
  const expected = 'An acronym for "Looks Good To Me", often used as a quick response after reviewing someone\'s essay, code, or design document.';
  roi.get({ endpoint: 'http://api.urbandictionary.com/v0/define?term=lgtm' })
    .then(response => {
      t.equal(JSON.parse(response.body).list[0].definition, expected);
      t.end();
    }).catch(e => console.log(e));
});
