/**
 * pal.js
 * 
 */
const isPalindrome = function (word) {
  const arr = word.split('')
  const rra = word.split('').reverse()

  for (let i = 0; i < rra.length; i++) {
    if (arr[i] != rra[i]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome('anna')) // true
console.log(isPalindrome('ana')) // true
console.log(isPalindrome('()()')) // false
console.log(isPalindrome('07170')) // true
