console.log("question1:");
let car={
    name:"kia",
    model:"kia seltors",
    year:2019
}
Object.freeze(car)
car.year=2020
console.log(car);
console.log(Object.isFrozen(car));

// Question 2:
// Create an object representing a user with properties name, age, and email.
//  Use Object.isFrozen() to check if the object is frozen and display the result.
console.log("question2:");
let user={
    name:"divya",
    age:21,
    email:"divya123@gmail.com"
}
console.log(user);
console.log(Object.isFrozen(user));

// Question 3:
// Create an object representing a product with properties name, category, and price. 
// Use Object.isSealed() to check if the object is sealed and display the result.
console.log("question3:");
let product={
    pname:"shoes",
    pcaterogy:"sneaker",
    price:1000
}
console.log(product);
console.log(Object.isSealed(product));

// Question 4:
// Create an object representing a laptop with properties brand, model, and price. 
// Use Object.keys() to list all the keys in the object and display them.
console.log("question4:");
let laptop={
    brand:"Acer",
    model:"Aspire5",
    price:50000
}
console.log(Object.keys(laptop));

// Question 5:
// Create an object representing a house with properties location, size, and price.
//  Use Object.values() to retrieve all values from the object and display them.
console.log("question5:");
let house={
    location:"hyderabad",
    size:"500sq.yards",
    price:50000000
}
console.log(Object.values(house));

// Question 6:
// Create an object representing a smartphone with properties brand, model, and price. Seal the object using Object.
// seal(), modify the price, and then check if the object is sealed using Object.isSealed().
console.log("question6:");
let smartphone={
    brand:"iphone",
    model:"16promax",
    price:150000
}
Object.seal(smartphone);
smartphone.price=160000
console.log(smartphone);
console.log(Object.isSealed(smartphone));

// Question 7:
// Create an object representing a book with properties title, author, and publishedYear. 
// Freeze the object using Object.freeze(), then try to modify the publishedYear and check if the object is frozen using Object.isFrozen().
console.log("question7:");
let book={
    title:"The one Indian girl",
    author:"chetan bagath",
    year:2015
}
Object.freeze(book);
book.year=2017
console.log(book);
console.log(Object.isFrozen(book));


// Question 8:
// Create an object representing a person with properties firstName, lastName, and age. 
// Use both Object.keys() and Object.values() to retrieve and display all keys and values of the object.
console.log("question8:");
let person={
    fname:"Divya",
    lname:"Saireddy",
    age:21
}
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// Question 9:
// Create an object representing a course with properties title, instructor, and duration.
//  Use Object.entries() to get the key-value pairs, and then modify the object using the delete operator to remove the duration property.
console.log("question9:");
let course={
    title:"Full Stack",
    instructor:"Vamsi",
    duration:"6-7months"
}
console.log(Object.entries(course));
delete course.duration;
console.log(course);


// Question 10:
// Create an object representing an employee with properties name, position, and salary. 
// Seal the object using Object.seal(), modify the position, and then use Object.
// keys() to list all properties and verify that no new properties can be added.
console.log("question10:");
let employee={
    name:"Divya",
    Position:"React Developer",
    salary:500000
}
console.log(employee);
Object.seal(employee);
employee.Position="frontend developer"
employee.experience="5years"
console.log(Object.keys(employee));git 








