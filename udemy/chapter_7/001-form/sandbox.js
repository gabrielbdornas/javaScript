const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback');
//const username = document.querySelector('#username') // first way to do
form.addEventListener('submit', e => {
    e.preventDefault() // prevent the default action that is refrex the page
    //console.log(username.value) // .value shows the value in the input field -- first way to do
    //console.log(form.username.value) // second and easiest way to do this

    // using regex to validat the user input text
    const username = form.username.value
    const usrenamePattern = /^[a-zA-Z]{6,12}$/
    if (usrenamePattern.test(username)){
        feedback.textContent = 'That usarname is valid'
    } else {
        feedback.textContent = 'That usarname isn\'t valid'
    }

})

//regex

const pattern = /[a-z]{6,10}/; //{6,} at least 6 caracheteres long, $ at the end, ^ at the start

//pattern.test(theVariableWeAreSearch) - true or false
//theVariableWeAreSearch.search(pattern) - the integer where the pattern match - if not -1
