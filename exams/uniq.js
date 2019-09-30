/**
 * uniq.js
 * Create a function that remove the elements 'repeated'
 * in an array
 * unicos([9, 3, 1, 3, 9, 2]) // [1, 2]
 * unicos([6, 2, 2, 2, 1, 8]) // [6, 1, 8]
 * unicos([1]) // [1]
 */
const unicos = function (arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let banderita = 0

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        banderita++
      }
    }

    if (banderita === 1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(unicos([9, 3, 1, 3, 9, 2])) // [1, 2]
console.log(unicos([6, 2, 2, 2, 1, 8])) // [6, 1, 8]
console.log(unicos([1])) // [1]