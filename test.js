'use strict';
//! Функции-конструкторы

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello, ${this.name}`);
//     };
// }

// User.prototype.exit = function(name) {
//     console.log(`user ${this.name} exit`);
// }

// const ivan = new User('Ivan', 25);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);


//! Контекст вызова this
//! Функция может вызываться четырьмя разными способами

// function showThis(a, b) { 
//     console.log(this); //? В строгом режиме выведет window. Без строго режима выведет undefined
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith'); //? Аргументы здесь передаются через запятую
// sayName.apply(user, ['Smith']); //? Аргументы передаются в массиве через запятую

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));

//! 1) Обычная функция: this = window, но если стоит use strict то будет undefined.
//! 2) Контекст у методов объекта - сам объект
//! 3) this в конструкторах и классах - то новый экземпляр объекта
//! 4) Ручная привязка this: call, apply, bind.

// const btn = document.querySelector('.btnfot');

// btnfot.addEventListener('click', function(){
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const double = a => a * 2;

// console.log(double(2));

//! Классы ES6

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColorRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColorRectangleWithText(25,10,'helloworld', 'red');

// div.showMyProps();
// console.log(div.calcArea());
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

// https://leaddeal.zeustrack.io
// alexche-work@ukr.net
// Poiuytrzxcv1