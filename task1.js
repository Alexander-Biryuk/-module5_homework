// task 1 -----------------------------------
let myNumber = +prompt('Введите число');
if (isNaN(myNumber)) {
  console.log('Упс, кажется, вы ошиблись');
} else {
  if (typeof myNumber === 'number') {
    if (myNumber % 2 === 0) {
      console.log(myNumber, ' число четное');
    } else {
      console.log(myNumber, ' число нечетное');
    }
  }
}