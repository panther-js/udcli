'use strict';

let argsHandler = () => {
  
  let grabArgs = (arrayArg, flag) => {
    let index = arrayArg.indexOf(flag);
    let result = (index === -1) ? null : arrayArg[index + 1];
    if (result) {
      return result;
    } else {
      console.log('Missing argument for: ' + flag);
    }
  };

  return Object.freeze({
    grabArgs
  });
  
};

module.exports = argsHandler();