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
    savings: true
};

   
function shooseExpense () {
    for (let i = 0; i < 2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = +prompt('Во сколько обойдется?', '');
    
        if( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
            appData.expenses[a] = b;
            console.log('done');
        }
        else {
            alert ('Ошибка ввода данных. Повторите заполнение');
            i--;
        }
    }
}
 
shooseExpense();


//расчет дневного бюджета
function detectDayBudget () {
    appData.moneyPerDay = +(appData.budget/30).toFixed(); //автомтаически добавилась новое значение в объект
//метод toFixed() округляет значение до целого, можно до дробного , но возвращает строку 

    alert('Ваш бюджет на 1 день: '+ appData.moneyPerDay);
}
detectDayBudget ();

//определение уровня достатка
function detectLevel () {
    if (appData.moneyPerDay < 1000){
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 3500 ){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 3500 ){
        console.log("Высокий уровень дохода");
    } else {
        console.log('Ошибка ввода данных');
    }
}
detectLevel ();


console.log(appData.expenses);
console.log(appData);

function checkSavings () {
    if (appData.savings == true){
        let save = +prompt('Какова сумма ваших накоплений?'),
            persent = +prompt('Под какой процент годовых?');

            appData.monthIncome = save/100/12*persent;
            alert ('Доход в месяц с вашего депозита: '+appData.monthIncome);
    }

}
checkSavings ();

//определения необязательных расходов
// \!isNaN(b) проверяет, чтобы было введено число, isNaN(b) возвращает true
function chooseOptExpenses () {
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
    };

}

chooseOptExpenses ();

