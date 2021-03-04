const article = document.querySelector('article')
//articles children are h2, ps and div
// HTMLCollection into array
Array.from(article.children).forEach(child => {  //not destroctive
    child.classList.add('article-element')
});

const title = document.querySelector('h2')
console.log(title.parentElement)
console.log(title.nextElementSibling)
console.log(title.previusElementSibling)
