// let num = 20;
// function showFirstMessage (test) {
//     console.log(test);
//     //num = 10;//локальная переменная, за пределами не видна. Глобальная видна
//     console.log(num);
// };

// showFirstMessage ("Привет!");


//console.log(calc(2, 4));

//функция декларейшн, работает когда ее вызывают, хотя описана ниже в коде
// function calc(a, b) {
//     return(a+b);
// };

//функция эксрешен
// let calc = function (a, b) {
//     return(a+b);
// }

// стрелочная функция, ES6
let calc = (a, b) => a + b;

console.log(calc(5, 4)); 
console.log(calc(2, 4));

function retVar () {
    let num = 55;
    return num;
}

let anotherNum = retVar();// мы получаем значение пременной из функции
console.log(anotherNum);

//свойство
let str = "дом";
console.log(str.length);
console.log(str.toUpperCase()); 

//методы 
let y = "12.2px";
console.log(Math.round(y));//методы для типа данных число
console.log(parseInt(y));
console.log(parseFloat(y));

console.log('приветп'.codePointAt(6));