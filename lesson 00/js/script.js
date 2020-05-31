console.log(4/0); //вернет Infinity, результат деления на 0
console.log("str"*5); //вернет NaN

var a;
console.log(a);// вернет undefined

let person = {
    name: 'John',
    age: 25,
    isMarried: false
};

let arr = ["plum.jpg", "apple.jpg",'lemon.png'];

console.log(person.age); 
console.log(person["age"]); 
console.log(arr[2]);

let b ="5";
console.log(typeof "6");

c = null;// false
c = undefined;// false
c = NaN;// false
c = "";// false пустая строка
c = 0;// false

c = ' ';//true, строка с пробелом; пустые массивы и объекты
c = 1;

if(c) {
    console.log("Привет, это правда!");
};


// let answer1 = confirm("Вы здоровы?");// возвращает true || false
//let answer2 = +prompt("Напишите ваше имя"); //возвращает строку, а с унарным плюсом - пытается преобразовать в число

let incr = 10, decr = 10;
incr++;
decr--;
 
let isChecked = true,
    isClose = false;

console.log(isChecked && !isClose);

if(1) {
    console.log("Верно!");
} else {
    console.log('Не верно!');
}

//УСЛОВИЯ, ВЕТВЛЕНИЯ
let num = 50;

if (num < 49) {
    console.log('Мало');
} else if (num > 100) {
console.log('Много');
} else {
    console.log('Самое то!');
};

//УСЛОВИЯ через тернарный оператор
(num == 50) ?  console.log('Верно') : console.log('Неверно!');

//УСЛОВИЯ switch case
switch (num){
    case num > 100:
        console.log("Много");
        break;
    case num < 49:
        console.log("Мало");
        break;
    case 50: // именно так записывать, проверяя на правильно значение, иначе не будет работать
        console.log("Верно!!!!");
        break;
};

//ЦИКЛЫ
num = 50;

// while (num < 55){
//     console.log(num);
//     num++;
// };

// do {
//     console.log(num);
//     num++;
// } 
// while (num < 55);


// for (i = 0; i < 8; i++) {
//     if(i == 6){
//         //break //останавливает ВЕСЬ цикл
//         continue//прерывает Эту итерацию, цикл продолжает работать
//     };
//     console.log(i);
// }


