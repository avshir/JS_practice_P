let money = +prompt('Ваш бюджет за месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,//данные времени
    expenses: {},//объект с обязательными расходами
    optionalExpenses: {},//объект с необязательными расходами
    income:[],//массив данных с доп. доходом
    savings: false
};

   
for (i = 0; i < 2; i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', '');

    if( (typeof(a)) == 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != ''&& a.length < 50){
        appData.expenses[a] = b;
        console.log('done');
    }
    else {
        alert ('Ошибка ввода данных. Повторите заполнение');
        i--;
    }
}
 
appData.moneyPerDay = appData.budget/30; //автомтаически добавилась новое значение в объект
alert('Ваш бюджет на 1 день: '+ appData.moneyPerDay);

if (appData.moneyPerDay < 30000){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 30000 && appData.moneyPerDay < 100000 ){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 100000 ){
    console.log("Высокий уровень дохода");
} else {
    console.log('Ошибка ввода данных');
}

console.log(appData.expenses);
console.log(appData);



