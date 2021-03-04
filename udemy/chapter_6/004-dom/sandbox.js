const link = document.querySelector('a')
console.log(link.getAttribute('href'))
link.setAttribute('href', 'https://codei.com.br')
link.innerText = 'Learning getting and settings'
const p = document.querySelector('p')
p.setAttribute('style', 'color: green') //setAtributes overight the previus style
p.style.margin = '50px' //set a new atribute, not overright
p.style.fontSize = '40px' //set a new atribute, not overright
//for syle font-size became in js fontSize
//delete a stile = ''
p.style.margin = ''
