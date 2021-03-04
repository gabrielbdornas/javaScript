//querySelector - Select only one 
const para = document.querySelector('p');// retrieve the first element, in this case the p tag
const error = document.querySelector('.error');
const divError = document.querySelector('div.error');
const docCopyPage = document.querySelector('body > h1') // rigth click on the element in inspect options - 4:50 46-video
console.log('This print the first paragraphe: ', para);
console.log(error);
console.log(divError);

//querySelectorAll - Select all
const allPara = document.querySelectorAll('p'); // this create an NodeList that's look like an array but isnt
const allErrors = document.querySelectorAll('.error');
console.log(allPara);
console.log(allErrors)

//what's possible
//print one element in Java 0 base
console.log(allPara[0]);
//forEach
allPara.forEach(para => {
    console.log('It paragraphe printed in the forEach method: ', para)
})
