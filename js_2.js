// // Number
// const num = 42 // int
// const fNum = 42.42 // float
// const pow = 10e3 // 10 ** 3 10000
// // Number - сущность
// console.log(Number.MAX_SAFE_INTEGER)    // 9007199254740991 (2**53 - 1)
// console.log(Math.pow(2, 53) - 1)        // то же самое
// console.log(Number.MIN_SAFE_INTEGER)    // -9007199254740991 (-2**53 - 1)
// console.log(Number.MAX_VALUE)           // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE)           // 5e-324
// console.log(Number.POSITIVE_INFINITY)   // Infinity 
// console.log(Number.NEGATIVE_INFINITY)   // -Infinity
// console.log(2/0)                        // Infinity
// console.log(NaN)                        // NaN - Not a Number
// console.log(2/undefined)                // NaN
// const weird = 2/undefined
// console.log(Number.isNaN(weird))        // true
// console.log(Number.isNaN(42))           // false
// console.log(Number.isFinite(42))        // конечное? true

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2) // 42
// console.log(parseInt(stringInt) + 2)        // 42
// console.log(Number(stringInt) + 2)          // 42
// console.log(+stringInt + 2)                 // 42
// console.log(parseInt(stringFloat) + 2)      // 42  !!!
// console.log(Number.parseFloat(stringFloat) + 2) // 42.42
// console.log(+stringFloat + 2) // 42.42

// console.log(0.4 + 0.2)          //0.6000000000000001 float
// console.log(2/5 + 1/5)          //0.6000000000000001 float
// console.log((0.4 + 0.2).toFixed(4))  //str 0.6000
// console.log(parseFloat((0.4 + 0.2).toFixed(4)))  //float 0.6

// 2 BigInt

// console.log(typeof 900719925474099199999)   // number
// console.log(typeof 900719925474099199999n)  // bigint
// // BigInt работает только с BigInt
// console.log(900719925474099199999n - 90071992547409919999n)  // bigint
// // console.log(10n - 4) // error
// // console.log(parseInt(10n) - 4) // 6
// console.log(-900719925474099199999n)
// // console.log(900719925474099199999.2323n) // must be integer
// console.log(10n - BigInt(4)) // 6n
// console.log(5n / 2n) // 2n отсекаем дробную часть

// 3 Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25)) // 5
console.log(Math.pow(5, 3)) // 125
console.log(25**(1/2)) // 5
console.log(Math.abs(-3)) // 3
console.log(Math.max(5, 3, 43)) // 43
console.log(Math.min(5, 3, 43)) // 3
console.log(Math.floor(4.9)) // 4 округление в меньшую сторону
console.log(Math.ceil(4.9)) // 5 округление в большую сторону
console.log(Math.round(4.9)) // 4 округление в ближайшую сторону
console.log(Math.trunc(4.9)) // 4 отсекаем дробную часть
console.log(Math.random())
// 4 Example
function getRandom(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}

console.log(getRandom(10, 42))