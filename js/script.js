/*Строгий режим*/
// 'use strict'
// function myFn() {
//     a = true;
//     console.log(a);
// }
// myFn();
// console.log(a);



// /*Жизненный цикл переменных*/
// let a;
// let b;

// function myFn() {
//     // let a;
//     let b;
//     a = 'myFn_a';
//     b = 'myFn_b';
//     function innerFn() {
//         // let a;
//         let b;
//         a = 'innerFn_a';
//         b = 'innerFn_b';
//         console.log(a);
//         console.log(b);
//     }
//     innerFn();
//     console.log(a);
//     console.log(b);

// }
// myFn();

// console.log(a);
// console.log(b);



// /*Цепочка области видимости*/
// const a = 5;

// function myFn() {
//     function innerFn() {
//         console.log(a);
//     }
//     innerFn();
// }

// myFn();



// /*Области видимости*/
// // let a;
// // let b;

// // function myFn() {
// //     let b;
// //     a = true;
// //     b = 10;

// //     console.log(b);
// // }

// // myFn();

// // console.log(a);
// // console.log(b);

// /*Колбэк функции*/
// // function myName() {
// //     console.log('Dmitry');
// // }

// // console.log('start');
// // setTimeout(myName, 3000);
// // console.log('stop');

// // function anotherFunction() {
// // }

// // function fnWithCallback(callbackFunction) {
// //     callbackFunction();
// // }

// // fnWithCallback(anotherFunction);



// /*Функции*/
// // const personOne = {
// //     name: 'Bob',
// //     age: 21,
// // };

// // function increasePersonAge(person) {
// //     const updatedPerson = Object.assign({}, person);
// //     updatedPerson.age += 1;
// //     return updatedPerson;
// // }

// // const updatedPersonOne = increasePersonAge(personOne);
// // console.log(personOne.age);
// // console.log(updatedPersonOne.age);

// // function summ(a, b) {
// //     let c;
// //     a = a + 1;
// //     c = a + b;
// //     return c;
// // }
 
// // console.log(summ(10, 3));



// // /*Мутации*/
// // const a = 10;
// // let b = a;
// // b = 30;

// // console.log(a);
// // console.log(b);

// // const person = {
// //     name: 'Dmitry',
// //     age: 30,
// // };

// // person.age = 33;
// // person.isAdult = true;



// // /*Мутации копий 1*/
// // const person2 = Object.assign({}, person);

// // person2.age = 26;
// // person2.isAdult = true;

// // console.log(person.age);
// // console.log(person2.age);

// // /*Мутации копий 2*/
// // const person3 = {...person};
// // person3.name = 'Oleg';

// // console.log(person.name);
// // console.log(person2.name);
// // console.log(person3.name);



// // /*Мутации копий 3*/
// // const person4 = JSON.parse(JSON.stringify(person));

// // person4.name = 'Alice';

// // console.log(person.name);
// // console.log(person4.name);



// // /*JSON*/
// // const json = {
// //     userId: 1,
// //     id: 1,
// //     title: 'Test title',
// //     status: {
// //         completed: false,
// //     },
// // };

// // var jsonString = JSON.stringify(json);
// // console.log(jsonString);

// // var jsonObject = JSON.parse(jsonString);
// // console.log(jsonObject);



// // /*Объекты - Методы*/
// // const myCity = {
// //     city: 'New York',
// //     info: {
// //         isPopular: true,
// //         country: 'USA',
// //     },
// //     cityGreeting: function () {
// //         console.log('Greeting');
// //     },
// // };

// // myCity.cityGreeting();



// /*Прочее*/
// // console.log(myCity.info.isPopular);
// // delete myCity.info['isPopular'];

// // console.log(myCity);

// // const name = 'Dmitry';
// // const postsQty = 123;
// // const userProfile = {
// //     name: name,
// //     postsQty: postsQty,
// //     hasSignedAgreement: false,
// // };

// // console.log(userProfile);