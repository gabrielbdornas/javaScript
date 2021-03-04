const content = document.querySelector('p')
//classlist to add and remove classes
content.classList.remove('error')
content.classList.add('success')

//test
const divTestPara = document.querySelectorAll('body > div.test > p')
console.log(divTestPara)

divTestPara.forEach(para => {
    //innerText give us all visible text
    //textContent give us all of the text, hiden or not
    if(para.innerText.includes('error')) {
        para.classList.add('error');
    };
    if (para.innerText.includes('success')){
        para.classList.add('success');
    };
})

const titleTest = document.querySelector('.tittle')

titleTest.classList.toggle('test') // add test class
titleTest.classList.toggle('test') // remove test class
