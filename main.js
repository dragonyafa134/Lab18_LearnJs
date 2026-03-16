// let age = 20;
// let name = "Daria";
// let isStudent = true;

// console.log("Name ", name);
// console.log("Age ", age);
// console.log("Is student", isStudent);

// let value = 10;
// console.log(value);
// value = "теперь текст";
// console.log(value);
// value = true;
// console.log(value);


// let userName = "Алексей";
// console.log(`Привет ${userName}`);

// let price = 99.99;
// let tempe = -15;
// let infin = 1 / 0;
// let motAN = 0 /0;
// console.log(0.1 +0.2);

// let isAlive = true;
// let Osd = age >= 18;

// let x;
// let y = undefined;

//объекты
// let person = {
//     name : "Стас",
//     age : 3,
//     Student : false,
//     sayHello : function( ) {
//         console.log("привет");
//     },
// };
// console.log(sayHello)

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(5,3))

// let now = new Date();
// console.log(now);

// const num = [1,2,3];
// num[0] = 10;
// console.log(num);

// const perdson = {name: "Daria" , age: 18};
// perdson.age = 19;
// perdson.citu = "Volgograd";
// console.log(perdson);


// let newPricr = 10;
// console.log(newPricr);
// console.log(typeof newPricr);
// newPricr = "строка";
// console.log(newPricr);
// console.log(typeof newPricr);


// //в строку
// let num = 42;
// let str = String(num);
// let srt2 = num.String();
// let str3 = ""+ num;
// //в число
// let strNum = "123";
// let int = Number(strNum);
// let int2 = parseInt("43.3");
// let float = parseFloat("23.32");
// let in3 = +"99";
// //в будевое значения
// let bool1 = Boolean(1);
// let bool2 = !!1;
// let bool3 = Boolean(0);
// let bool4 = Boolean("");



// console.log(5 == "5");
// console.log(5 === "5");
// console.log(0 == false);
// console.log(0 === false);


// let obj1 = {name: "John"};
// let obj2 = {name: "John"};

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);


// let t = 10;
// let w = 2;
// console.log(t + w);
// console.log(t - w);
// console.log(t * w);
// console.log(t / w);

// let a2 = 2;
// let b2 = 4;
// let sum2 = a2 + b2;
// let sum = a2 * b2;
// console.log(sum2 , sum)

// let age = 18;
// if (age >= 18){
//     console.log("Доступ разрешен");
// } else {
//     console.log("Досту запрещен");
// }






// let tem = 12;

// if (tem <= 0) {
//     console.log("Холодно");
// } else if (tem < 20) {
//     console.log("прохладно");
// } else {
//     console.log("тепло");
// }

// let isLoggedIn = true;
// let isAdmin = true;
// if (isAdmin && isLoggedIn === true){
//     console.log("Полный доступ");
// } else if (isLoggedIn === true) {
//    console.log("Ограниченный доступ");
// }else{
//     console.log("Доступ запрещён");
// }

// let a3 = 10;
// let b3 = "10";
// console.log(a3 == b3); //Нестрогое сравнения
// console.log(a3 === b3); //строгое сравнения



// let day = 3;
// switch (day) {
//     case 1: console.log("Понедельник"); break;
//     case 2: console.log("Вторник");break;
//     case 2: console.log("Среда");break;
//     default: console.log("Неизвестный день");
// }


let monthNumber = 5;
switch (day) {
    case 1: console.log("январь"); break;
    case 2: console.log("февраль");break;
    case 3: console.log("март");break;
    case 4: console.log("апрель");break;
    case 5: console.log("май");break;
    case 6: console.log("июнь");break;
    case 7: console.log("июль");break;
    case 8: console.log("август");break;
    case 9: console.log("сентябрь");break;
    case 10: console.log("октябрь");break;
    case 11: console.log("ноябрь");break;
    case 12: console.log("Срдекабрьеда");break;
    default: console.log("Неизвестный месяц");
}
