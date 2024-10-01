let person={
  fname:"divya",
  lname:"saireddy",
  age:21,
  salary:500000
}
let pers=Object.getOwnPropertyNames(person)
// console.log(person);



// // Create a prototype object
// const vehicle = {
//   wheels: 4,
//   color: 'red'
// };

// // Create a new object inheriting from `vehicle`
// const car = Object.create(vehicle);
// car.brand = 'Toyota';

// console.log(car.wheels);  // Output: 4 (inherited from `vehicle`)
// console.log(car.color);   // Output: red (inherited from `vehicle`)
// console.log(car.brand);   // Output: Toyota (own property of `car`)



// let a={
//   name:"divya",
//   age:21,
//   dept:"IT"
// }
// let b={
//   name:"div",
//   age:16,
//   role:"developer"
// }
// Object.assign(a,b);
// console.log(a);





// const computer = {
//     brand: "Apple",
//     model: "MacBook Pro"
//   };
//   console.log(Object.isExtensible(computer)); 
  
//   Object.preventExtensions(computer);
  
//   computer.memory = "16GB"; 
//   console.log(computer); 
  
//   console.log(Object.isExtensible(computer));       
  

// const book = {
//     title: "JavaScript",
//     author: "MDN",
//     pages: 400
//   };
//   Object.seal(book);
  
//   book.pages = 450;  
//   book.genre = "Programming";  
//   delete book.title; 
//   console.log(book); 
//   console.log(Object.isSealed(book)); 
  
// const car = {
//     make: "Rolls Royce",
//     model: "Phantom",
//     year: 2023
//   };
//   Object.freeze(car);
//   car.year = 2024;  
//   delete car.model;
//   console.log(car); 
//   console.log(Object.isFrozen(car)); 
  

// const person = {
//     name: "Vamsi",
//     age: 26,
//     job: "React Developer"
//   };
  
// //    Object.keys()
//   console.log(Object.keys(person));
  
// //    Object.values() 
//   console.log(Object.values(person));
   
// //   Object.entries()
//   console.log(Object.entries(person));
  





// let a = "abc";
// let upperLength = a.toUpperCase().length;
// console.log(upperLength);

// let b = "abc";
// let charCode = b.charCodeAt(b.charAt(1).length - 1);
// console.log(charCode);

// let c = "   abcdef   ";
// let slicedTrimmed = c.trim().slice(1, 4);
// console.log(slicedTrimmed);


// let a1 = "Hello";
// let b1 = "WORLD";
// let combined = a1.concat(" ", b1.toLowerCase());
// console.log(combined);

// // 5. Using trimStart() and slice()
// let c1 = "   abc";
// let trimmedSlice = c1.trimStart().slice(1);
// console.log(trimmedSlice);

// let a2 = "abc";
// let upperChar = a2.charAt(2).toUpperCase();
// console.log(upperChar);

// let b2 = "xyz   ";
// let result = b2.trimEnd().concat("abc");
// console.log(result);


// let c3 = "abc";
// let firstChar = c3.at(0);
// let secondChar = c3[1];
// console.log(firstChar);
// console.log(secondChar);


// let a4= "ABCD";
// let lowerSlice = a4.toLowerCase().slice(1, 3);
// console.log(lowerSlice);

// let b5 = "  a ";
// let firstCharTrimmed = b5.trim().charAt(0);
// console.log(firstCharTrimmed);





















// // // var a={
// // //     name:"div",
// // //     age:21,
// // //     sal:500000
// // // }
// // // console.log(a);
// // // console.log(Object.keys(a));
// // // console.log(a.age);
// // // console.log(a.name);
// // // console.log(Object.values(a));
// // // console.log(Object.entries(a));

// // // var b={
// // //     movie:"devara",
// // //     hero:"NTR"
// // // }
// // // Object.freeze(b)
// // // b.year=2024
// // // console.log(b);
// // // console.log(Object.isFrozen(b));


// // // var c={
// // //     hero:"Nani",
// // //     Movie:"Hi Nanna"
// // // }
// // // Object.seal(c)
// // // c.Movie="MCA"
// // // c.year="2023"
// // // console.log(c);
// // // console.log(Object.isSealed(c));



// // // // Object.freeze(a);
// // // Object.seal(a);
// // // a.dept="IT"
// // // a.role="developer"
// // // a.name="divya"
// // // console.log(a);
// // // console.log(Object.isSealed(a));
// // // console.log(Object.isFrozen(a));
// // // console.log(Object.isExtensible(a));

// // // // console.log(a);







