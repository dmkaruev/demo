/*JSON*/
const json = {
    userId: 1,
    id: 1,
    title: 'Test title',
    status: {
        completed: false,
    },
};

var jsonString = JSON.stringify(json);
console.log(jsonString);

var jsonObject = JSON.parse(jsonString);
console.log(jsonObject);



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