
const activeIndicator = document.querySelector('.nav-underline')
const links = document.querySelectorAll('.nav-link')

function indicateActivePage(e){
    activeIndicator.style.left = e.offsetLeft + 'px'
    activeIndicator.style.width = e.offsetWidth +'px'
}

links.forEach(link=>{
    link.addEventListener('click',(e)=>{
        indicateActivePage(e.target)
    })
})