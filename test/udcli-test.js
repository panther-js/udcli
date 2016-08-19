'use strict';


const test = require('tape');
const roi = require('roi');

test('Should be equal Looks Good To Me ', t => {
	const options = {
    'endpoint': 'http://api.urbandictionary.com/v0/define?term=lgtm'
  };
  let resultJson = "An acronym for \"Looks Good To Me\", often used as a quick response after reviewing someone's essay, code, or design document.";
	roi.get(options)
		.then(x => {
			t.equal(JSON.parse(x.body).list[0].definition, resultJson);
			t.end();
		}).catch(e => console.log(e));
});