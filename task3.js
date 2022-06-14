// task 3 -----------------------------------

let a = "Hello world";
let b = "";
let n = 0;
for (n = a.length; n >= 0; n--) {
  b = b + a.slice(n, n+1);
}
console.log(b);