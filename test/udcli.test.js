'use strict';

const roi = require('roi');

test('lgtm', () => {
  expect.assertions(1);
  const expected = 'An acronym for "[Looks Good] To Me", often used as a quick response after reviewing someone\'s [essay], code, or design [document].';
  return roi.get('http://api.urbandictionary.com/v0/define?term=lgtm')
    .then(response => {
      expect(JSON.parse(response.body).list[0].definition).toBe(expected);
    }).catch(e => console.log(e));
});
