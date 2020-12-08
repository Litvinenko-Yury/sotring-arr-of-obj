'use strict';

let obj = {
  one: 1,
  two: 2,
};

let newObj = { ...obj };
newObj.one = 555;

console.log(newObj);
console.log(obj);
