'use strict';

const oldArray = [
  { a: 'aaa', b: 'bbb', c: 'ccc' }];
const cloneArray = JSON.parse(JSON.stringify(oldArray));
cloneArray[0].a = 'eeeeee';

console.log(oldArray);
console.log(cloneArray);

