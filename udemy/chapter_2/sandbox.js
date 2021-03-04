// 5. Adding JavaScript to a Web Page
// ";" marks the end of an statament
// alert('Hello, Word!');

// 6. The Browser Console
console.log(1);
console.log(2);

// 7. Variables, Constants & Comments
// variable name camelCase (without spaces, can't start with number)
let age = 25;
let year = 2019;
console.log(age, year);
age = 30;
console.log(age);
const points = 100;
//points = 101; //Assignment to constant variable.
console.log(points);
//Old way
var score = 25;
/*can be used to commend to*/

/*DataTipes
Numbers - Integer and floats
string
Boolean
Null - variable has no value (empty value)
Undefined - variables that have not yet been defined (empty value)
Object - complex data structure - Arrays, Dates, Literals
Symbol - Used with objects
*/

//Strings
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
console.log('helo, word');
let email = 'teste@gmail.com';
console.log(email);

//string concatenation
let firstName = 'gabriel ';
let lastName = 'dornas';
let fullName = firstName + lastName;
console.log(fullName);

//string getting characteres
console.log(firstName[0]);

//string length - its only a property
//in vscode when you type . and start to write an method it tells you it's a method and the same hapens with properties
console.log(firstName.length);
console.log(fullName.length);

//string methods
//function related to an object - in this case string objects
//in vscode when you type . and start to write an method it tells you it's a method and the same hapens with properties
console.log(fullName.toUpperCase()); // is important to put () after the method
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeFirstLetter(fullName));
console.log(capitalizeFirstLetter(firstName));
let index = email.indexOf('@');
console.log(index);
let indexInex = email.indexOf('1');
console.log(indexInex) // return -1;

//Common string methods

let emailGabriel = 'gabriel@teste.com';
let result = emailGabriel.lastIndexOf('e'); // the index of the last 'e'
console.log(result);
let testSlice = 'gabriel';
//.slice two arguments, firs the position, second how many characteres do you want to slice (first - where we go from, second - where we go to)
console.log(testSlice.slice(1));
console.log(testSlice.slice(0,1).toUpperCase() + testSlice.slice(1));
//replace
console.log(emailGabriel.replace('g', 'w'));

//Numbers

let radius = 10;
const pi = 3.14

//operations +, -, *, /, **, %
//order operation BIDMAS (B FOR BRACKETS AND I FOR INDICES **)

let order = 5 * (10-3)**2

// first 10-3=7
// then 7**2=49
// then 49*5=245

console.log(order)

//area of the circle

let area = pi * radius**2
console.log(area)

//short hand notation
// ++
// --
// +=
// // -=
// *=
// /=


// NaN - not a number

console.log(5 / 'helo')

//concatenation
let likes = 10
const textLikes = 'The blog has ' + likes + ' likes'
console.log(textLikes)

//template string way - template literal
const textLikesInterpollation = `The blog has ${likes} likes`
console.log(textLikesInterpollation)

//createing an html template
let titleHtml = 'Testando html template'
let author = 'Gabriel Braico Dornas'

let html = `
    <h2>${titleHtml}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes</span>
`
console.log(html)

//Arrays
// Objects, a colection of things in (related things)
let ninjas = ['gabriel', 'renata'];
console.log(ninjas);
console.log(ninjas[0]);
ninjas[1] = 'lelia';
console.log(ninjas);
console.log(ninjas[1]);
//properties
console.log(ninjas.length);
//methods
console.log(ninjas.join('-'));
console.log(ninjas.indexOf('gabriel'));
ninjas.push('can'); // distroctive methods, change the original method
ninjas.pop();  // distroctive methods, change the original method, TAKE OF THE LAST VALUE
console.log(ninjas);

//Null and undefined
let ageTests;
console.log(ageTests, ageTests + 3, `the age is ${ageTests}`)
console.log(ageTests, ageTests += 3, `the age is ${ageTests}`)
ageTests = null // null here will act like zero and we can make calculations, in this case
console.log(ageTests, ageTests += 3, `the age is ${ageTests}`)

//Booleans & Comparisons
//true and false
console.log(true, false)
//is not diferent of
console.log("true", "false")
console.log('g@gmail.com'.includes('@')) //includes()
console.log('g@gmail.com'.includes('!')) //includes()
//includes() can be used for arrays to
let ageComparation = 25
console.log(ageComparation == 25)
console.log(ageComparation == 45)
console.log(ageComparation != 45)

//losse comparasions
console.log(25 == '25') //type convertion on the background 

//strict comparasion - check the value type too, not type convertion before comparing
console.log(25 === '25')

//type convertion

let ageNumber = '100'
console.log(ageNumber + 1)
ageNumber = 100
console.log(ageNumber + 1)
ageNumber = '100'
ageNumber = Number(ageNumber)
console.log(ageNumber + 1)
console.log(typeof ageNumber) // how to know a type of or class of some variable
console.log(String(50), typeof String(50))
//positive and negative numbers are true and zero are false, string with length are true no length is false
console.log(Boolean(100), Boolean(-100), Boolean(0), Boolean('Gabriel'), Boolean(''))
