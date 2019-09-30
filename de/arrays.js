/**
 * arrays.js
 */
const ages = [5, 16, 9, 52, 17, 23, 11, 69, 27, 40, 16, 18]

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log(ages[i], ':)')
  } else {
    if (ages[i]==16){
      console.log('legalicenlas')
    }else{
    console.log(ages[i], ':(')
    }
  }
}
