/**
 * missing.js
 * in a list of integer numbers, find the missings
 * [2, 1, 9, 3, 8, 7, 4, 6, 0]  -> 5
 * [1, 2, 3, 4, 5, 6, 7, 8, 9]  -> 0
 * [2, 1, 9, 3, 8, 7, 4, 6, 0] -> "no falta ninguno"
 */
const total = 45
const arr = [2, 1, 9, 3, 8, 7, 4, 6, 0]
let aux = 0  // sum arr

let i = 0
for (i = 0; i < arr.length; i++) {
  aux += arr[i]
}

if (total === aux && arr.length >= 10) {
  console.log('No falta ninguno')
} else {
  console.log(`Falta el número ${total - aux}`)
}