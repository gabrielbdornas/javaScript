//block of code
//definition 
function mostrarFunction() {

}
//and call function
mostrarFunction()
//with parameters
//blocs of code reusebol
//method is similar

//function declaration - explication
function greet(){
    console.log('hello there')
}
//call the function or involque
greet()
greet()
greet()

//function expression - semicolon after de expresssion
const speak = function(){
    console.log('good day')
};

speak()
speak()

//hoisting
//declare before de call for function declaration - if you put greet() before the declaration it wont work (error -greet is not defined)
//extrand declare always first - logic code
//prefer function expression - We will see why

//arguments and parameters
const speakArg = function(name, time){ //name here is a local variable
    console.log(`good ${time} ${name}`)
};

speakArg('mario')
console.log(name) //variable not existent outside of the function
speakArg('mario', 'morning') // the order of the parameter import - iqual to the function declaration

//default values
const speakArgDefaultValues = function(name = 'Nome não informado', time = 'período não informado'){ //name here is a local variable
    console.log(`good ${time} ${name}`)
};

speakArgDefaultValues()
speakArgDefaultValues('Gabriel') //subscribe the default value

//returning a value
const calcArea = function(radius) {
    let area = 3.14 * radius**2
    return area
}
const area = calcArea(3)
console.log(area)
console.log(calcArea(2))

const calcAreaClean = function(radius) {
    return 3.14 * radius**2
}

//arrow function
const calAreaArr = (radius) => {
    return 3.14 * radius**2
}

console.log(`Arrow funtion ${calAreaArr(55)}`)

//arrow function - one parameter
const calAreaArrOnePar = radius => {
    return 3.14 * radius**2
}

console.log(`Arrow funtion one parameter ${calAreaArrOnePar(56)}`)

//arrow function - one parameter
const calAreaArrOneline = radius => 3.14 * radius**2;

console.log(`Arrow funtion one line ${calAreaArrOnePar(06)}`)

const greetArr = () => 'Hello Word';

console.log(greetArr())

const bill = (products, tax) => {
    let total = 0
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(`bil tax = ${bill([10, 10, 10], 10)}`);

//method - just a function what distinct is the way we define and call
//function inside an Object or data types

//call back functions

people = ['renata', 'gabriel', 'lelia']

people.forEach((person, index) => {
    console.log(`call back functions expample -  ${index}: ${person}`)
});

const logPerson = (person, index) => {
    console.log(`${index} : ${person} - anohter call back function exemplos`)
}

people.forEach(logPerson)

let html = ``;
people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html)

const ul = document.querySelector('.people');
ul.innerHTML = html