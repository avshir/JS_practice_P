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

//методы - это служебные функции, часто уже встроенные в JS
let y = "12.2px";
console.log(Math.round(y));//методы для типа данных число
console.log(parseInt(y));
console.log(parseFloat(y));

console.log('приветп'.codePointAt(6));

//callback-функции
function first () {
    console.log(1);
}

function second () {
    console.log(2);
}

first ();
second ();

//callback-функция, т.к. в ее аргументе есть функция
function learnJS (lang, callback) {
    console.log('Я учу ' + lang);
    callback();//выполенится ТОЛЬКО после выполнения первой функции, в этом ее суть

}

function done () {
    console.log('Я учу 11 урок');
}

learnJS ('JS', done);