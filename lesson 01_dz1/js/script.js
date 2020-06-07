'use strict';

let money, time;

function start (){
    money = +prompt('Ваш бюджет за месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == ""|| money == null){
        money = +prompt('Ваш бюджет за месяц?', '');
    };
};

start();
 

console.log(isNaN("test"));// возвращает нам true или false
//money == null   чтобы пользователь не ввел ОТМЕНА


let appData = {
    budget: money,
    timeData: time,//данные времени
    expenses: {},//объект с обязательными расходами
    optionalExpenses: {},//объект с необязательными расходами
    income:[],//массив данных с доп. доходом
    savings: true,
    //созадаем метод у объкета, т.е. функцию  внутри объкта.
    //чтобы ее вызвать: appData.shooseExpense ()
    shooseExpense: function () {
        for (let i = 0; i < 2; i++){
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = +prompt('Во сколько обойдется?', '');
        
            if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
                appData.expenses[a] = b;
                console.log('done');
            }
            else {
                alert ('Ошибка ввода данных. Повторите заполнение');
                i--;//i = i - 1
            }
        }
    },
    //метод - расчет дневного бюджета
    detectDayBudget: function() {
        appData.moneyPerDay = +(appData.budget/30).toFixed(); //автомтаически добавилась новое значение в объект
        //метод toFixed() округляет значение до целого, можно до дробного, но возвращает строку 
        alert('Ваш бюджет на 1 день: '+ appData.moneyPerDay);
    },
    //определение уровня достатка
    detectLevel: function (){
        if (appData.moneyPerDay < 1000){
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 3500 ){
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 3500 ){
            console.log("Высокий уровень дохода");
        } else {
            console.log('Ошибка ввода данных');
        }
    },
    checkSavings: function (){
        if (appData.savings == true){
            let save = +prompt('Какова сумма ваших накоплений?'),
                persent = +prompt('Под какой процент годовых?');
    
                appData.monthIncome = save/100/12*persent;
                alert ('Доход в месяц с вашего депозита: '+appData.monthIncome);
        } 
    },
    //определение необязательных расходов
    // \!isNaN(b) проверяет, чтобы было введено число, isNaN(b) возвращает true
    chooseOptExpenses: function(){
        for (let i = 0; i < 3; i++) {
            let a = prompt('Статья необязательных расходов?'),
                b = +prompt('Cумма расходов?');
            if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != ''&& !isNaN(b) && a.length < 50) { 
                appData.optionalExpenses[a] = b;
                console.log('done');  
                console.log(typeof (b));
                console.log(isNaN(b));
            } else {
                alert ('Некорректно введены данные!'); 
                i--;     
            }
        }
    },
    //метод - выбор дополнительного дохода, который можно получить
    chooseIncome: function() {
        let items;
        //items = prompt('Что принесет дополнительный доход?(перечислите через запятую)','');
        while (typeof(items) != 'string' || items == ' ' || items == ""|| items == null){
            items = prompt('Что принесет дополнительный доход? (перечислите через запятую)','');
        };

        appData.income = items.split(', '); //преобразуем строку в массив
        appData.income.push(prompt('Может что-то еще?',''));
        appData.income.sort();//отсортировали по алфавиту
        //удаляет первый элемент массива, если он пустой
        if(appData.income[0] === ''){
            appData.income.shift();
        }
        appData.income.forEach(function (item, i){
           alert(`Способы доп. заработка: ${++i}) ${item} `)
        });
        
    }
};

//задание 5
for (let key in appData){
    console.log(`Наша программа включает в себя данные:
    свойство ${key} - ${appData[key]}`);
}