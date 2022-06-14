// task 6 ----------------------------------------

let arr = ['a', 'a', 'a', 'a'];
let checkForSame = false;

let i = 0;
while (i < arr.length - 1) {
  if (arr[i] === arr[i+1]) {
    checkForSame = true;
  } else {
    checkForSame = false;
    break;
  }
  i++;
}
console.log(checkForSame);