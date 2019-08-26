/**
 * calc.js
 * 
 * simple calc functions
 * add, substract, multiply and divide
 */
const add = function (num1, num2) {
  return num1 + num2
}

const substract = function (num1, num2) {
  return num1 - num2
}

const multiply = function (num1, num2) {
  return num1 * num2
}

const divide = function (num1, num2) {
  // TODO: verify divide by zero
  return num1 / num2
}

console.log(add(2, 4)) // 6
console.log(substract(8, 5)) // 3
console.log(multiply(2, 9)) // 18
console.log(divide(9, 3)) // 3
