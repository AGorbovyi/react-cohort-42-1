// 3 Вида функций:

// 1. function Declaration

// функция которая что-то выполняет, но ничего не возвращает!
function func1(){
    console.log("This is function 1");
}

func1();

// функция, которая возвращает значение
function sum(arg1, arg2){
    return arg1 + arg2;
}
console.log(sum(5, 4)); //9


// 2. Function Expression
const sayHi = function(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}`);
};
sayHi('John', 'Johnson');


// !! Главная разница между Function Declaration и Expression: Function Declaratinon можно вызвать до её инициализации,
// а Expression нельзя т.к. будет ошибка

// 3. Arrow Function
const func2 = () => {
    console.log("I am Arrow function");
}
func2();


const user = {
    firstName: "John",
    lastName: "Johnson",
    age: 30,
    sayHi() {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.age);
        console.log(this);
    },
};

user.sayHi();