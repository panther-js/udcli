# udcli 

[![Build Status](https://travis-ci.org/panther-js/udcli.svg?branch=master)](https://travis-ci.org/panther-js/udcli)
[![Greenkeeper badge](https://badges.greenkeeper.io/panther-js/udcli.svg)](https://greenkeeper.io/)

A nodejs urban dictionary cli.

### How to run

```bash
git clone https://github.com/panther-js/udcli.git
cd udcli
npm install
node index lgtm
```

#### Example

    node index lgtm
    
    An acronym for "Looks Good To Me", often used as a quick response after reviewing someone's essay, 
    code, or design document.

#### Full source code:

```js
'use strict';

if (process.argv.length === 3) {
  require('roi')
    .get({ endpoint: `http://api.urbandictionary.com/v0/define?term=${process.argv[2]}` })
    .then(response => console.log(JSON.parse(response.body).list[0].definition))
    .catch(console.log);
} else {
  console.log('Usage: node index search_term_here');
}
```
