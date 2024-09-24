// Question:1
// Write a program where you need to extract the middle part of the string and converted it to upperacse
var str="Hello,everyone! How are you?"
var str1=str.slice(6,15)
console.log(str1);

// Question:2
// Write a program that converts a string to uppercase and then calculates the length of the resulting string.
let s="Hello,everyone!"
let s1=s.toUpperCase()
console.log(s1,s.length);


// Question:3
// Write a program that retrieves the character at a specific position in a string, and then finds the ASCII value (character code) of that character.
let a="Hello,Everyone!"
let a1=a.charAt(6)
console.log(a1 , a1.charCodeAt(a1));

// Question:4
// Write a program that removes extra spaces from the start and end of a string, 
// and then slices a portion of the string starting from the second character to the fourth character.
let b="         Hello,Everyone!       "
console.log(b);
let b1=b.trim()
console.log(b1,b1.slice(2,5));

// Question:5
// Write a program that concatenates two strings where the first string is in its original case 
// and the second string is converted to lowercase before concatenation.
let c="Hello,Everyone!"
let c1="How are you?"
console.log(c1.toLowerCase());
console.log(c.concat(" ",c1));

// Question:6
// Write a program that removes leading spaces from a string, and then slices the string starting from the second character to the end.
let d="       Hello,Everyone!    "
console.log(d);
let d1=d.trim()
console.log(d1.slice(1));

// Question:7
// Write a program that retrieves a specific character from a string and converts it to uppercase.
let e="Hello,Everyone!,How are you?"
let e1=e.charAt(7)
console.log(e1,e1.toUpperCase());

// Question:8
// Write a program that removes trailing spaces from a string and then concatenates it with another string.
let f="Hello,Everyone!,             "
console.log(f);
let f1=f.trim()
let f2="How are you?"
console.log(f1.concat(" ",f2));

// Question:9
// Write a program that:
// Trims extra spaces from the start and end of a string.
// Converts the trimmed string to uppercase.
// Extracts a substring from the second character to the fifth character from the uppercase string.
let g="             Hi this is javascript     "
console.log(g);
let g1=g.trim()
let g2=g1.toUpperCase()
console.log(g2);
console.log(g2.slice(2,6));

// Question: 10
// Write a program that:
// Converts two strings to lowercase.
// Concatenates the two lowercase strings with a space in between.
// Retrieves the first character of the concatenated result.
let h="HELLO"
let i="WORLD"
console.log(h.toLowerCase(),i.toLowerCase());
let h1=h.concat("  ",i)
console.log(h1);
console.log(h1.charAt(0));



























