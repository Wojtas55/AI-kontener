let clicked = null;
document.body.addEventListener('click',e=>{
    if (clicked ) {
        clicked = null
    } else if (e.target instanceof HTMLDivElement){
        document.querySelector('svg').insertAdjacentHTML('beforeend',`<line x1=${e.clientX} y1=${e.clientY} marker-end="url(#arrow)" >`)
        clicked = document.querySelector('line:last-child')
    }
})
document.body.addEventListener('mousemove', e=>{
    if (clicked){
        clicked.setAttribute('x2', e.clientX) 
        clicked.setAttribute("y2", e.clientY)
    }
})