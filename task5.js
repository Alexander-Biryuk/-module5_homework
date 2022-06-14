// task 5 ---------------------------------------

let arr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log('способ 1');
for (let arrItem of arr) {
  console.log(arrItem);
}
console.log('способ 2');
arr.forEach(arrItem => console.log(arrItem));

console.log('способ 3');
arr.forEach(function(item, index, array) {
  console.log(item);
});