let slides = document.querySelectorAll(".slider .slide");
let next = document.getElementById('next')
let prev = document.getElementById('prev')


let active = 0;
function loadShow(){
  let stt = 0;
  for(var i = active;i<slides.length;i++){
      slides[i].style.transform=`translateX(${100 * stt}%) `
      stt++
  }
  
}
loadShow()
next.onclick=function(){
    active = active +1 < slides.length ? active + 1:active;
    loadShow()
}
prev.onclick=function(){
 
    active = active -1 >= 0 ? active - 1:active;
    loadShow()
}