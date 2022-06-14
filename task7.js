// task 7 -------------------------------------------

let arr = [1, 2, 3, 4, 0, "asdf", false, null, 0]
let arrOdd = 0;
let arrEven = 0;
let arr0 = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" && arr[i] % 2 === 0 && arr[i] != 0) {
    arrEven += 1;
  } 
  if (typeof arr[i] === "number" && arr[i] % 2 != 0 && arr[i] != 0) {
    arrOdd += 1;
  } 
  if (arr[i] === 0) {
    arr0 += 1; 
  }
}
console.log("четных: ", arrEven, " нечетных: ", arrOdd, " нулевых: ", arr0);