# udcli

A nodejs urban dictionary cli.

#### Example

    node index lgtm
    
    An acronym for "Looks Good To Me", often used as a quick response after reviewing someone's essay, 
    code, or design document.

#### Full source code

```
'use strict';

if (process.argv.length === 3) {

  new Promise((reso, rej) => {
    require('http').get('http://api.urbandictionary.com/v0/define?term=' + process.argv[2], resp => {
      let body = [];
      resp.on('data', d => body.push(d));
      resp.on('end', () => reso(body));
    }).on('error', e => rej(e));
  }).then(d => console.log(JSON.parse(d).list[0].definition)).catch(e => console.log(e));

} else {
  console.log('Usage: node index search_term_here');
}
```