
const windowPathname = window.location.pathname
const underline = document.querySelector('.nav-underline')

const geo = document.getElementById('geo')
const rus = document.getElementById('rus')
const eng = document.getElementById('eng')

if(windowPathname === "/pages/about.html"){
    underline.style.width = '134px'
    underline.style.left = "100px"

}
if(windowPathname === "/pages/news.html"){
    
    underline.style.left = "413px"

}
if(windowPathname === "/pages/contacts.html"){
    
    underline.style.left = "513px"


}
if(windowPathname === "/pages/tourinvest.html"){
    underline.style.left = "234px"
    underline.style.width = '179px'

}


rus.addEventListener('click', function(){
   rus.classList.add('lang-item')
   geo.classList.remove('lang-item')
   eng.classList.remove('lang-item')
})
eng.addEventListener('click', (e)=>{
   eng.classList.add('lang-item')
   geo.classList.remove('lang-item')
   rus.classList.remove('lang-item')
})
geo.addEventListener('click', (e)=>{
   geo.classList.add('lang-item')
   eng.classList.remove('lang-item')
   rus.classList.remove('lang-item')
})