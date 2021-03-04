const button = document.querySelector('button');
const ul = document.querySelector('ul')
const items = document.querySelectorAll('li');

// button.addEventListener('click', () => {
//     console.log('you clicked me')
// })

items.forEach(item => {
    item.addEventListener('click', event =>{ //contend what happens in the event - could be all name
        //event.target.style.textDecoration = 'line-through'; // with was clicked - could be item too in these context
        event.target.remove();
    })
})

button.addEventListener('click', () => {
    //ul.innerHTML += '<li>Mais um TODO</li>'
    //Another way
    const li = document.createElement('li');
    li.innerText = 'Another way to append or prepend a TODO';
    ul.append(li); // could be ul.prepend(li);
})

ul.addEventListener('click', e =>{
    if(e.target.tagName === 'LI'){
        e.target.remove()
    }
})