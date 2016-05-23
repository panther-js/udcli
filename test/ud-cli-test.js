'use strict';

const test = require('tape');
const udcli = require('../lib/ud-cli');

test('The client should get information from urban dictionary.', (t) => {

  udcli('lgtm')
    .then(data => {
      let definition = JSON.parse(data).list[0].definition;
      t.equal(definition.indexOf('Looks Good To Me') > 0, true);
      t.end();
    }).catch(error => console.log(error));
    
});
