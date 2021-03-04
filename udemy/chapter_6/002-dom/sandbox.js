// get element by id
const title = document.getElementById('page-title') //You don't need # is implied in the getElmentById and this is singular, only one element
console.log(title)



//get emenents by tagName   
const paras = document.getElementsByTagName('p')
console.log(paras)

//get elements by className
const errors = document.getElementsByClassName('error')//You don't nedd . is implied Plural or more them one element
// this isn't a NodeList this will be a HTMLCollection - similar but not iqual
//You can't use the forEach method in HTMLCollection
console.log(errors)
//console.log('forEach error:')
//errors.forEach(error => {
//    console.log(error)
//});



