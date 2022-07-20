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