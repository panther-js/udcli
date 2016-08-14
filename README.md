# udcli [![Build Status](https://travis-ci.org/panther-js/udcli.svg?branch=master)](https://travis-ci.org/panther-js/udcli)

A nodejs urban dictionary cli.
    git clone https://github.com/panther-js/udcli.git
    cd udcli

#### Example

    node index lgtm
    
    An acronym for "Looks Good To Me", often used as a quick response after reviewing someone's essay, 
    code, or design document.

#### Full source code:

```
const roi = require('roi');

if (process.argv.length === 3) {

  const options = {
    'endpoint': 'http://api.urbandictionary.com/v0/define?term=' + process.argv[2]
  }
  
  roi.get(options)
    .then(x => console.log(JSON.parse(x).list[0].definition))
    .catch(e => console.log(e));

} else {
  console.log('Usage: node index search_term_here');
}
```
