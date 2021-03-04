// for loops

//variable, condition, increment counter
for(let i = 0; i < 5; i++) {
    console.log(i);
} // now need ";" here
// now need ";" after for

const names = ['gabriel', 'renata', 'lelia'];

for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

//while
let a = 10;
while(a < 15) {
    console.log(a);
    a++;
} // now need ";" here

//while
let b = 0;
while(b < names.length) {
    console.log(names[b]);
    b++;
} // now need ";" here

//do while - execute the code at least one time
let c = 0
do{
    console.log(c);
    c++;
} while(c < 0)

//if statament
const age = 25
if(age > 20){
    console.log(`Over ${age}`)
}

//if else statament
if(age < 20){
    console.log(`Over ${age}`)
} else {
    console.log(`under ${age}`)
}

//if else statament
if(age < 20){
    console.log(`Over ${age}`)
} else if(age > 21 && age < 22) {
    console.log(`teste ${age}`)
} else {
    console.log(`under under ${age}`)
}

//logical operators OR || and AND && (am·per·sand)

//logical NOT (!)

if (age != 24) {
    console.log('Not 24')
}
//changes values
console.log(!false)
console.log(!true)

// Break and continue

const scores = [10, 20, 0, 50, 100, 110, 120 ]

for (let i = 0; i < scores.length; i++) {
    
    if (scores[i] === 0) {
        console.log("zero won't be printed be")
        continue
    }
    
    console.log(`your score is: ${scores[i]}`)

    if (scores[i] === 100){
        console.log('you are in the top score, the program will be stoped here!')
        break
    }
}

//Switch Statements
const grade = 'C'

switch(grade) {
    case 'A':
        console.log('Grade iqual to A');
        break
    case 'B':
        console.log('Grade iqual to B');
        break
    case 'C':
        console.log('Grade iqual do C');
        break
    case 'D':
        console.log('Grade iqual do D');
        break
    case 'E':
        console.log('Grade iqual do E');
        break
    default:
        console.log('not a valid grade');    
}

//variables & block scope
//let and const has block scope and var not if you put var inside code block you can use it outside

const age_variables = 30;

if(true){
    const age_variables = 40
    const name = 'shaum'
    console.log('Inside de 1st code block:', age_variables, name);

    if(true){
        console.log('Inside de 2nd code block:', age_variables, name)
    }
};

console.log('Ouside de code block', age_variables, name)

