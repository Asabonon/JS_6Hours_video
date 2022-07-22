// mdn *Что я хочу спросить*

/* // 1 Переменные
// camelCase
var firstName = 'Andrey' // устаревший метод
const lastName = 'Asabin' // константа (всегда предпочтительней)(нельзя изменить "Uncaught TypeError: Assignment to constant variable.")
let age = 26 // допускаем, что где-то будем менять
const isProgrammer = true // обязательно с маленькой t
//язык нестрогой типизации
age = 'zero'
console.log(age)
age = 26
// можно писать с ; или без них в 99% случаев
const _ = 'private'
const $ = 'some value'
// kek

const withNum5 = 5
// const 5withNum = 5 - ошибка, нельзя начинать с цифры
 */
/* 
// 2 Мутирование
// конкатенация, скрытно вызываем у объекта age метод .toString() 
console.log('Имя человека: ' + firstName + ', а возраст: ' + age)  // в консоли цвет белый => строка
console.log(age) // в консоли цвет фиолетовый => число
console.log(age.toString()) // в консоли цвет белый => строка
//Функции alert, prompt не из JS, а из браузера
alert('Имя человека: ' + firstName + ', а возраст: ' + age) 
//// блок
const firstName = 'Andrey' //
const lastName = prompt('введите фамилию')
alert(firstName + ' ' + lastName)
//// блок
*/

// 3 Операторы
/* const currentYear = 2022
const birthYear = 2001
const age = currentYear - birthYear
console.log(age)
 */

// let a = 10
// const b = 5

// // console.log(a+b)
// // console.log(a-b)
// // console.log(a*b)
// // console.log(a/b)
// // console.log(a++)  // 10
// // console.log(a)    // 11
// // console.log(++a)  // 12
// // console.log(--a)  // 11
// let c = 32
// c = c + a    // идентичны 
// c += a       // идентичны 
// console.log(c)       // 12

// 4 Типы данных
// const isProgrammer = true   //boolean
// const name = 'Andrey'       // string
// const age = 20              // number
// let x                       // undefined
//                             // null
// //const y // нельзя создать, ибо в константу нужно занести что-то по умолчанию
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null) //object (неточность)
// console.log(null) //object (неточность)

// 5 Приоритет операторов
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// const fullAge = 20
// const birthYear = 2002
// const currentYear = 2022
// // сначала вычитание, потом сравнение, потом присваивание
// const isFullAge = currentYear - birthYear >= fullAge 
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'pending'
// if (courseStatus === 'ready') {
//     console.log('Курс готов')
// } else if (courseStatus === 'pending'){
//     console.log('Курс разрабатывается')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = false
// if (isReady) {
//     console.log('Всё готово')
// } else {
//     console.log('Всё не готово')
// }
// // одинаково (Тернарное выражение)
// isReady ? console.log('Всё готово') : console.log('Всё не готово')

// // const num1 = 42 // number
// const num2 = '42' //string
// console.log(num1 == num2) // true (JS приводит одному типу данных, к строке)
// console.log(num1 === num2) // false

// 7 Булевая логика
// (3 года универа с этим)

// 8 Функции
// function calcAge(year){
//     return 2022 - year
// }
// // const myAge = calcAge(2001)
// // console.log(calcAge(2001))
// function logInfoAbout(name, year) {
//     const age = calcAge(year)

//     console.log('Имя: ' + name + ' Возраст: ' + age)
// }
// logInfoAbout('Andrey', 2001)

// 9 Массивы

// // const cars = new Array ('Lada','BMW','Renault')
// const cars = ['Lada','BMW','Renault'] // упрощено 
// console.log(cars) // (3) ['Lada', 'BMW', 'Renault']
// console.log(cars[0]) // Lada
// console.log(cars.length) // 3

// cars[0] = 'Porshe'
// cars[3] = 'Mazda' // добавим
// cars[cars.length] = 'Ford' // добавим
// console.log(cars) // (5) ['Porshe', 'BMW', 'Renault', 'Mazda', 'Ford']

// 10 Циклы
// const cars = ['Lada','BMW','Renault'] 

// // for (let i = 0; i < cars.length; i++){
// //     const car = cars[i]
// //     console.log(car)
// // }

// for (let car of cars){
//     console.log(car)
// }

// // 11 Объекты
// const person = {
//     firstName: 'Andrey',
//     lastName: 'Asabin',
//     year: 2001,
//     languages: ['Ru', 'Eng', 'Chi'],
//     hasWife: false,
//     greet: function(){
//         console.log('greet')
//     }
// }
// console.log(person) // вывод всех полей
// console.log(person.firstName) // вывод одного поля
// console.log(person['lastName']) // вывод одного поля
// person.hasWife = true // изменение
// person.greet() // вызов метода у объекта






