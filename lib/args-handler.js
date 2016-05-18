'use strict';

const argsHandler = () => {
  
  const findArgument = (arr) => arr.find(x => x === '--t');
  
  const nextIndex = (arr) => arr.indexOf('--t') + 1;
  
  const grabArgs = (arr) => {
    
    if (!findArgument(arr)) {
      console.log('Missing --t argument.');
      return;
    }
    
    let value = arr[nextIndex(arr)];
    
    if (!value) {
      console.log('Missing argument for --t');
      return;
    }
    
    return value;
  };

  return Object.freeze({
    grabArgs
  });
  
};

module.exports = argsHandler();