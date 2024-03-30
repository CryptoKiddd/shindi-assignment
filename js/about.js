let slides = document.querySelectorAll(".slider .slide");
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let about = document.getElementById('slide-about')
let goals = document.getElementById('slide-goals')
let ambitions = document.getElementById('slide-ambitions')


let active = 0;
function slideshow(){
  let stt = 0;
  for(var i = active;i<slides.length;i++){
      slides[i].style.transform=`translateX(${100 * stt}%) `
      stt++
  }
  
}
slideshow()
next.onclick=function(){
    active = active +1 < slides.length ? active + 1:active;
    slideshow()
}
prev.onclick=function(){
 
    active = active -1 >= 0 ? active - 1:active;
    slideshow()
}
about.onclick=function(){
    active = 0
    about.style.background='#224862'
    about.style.color='white'
    ambitions.style.background='white'
    goals.style.background='white'

    goals.style.color='#224862'
    ambitions.style.color='#224862'

    slideshow()


}
ambitions.onclick=function(){
    active = 1
    ambitions.style.background='#224862'
    ambitions.style.color='white'

    goals.style.background='white'
    about.style.background="white"

    goals.style.color='#224862'
    about.style.color='#224862'

    slideshow()

}
goals.onclick=function(){
    active = 2
    goals.style.background='#224862'
    goals.style.color='white'
    
    about.style.background="white"
    ambitions.style.background='white'

    about.style.color='#224862'
    ambitions.style.color='#224862'


    slideshow()

}