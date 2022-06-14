// task 8 -------------------------------------------

let myArray = new Map();
let myKey;
let myValue;
myArray.set(1, 'asd');
myArray.set(2, 'fgh');
myArray.set('a', 123);
myArray.set('b', true);
for ([myKey, myValue] of myArray) {
  console.log('ключ -', myKey, ',', 'значение -', myValue);
}