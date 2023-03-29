/*
Имя: Better Comments
Идентификатор: aaron-bond.better-comments
Описание: Improve your code commenting by annotating with alert, informational, TODOs, and more!
Версия: 3.0.2
Издатель: Aaron Bond
Ссылка на Visual Studio Marketplace: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

Usual comment
* Important information
! Deprecated method, do mot use
? Should this method be exposed in the public API?
TODO: refactor this method so that it conforms to the API
*/

//* camelCase
//* лучше писать с ; в конце, без ; в большинстве случаев ошибок не будет
//* язык нестрогой типизации
//* Функции alert, prompt не из JS, а из браузера

// console.log() // вывод в консоль
// alert() // оповещение
// prompt() // ожидание ввода



// mdn *Что я хочу спросить*
//! Переменные
// var firstName = 'Andrey';    // обычная переменная, устаревший метод 
// const lastName = 'Asabin';    //* константа (нельзя изменить "Uncaught TypeError: Assignment to constant variable.")
// let age = 26;                 //* обычная переменная, лучше это
// const isProgrammer = true;    // обязательно с маленькой t
// age = 'zero';
// console.log(age);
// age = 26;
// const _pa = 23;           // переменная начинается со спецсимвола
// const _ = 'private';      // переменная с названием в 1 символ
// const $ = 'some value';
// const withNum5 = 5;
// const 5withNum = 5;       //* ошибка, переменные с цифрой в начале

//! Мутирование
//* конкатенация, вызывает переменную age с методом .toString() 
// console.log('Имя человека: ' + firstName + ', а возраст: ' + age)  // это строка
// console.log(age)             
// console.log(age.toString())  
// alert('Имя человека: ' + firstName + ', а возраст: ' + age) 
// const firstName = 'Andrey' 
// const lastName = prompt('введите фамилию')
// alert(firstName + ' ' + lastName)


//! Операторы
// const currentYear = 2022
// const birthYear = 2001
// const age = currentYear - birthYear
// console.log(age)


// let a = 10 // для оператора ++ (икремента) const не подходит
// const b = 5

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a++)     //* 10 (сначала вывелась в консоль, потом инкремент)
// console.log(a)       //* 11 (после инкремента, который выше)
// console.log(++a)     // 12
// console.log(--a)     // 11
// let c = 32
// c = c + a            // идентичны 
// c += a               // идентичны 
// console.log(с)


//! Типы данных
console.log()

const isProgrammer = true    // boolean
const name = 'Andrey'        // string
const age = 20               // number
let x                        // undefined
                                // null
//const y // нельзя создать, ибо в константу нужно занести что-то по умолчанию
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)     //* object (неточность)
// console.log(null)            // null

//! Приоритет операторов
//* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// const fullAge = 20
// const birthYear = 2002
// const currentYear = 2022
//* сначала вычитание, потом сравнение, потом присваивание
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






