const para = document.querySelector('p')
console.log(para.innerText) //innerText is a property - withou paraenthesis
//para.innerText = 'ninjas are awesome'

const paras = document.querySelectorAll('p'); // nodeList

paras.forEach(para => {
    para.innerText = 'new text'
})

const content = document.querySelector('.content')
console.log(content.innerHTML)

//content.innerHTML = '<h2>THIS IS A NEW H2</h2>'

const people = ['gabriel', 'renata', 'lelia']

people.forEach(p => {
    content.innerHTML += `<p>${p}</p>`
})



