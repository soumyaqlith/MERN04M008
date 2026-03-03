let str = "Qlith";
console.log(str.length)//5

let no = 30;

// interpolation (backtick)
// we can place any variable inside a template(string)

console.log(`Number ${no}`);

// concatenation
let str1 = "HII";
let str2 = "tunguru";

console.log(str1 + " " + str2);
console.log(str1 + 20);
console.log("1" + 3)

// + operator (normal addition, concatenation, type casting)
console.log(+"5" + 6);


console.log(str2.toUpperCase());
console.log(str1.toLowerCase());

let str3 = " hii ";
console.log(str3.length);
// console.log(str3.trim().length)
console.log(str3.trimStart().length);
console.log(str3.trimEnd().length);

let str4 = "Qlith Innovation";
console.log(str4.slice(1, 7));
console.log(str4.slice(6));
console.log(str4.slice(3,2)); // not possible
console.log(str4.slice(-4)); 
console.log(str4.slice(4,4));

// the starting index < ending index

console.log(str1.concat(str2));
console.log(str4.replace("Q","B"));
console.log(str4.replaceAll("n","N"));

console.log(str4.at(1))
console.log(str4.charAt(1));
console.log(str4[0]);

// let fullName=prompt("Enter your fullname")
// console.log("@"+fullName+fullName.length);

console.log(str4.split(""))