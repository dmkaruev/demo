/*Функции*/
const personOne = {
    name: 'Bob',
    age: 21,
};

function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person);
    updatedPerson.age += 1;
    return updatedPerson;
}

const updatedPersonOne = increasePersonAge(personOne);
console.log(personOne.age);
console.log(updatedPersonOne.age);

// function summ(a, b) {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }
 
// console.log(summ(10, 3));

// /*Мутации*/
// const a = 10;
// let b = a;
// b = 30;

// console.log(a);
// console.log(b);

// const person = {
//     name: 'Dmitry',
//     age: 30,
// };

// person.age = 33;
// person.isAdult = true;

// /*Мутации копий 1*/
// const person2 = Object.assign({}, person);

// person2.age = 26;
// person2.isAdult = true;

// console.log(person.age);
// console.log(person2.age);

// /*Мутации копий 2*/
// const person3 = {...person};
// person3.name = 'Oleg';

// console.log(person.name);
// console.log(person2.name);
// console.log(person3.name);

// /*Мутации копий 3*/
// const person4 = JSON.parse(JSON.stringify(person));

// person4.name = 'Alice';

// console.log(person.name);
// console.log(person4.name);

// /*JSON*/
// const json = {
//     userId: 1,
//     id: 1,
//     title: 'Test title',
//     status: {
//         completed: false,
//     },
// };

// var jsonString = JSON.stringify(json);
// console.log(jsonString);

// var jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);



// /*Объекты - Методы*/
// const myCity = {
//     city: 'New York',
//     info: {
//         isPopular: true,
//         country: 'USA',
//     },
//     cityGreeting: function () {
//         console.log('Greeting');
//     },
// };

// myCity.cityGreeting();



/*Прочее*/
// console.log(myCity.info.isPopular);
// delete myCity.info['isPopular'];

// console.log(myCity);

// const name = 'Dmitry';
// const postsQty = 123;
// const userProfile = {
//     name: name,
//     postsQty: postsQty,
//     hasSignedAgreement: false,
// };

// console.log(userProfile);