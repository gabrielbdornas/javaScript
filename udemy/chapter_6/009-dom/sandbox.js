const copy = document.querySelector('.copy-me')
copy.addEventListener('copy', () => {
    console.log('My event was copied')
});

const move = document.querySelector('.box')
move.addEventListener('mousemove', e => {
    //console.log(e)
    //console.log(e.offsetX, e.offsetY)
    move.textContent = `x position: ${e.offsetX} / y position: ${e.offsetY}`
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY)
})
