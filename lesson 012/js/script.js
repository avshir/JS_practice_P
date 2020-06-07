//012 урок Объекты
//порядок отображения пар "ключ-значение" в разных браузерах может отличаться. 
//Поэтому не нужно пологаться на определенный порядок в объектах в программе.
let obj = {};

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
}

console.log(options);
delete options.bool;

console.log(options);
console.log(options.colors);
//console.log(options);

//цикл for in - для перебора объктов 
for (let key in options) {
    console.log(key);
}

for (let key in options) {
    console.log('Свойство '+ key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options));//возрващает массив из ключей объекта, т.е. можно посмотреть какие есть ключи в объектах 
console.log(Object.keys(options).length);//возвращает количестово ключей-свойств в объекте

//Массивы
let arr = [1,'second',3, 'four',5]; 
arr.pop();//удалили последний элемент массива
arr.push("55");//добавили в конец элемент массива
arr.shift();//удалили первый элемент массива
arr.unshift("1");//добавили элемент массива в конец
arr[6] = 10;//добавили элемент в массив в ячейку 6, но так лушче не делать


//цикл наиболее используемый для массивов
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log(arr);
console.log(arr.length);//свойство, возваращет длину массива, отсчет с начинается с 0

//метод forEach для работы с элементами массива, где i это index
arr.forEach(function(item, i, mass){
    console.log(`${i}: ${item} (в массиве: ${mass})`);

})

//способ перебора массива for of (не работает для объектов!!!)
let mass = [1,2,3,7,8];

for (let key in mass){
    console.log(key);//получаем ключи массива, те. 0,1,2,...
}

for (let key of mass){
    console.log(key);//получаем значение из массива
}

//МЕТОДЫ МАССИВА
//split() - делает из одной строки массив
let ans = prompt('Введите название фруктов, которые вы знаете через запятую', ''),
    arrAns = [];

    arrAns = ans.split(',');
    console.log(arrAns);

//метод join() - преобраузет массив в одну строку, в аргументе передается разделитель внутри строки
let arr2 = ['Саша', 'Маша', 'Аня'];
    console.log(arr2);

let newArr2 = arr2.sort();//метод sort() сортирует СТРОЧНЫЕ! значения массива по алфавиту.Но для чисел нужно по другому!!!
    console.log(arr2);

    newArr2 = arr2.join(', ');
    console.log(newArr2);

let arr3 = [1,15,4,17];
let newArr3 = arr3.sort();// в таком виде числа сортируются не правильно!!!
    console.log(newArr3);

    newArr3 = arr3.sort(compareNum);//Правильный способ сортировки числовых значений в массиве с помощью callback функции
    function compareNum (a, b) {
        return a-b;
    }
    console.log(newArr3);



    //пример по работе callback
    function a3 (x, y) {
        return function (){
            return 5;
        };
    }

    var result = a3 (2, 4);
    console.log(result);// вернет конструкцию: function (){ return 5;};


    let BIGY = function (callback){
        console.log('Изучаем колбэк функции');
        callback (5, 2);
    };

    let addHello = function() {
        console.log('Hello, guys!');
    };

    let addClose = function (a, b){
        //debugger
        console.log('Close your eyes!');
        console.log(a+b);
    };

    BIGY (addHello);// выполняется стр. 112, 117
    BIGY (addClose); //выполняется стр. 112, 122, 123





//014 ООП
//создали Прототип Солдат soldier 
let soldier = {
    health: 400,
    weight: 75,
    armor: 100
};

let ivan = { 
    health: 200,
    weight: 90
};

ivan.__proto__= soldier; //сообщили, что ivan является экземпляром Солдата soldier. 
//это значит, что ivan  теперь также доступны свойства и методы soldier, которых у него сейчас нет.

console.log(ivan);
console.log(ivan.armor);